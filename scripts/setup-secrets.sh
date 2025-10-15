#!/bin/bash

# Portfolio Deployment Secrets Setup Script
# This script helps configure GitHub secrets for SSH deployment

set -e

echo "🔑 Portfolio Deployment Secrets Setup"
echo "===================================="
echo ""

# Check if gh CLI is available
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "   Install it from: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI."
    echo "   Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is ready"
echo ""

# Get repository info
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")
if [ -z "$REPO" ]; then
    echo "❌ Not in a GitHub repository directory."
    echo "   Make sure you're in the portfolio repository."
    exit 1
fi

echo "📍 Repository: $REPO"
echo ""

# Function to set secret
set_secret() {
    local name=$1
    local description=$2
    local value=$3

    echo "Setting secret: $name"
    echo "$value" | gh secret set "$name" --body -
    if [ $? -eq 0 ]; then
        echo "✅ $name configured successfully"
    else
        echo "❌ Failed to set $name"
        return 1
    fi
    echo ""
}

# SSH Private Key
echo "🔐 SSH Private Key Configuration"
echo "--------------------------------"

# Try to get SSH key from config
SSH_KEY_PATH=$(ssh -G servidor-198 | grep "^identityfile " | awk '{print $2}' | head -1 | sed "s|~|$HOME|g")

if [ -z "$SSH_KEY_PATH" ]; then
    SSH_KEY_PATH="$HOME/.ssh/id_rsa"
fi

if [ ! -f "$SSH_KEY_PATH" ]; then
    echo "❌ SSH private key not found at $SSH_KEY_PATH"
    echo "   Available keys:"
    ls -la ~/.ssh/*.pub 2>/dev/null | sed 's/.pub$//' || echo "   No keys found"
    echo ""
    echo "   Please enter the path to your SSH private key:"
    read -p "SSH Key Path: " SSH_KEY_PATH

    if [ ! -f "$SSH_KEY_PATH" ]; then
        echo "❌ Key not found at $SSH_KEY_PATH"
        exit 1
    fi
fi

echo "Found SSH key at: $SSH_KEY_PATH"
echo "🔍 Testing SSH connection..."

# Test SSH connection
if ssh -o ConnectTimeout=5 -o BatchMode=yes servidor-198 "echo 'SSH test successful'" 2>/dev/null; then
    echo "✅ SSH connection to servidor-198 working"
else
    echo "❌ Cannot connect to servidor-198"
    echo "   Please verify your SSH setup first"
    exit 1
fi

# Read SSH private key
SSH_PRIVATE_KEY=$(cat "$SSH_KEY_PATH")
set_secret "SSH_PRIVATE_KEY" "SSH private key for server access" "$SSH_PRIVATE_KEY"

# SSH Host - try to determine from SSH config
echo "🌐 SSH Host Configuration"
echo "------------------------"

# Try to get the actual hostname/IP from SSH config
SSH_HOST=$(ssh -G servidor-198 | grep "^hostname " | awk '{print $2}' 2>/dev/null || echo "")

if [ -z "$SSH_HOST" ] || [ "$SSH_HOST" = "servidor-198" ]; then
    echo "Could not determine actual hostname for servidor-198"
    echo "Please enter the IP address or hostname of your server:"
    read -p "SSH Host (IP or hostname): " SSH_HOST
fi

echo "Using SSH host: $SSH_HOST"
set_secret "SSH_HOST" "SSH server hostname or IP" "$SSH_HOST"

# SSH User
echo "👤 SSH User Configuration"
echo "------------------------"

# Try to determine SSH user
SSH_USER=$(ssh -G servidor-198 | grep "^user " | awk '{print $2}' 2>/dev/null || echo "root")
echo "Detected SSH user: $SSH_USER"

echo "Is this correct? [Y/n]"
read -r CONFIRM
if [[ $CONFIRM =~ ^[Nn] ]]; then
    echo "Please enter the SSH username:"
    read -p "SSH User: " SSH_USER
fi

set_secret "SSH_USER" "SSH username for server access" "$SSH_USER"

# Verify secrets are set
echo "🔍 Verification"
echo "--------------"

echo "Checking configured secrets..."
SECRETS=$(gh secret list --json name -q '.[].name' | tr '\n' ' ')

if [[ $SECRETS == *"SSH_PRIVATE_KEY"* ]] && [[ $SECRETS == *"SSH_HOST"* ]] && [[ $SECRETS == *"SSH_USER"* ]]; then
    echo "✅ All secrets configured successfully!"
else
    echo "❌ Some secrets may not be configured properly"
    echo "   Current secrets: $SECRETS"
    exit 1
fi

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. Commit and push your changes to trigger the workflow"
echo "2. Check GitHub Actions to see the deployment process"
echo "3. Access your deployed portfolio at: http://$SSH_HOST:3001"
echo ""
echo "Commands to test:"
echo "  git add ."
echo "  git commit -m 'feat: add SSH deployment configuration'"
echo "  git push origin main"
echo ""
echo "Monitor deployment:"
echo "  gh run list"
echo "  gh run watch"
echo ""
echo "📚 For more details, see: docs/deployment-setup.md"