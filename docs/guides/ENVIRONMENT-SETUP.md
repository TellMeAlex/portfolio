# Guía Completa de Configuración de Entornos Nativos

## Introducción

Esta guía te llevará paso a paso por la configuración completa de entornos de desarrollo para aplicaciones nativas iOS y Android. Está diseñada para desarrolladores que nunca han trabajado con desarrollo nativo antes.

### Requisitos de Sistema

**Para desarrollo iOS:**
- macOS 13.0 (Ventura) o superior
- Al menos 50 GB de espacio libre en disco
- 8 GB de RAM mínimo (16 GB recomendado)
- Procesador Intel o Apple Silicon

**Para desarrollo Android:**
- macOS, Windows 10/11, o Linux
- Al menos 30 GB de espacio libre en disco
- 8 GB de RAM mínimo (16 GB recomendado)
- Procesador de 64 bits

### Tiempo Estimado de Setup

- Setup completo de iOS: **2-3 horas** (incluyendo descargas)
- Setup completo de Android: **1-2 horas** (incluyendo descargas)
- Configuración de certificados: **30-60 minutos**

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

#### Homebrew (macOS Package Manager)

```bash
# Verificar si Homebrew está instalado
brew --version

# Si no está instalado, instálalo con:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Node.js y npm

```bash
# Verificar instalación
node --version  # Debería ser v16 o superior
npm --version

# Si no están instalados:
brew install node

# O usando nvm (recomendado):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

#### Git

```bash
# Verificar instalación
git --version

# Si no está instalado:
brew install git
```

---

## Parte 1: Setup de iOS (Xcode)

### 1.1 Descargar e Instalar Xcode

**Opción 1: App Store (Recomendado para principiantes)**

1. Abre la **App Store** en tu Mac
2. Busca "Xcode"
3. Haz clic en **Obtener** o en el icono de descarga
4. Espera a que se descargue (puede tardar 1-2 horas dependiendo de tu conexión)
5. Una vez descargado, la App Store instalará automáticamente Xcode

**Opción 2: Apple Developer Website**

1. Ve a https://developer.apple.com/xcode/
2. Haz clic en "Download"
3. Inicia sesión con tu Apple ID
4. Descarga el archivo .xip
5. Haz doble clic en el archivo .xip para extraerlo
6. Arrastra Xcode.app a tu carpeta **Applications**

**Primera Ejecución de Xcode:**

```bash
# Abre Xcode por primera vez desde la terminal
open -a Xcode

# O búscalo en Spotlight (Cmd + Space) y escribe "Xcode"
```

Cuando abras Xcode por primera vez:
- Aceptará los términos y condiciones
- Instalará componentes adicionales necesarios
- Esto puede tomar 10-20 minutos

### 1.2 Instalar Xcode Command Line Tools

Los Command Line Tools son esenciales para compilar aplicaciones desde la terminal:

```bash
# Instalar Command Line Tools
xcode-select --install

# Una ventana emergente aparecerá, haz clic en "Install"
# Espera a que termine la instalación (5-10 minutos)

# Verificar la instalación
xcode-select -p
# Debería mostrar: /Applications/Xcode.app/Contents/Developer

# Aceptar la licencia de Xcode
sudo xcodebuild -license accept
```

### 1.3 Instalar CocoaPods

CocoaPods es el gestor de dependencias para proyectos iOS/macOS:

```bash
# Instalar CocoaPods usando gem (viene con Ruby en macOS)
sudo gem install cocoapods

# Configurar CocoaPods por primera vez (puede tardar varios minutos)
pod setup

# Verificar instalación
pod --version
# Debería mostrar algo como: 1.15.2
```

**⚠️ IMPORTANTE:** Si tienes problemas con permisos, usa:

```bash
# Alternativa sin sudo (recomendado)
gem install cocoapods --user-install

# Añade esto a tu ~/.zshrc o ~/.bash_profile
export PATH=$HOME/.gem/ruby/2.6.0/bin:$PATH

# Recarga tu terminal
source ~/.zshrc
```

### 1.4 Configurar Simuladores iOS

Los simuladores te permiten probar tu app sin un dispositivo físico:

1. **Abrir Xcode**
2. Ve a **Xcode → Settings (o Preferences en versiones antiguas)** (Cmd + ,)
3. Selecciona la pestaña **Platforms** (o Components)
4. Verás una lista de simuladores disponibles

**Simuladores Recomendados para Instalar:**
- iPhone 15 Pro (última versión)
- iPhone SE (3rd generation) (pantalla pequeña)
- iPad Pro 12.9" (para tabletas)

**Instalar simuladores adicionales:**

```bash
# Ver simuladores disponibles
xcrun simctl list

# Listar dispositivos iOS disponibles para descargar
xcodebuild -downloadPlatform iOS
```

**Probar un simulador:**

```bash
# Abrir el último iPhone simulado
open -a Simulator

# O específicamente un dispositivo
xcrun simctl boot "iPhone 15 Pro"
xcrun simctl boot "iPhone SE (3rd generation)"
```

### 1.5 Crear Apple Developer Account (Free Tier)

Para correr aplicaciones en simuladores y en tu propio dispositivo, necesitas una cuenta:

1. Ve a https://developer.apple.com/
2. Haz clic en **Account** (esquina superior derecha)
3. Inicia sesión con tu Apple ID (o crea uno)
4. Acepta los términos del Apple Developer Agreement
5. Completa tu perfil

**⚠️ NOTA:** La cuenta gratuita te permite:
- Desarrollar y probar en simuladores (ilimitado)
- Instalar en tu propio dispositivo (hasta 3 dispositivos)
- Las apps expiran después de 7 días (necesitas reinstalar)
- NO puedes publicar en App Store sin el programa pagado ($99/año)

### 1.6 Verificación: Abrir Proyecto iOS en Xcode

Vamos a verificar que todo funcione correctamente:

```bash
# Navega a tu proyecto Capacitor
cd /Users/alejandro/dev/capacitor-portafolio

# Sincronizar Capacitor (esto crea/actualiza los proyectos nativos)
npx cap sync ios

# Abrir el proyecto iOS en Xcode
npx cap open ios

# O manualmente:
open ios/App/App.xcworkspace
```

**⚠️ IMPORTANTE:** Siempre abre el archivo `.xcworkspace`, NO el `.xcodeproj`

**En Xcode:**

1. Espera a que Xcode indexe el proyecto (barra de progreso en la parte superior)
2. En la barra superior, selecciona un simulador (ej: "iPhone 15 Pro")
3. Haz clic en el botón **Play** (▶️) o presiona `Cmd + R`
4. El simulador se abrirá y tu app debería cargarse

**Si ves tu aplicación ejecutándose en el simulador, ¡tu setup de iOS está completo! ✓**

---

## Parte 2: Setup de Android (Android Studio)

### 2.1 Descargar Android Studio

1. Ve a https://developer.android.com/studio
2. Haz clic en **Download Android Studio**
3. Acepta los términos y condiciones
4. El archivo descargado será aproximadamente 1 GB

**Para macOS:**
- Descargará un archivo `.dmg` (Apple Silicon o Intel según tu Mac)

**Para Windows:**
- Descargará un archivo `.exe`

**Para Linux:**
- Descargará un archivo `.tar.gz`

### 2.2 Instalación Paso a Paso

**macOS:**

1. Abre el archivo `.dmg` descargado
2. Arrastra **Android Studio** a la carpeta **Applications**
3. Abre Android Studio desde **Applications** o usando Spotlight
4. Si aparece un mensaje de seguridad "Android Studio no se puede abrir porque es de un desarrollador no identificado":
   - Ve a **System Settings → Privacy & Security**
   - Haz clic en **Open Anyway**

**Windows:**

1. Ejecuta el archivo `.exe` descargado
2. Sigue el asistente de instalación
3. Acepta las opciones predeterminadas
4. Completa la instalación

**Primera Ejecución - Setup Wizard:**

Cuando abras Android Studio por primera vez, verás el **Android Studio Setup Wizard**:

1. **Welcome Screen**
   - Selecciona "Standard" installation (recomendado)
   - Haz clic en **Next**

2. **Select UI Theme**
   - Elige "Light" o "Dark" según tu preferencia
   - Haz clic en **Next**

3. **Verify Settings**
   - Revisa los componentes que se instalarán:
     - Android SDK
     - Android SDK Platform
     - Android Virtual Device
     - Performance (Intel HAXM o Hypervisor Framework)
   - Haz clic en **Next**

4. **License Agreement**
   - Acepta todos los acuerdos de licencia
   - Haz clic en **Finish**

5. **Downloading Components**
   - Esto descargará aproximadamente 4-5 GB
   - Puede tomar 30-60 minutos dependiendo de tu conexión
   - ☕ Es un buen momento para un café

### 2.3 Android SDK Manager

El SDK Manager gestiona las versiones de Android que puedes usar:

1. En Android Studio, haz clic en **More Actions → SDK Manager**
   - O usa el icono de herramientas en la esquina superior derecha
2. En la pestaña **SDK Platforms**:

**API Levels Recomendados para Instalar:**

| Android Version | API Level | Notas |
|-----------------|-----------|-------|
| Android 14.0 | API 34 | Más reciente (2024) |
| Android 13.0 | API 33 | Ampliamente usado |
| Android 12.0 | API 31 | Buena compatibilidad |
| Android 10.0 | API 29 | Para soporte legacy |

**Cómo instalar:**

1. Marca las casillas de las versiones que quieres
2. Haz clic en **Apply**
3. Acepta los términos de licencia
4. Haz clic en **OK** y espera la descarga

3. En la pestaña **SDK Tools**:

**Herramientas Esenciales:**

- ✅ Android SDK Build-Tools (última versión)
- ✅ Android Emulator
- ✅ Android SDK Platform-Tools
- ✅ Android SDK Tools (obsoleto pero a veces necesario)
- ✅ Intel x86 Emulator Accelerator (HAXM) - solo Intel Macs
- ✅ Google Play services

Marca las casillas y haz clic en **Apply**

### 2.4 Variables de Entorno (ANDROID_HOME, PATH)

Para que tu terminal y Capacitor puedan encontrar Android SDK:

**macOS/Linux:**

```bash
# Abre tu archivo de configuración de shell
# Si usas zsh (macOS default):
nano ~/.zshrc

# Si usas bash:
nano ~/.bash_profile

# Añade estas líneas al final del archivo:

# Android SDK
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin

# Guarda el archivo (Ctrl + O, Enter, Ctrl + X)

# Recarga la configuración
source ~/.zshrc
# o
source ~/.bash_profile
```

**Windows:**

1. Busca "Environment Variables" en el menú inicio
2. Haz clic en "Edit the system environment variables"
3. Haz clic en **Environment Variables**
4. En **User variables**, haz clic en **New**:
   - **Variable name:** `ANDROID_HOME`
   - **Variable value:** `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`
5. Selecciona la variable **Path** y haz clic en **Edit**
6. Añade estas nuevas entradas:
   - `%ANDROID_HOME%\emulator`
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\cmdline-tools\latest\bin`
7. Haz clic en **OK** en todas las ventanas
8. **Reinicia tu terminal o IDE**

**Verificación:**

```bash
# Verifica que ANDROID_HOME esté configurado
echo $ANDROID_HOME
# Debería mostrar: /Users/tu_usuario/Library/Android/sdk (macOS)

# Verifica que adb esté accesible
adb --version
# Debería mostrar: Android Debug Bridge version X.X.X

# Verifica que emulator esté accesible
emulator -list-avds
```

### 2.5 Android Virtual Device (AVD) Manager

Los AVDs son los emuladores de Android:

**Crear tu primer emulador:**

1. En Android Studio, haz clic en **More Actions → Virtual Device Manager**
   - O usa el icono de dispositivo con Android en la barra superior
2. Haz clic en **Create Device**

**Paso 1: Select Hardware**
- Categoría: **Phone**
- Dispositivo recomendado: **Pixel 7** o **Pixel 7 Pro**
- Haz clic en **Next**

**Paso 2: System Image**
- Pestaña: **Recommended**
- Selecciona la imagen más reciente (ejemplo: **Tiramisu** - API 33)
- Si dice "Download" al lado, haz clic para descargar (1-2 GB)
- Haz clic en **Next**

**Paso 3: Verify Configuration**
- **AVD Name:** Deja el predeterminado o cámbialo a algo descriptivo
- **Startup orientation:** Portrait
- **Emulated Performance:**
  - Graphics: **Hardware - GLES 2.0** (recomendado)
  - Boot option: **Cold boot** (o Quick boot si prefieres)
- Haz clic en **Finish**

**Emuladores Recomendados para Crear:**

1. **Pixel 7 (API 33)** - Dispositivo moderno estándar
2. **Pixel 5 (API 29)** - Para probar compatibilidad con versiones antiguas
3. **Pixel Tablet (API 34)** - Para probar en tabletas

**Iniciar un emulador:**

```bash
# Listar emuladores disponibles
emulator -list-avds

# Iniciar un emulador específico
emulator -avd Pixel_7_API_33

# O desde Android Studio:
# Haz clic en el icono de play (▶️) al lado del emulador en el AVD Manager
```

**⚠️ TIPS de Rendimiento:**

- Los emuladores usan mucha RAM (mínimo 2 GB por emulador)
- Cierra otros programas pesados mientras usas emuladores
- En Mac M1/M2, usa imágenes ARM64, son mucho más rápidas
- Considera reducir la RAM del emulador a 2048 MB si tu Mac tiene poca RAM

### 2.6 Verificación: Abrir Proyecto Android

```bash
# Navega a tu proyecto Capacitor
cd /Users/alejandro/dev/capacitor-portafolio

# Sincronizar Capacitor
npx cap sync android

# Abrir el proyecto Android en Android Studio
npx cap open android

# O manualmente:
open -a "Android Studio" android/
```

**En Android Studio:**

1. Espera a que Gradle sincronice el proyecto (puede tomar 5-10 minutos la primera vez)
   - Verás una barra de progreso en la parte inferior: "Syncing..."
2. Si aparece "Gradle Sync failed", haz clic en "Try Again"
3. Una vez sincronizado, selecciona tu emulador en la lista desplegable superior
4. Haz clic en el botón **Run** (▶️) o presiona `Shift + F10`
5. El emulador se abrirá y tu app se instalará

**Si ves tu aplicación ejecutándose en el emulador, ¡tu setup de Android está completo! ✓**

---

## Parte 3: Configuración de Certificados iOS (Para Deployment)

**⚠️ NOTA IMPORTANTE:** Esta sección es necesaria SOLO si quieres:
- Publicar en la App Store
- Instalar en dispositivos de otros usuarios
- Usar servicios como Push Notifications, In-App Purchases, etc.

Para desarrollo local y simuladores, NO necesitas esto todavía.

### 3.1 Apple Developer Program ($99/año)

1. Ve a https://developer.apple.com/programs/
2. Haz clic en **Enroll**
3. Inicia sesión con tu Apple ID
4. Completa el formulario de inscripción
5. Realiza el pago de $99 USD (renovación automática anual)
6. Espera la confirmación (puede tomar 24-48 horas)

**Tipos de cuentas:**
- **Individual:** Para desarrolladores independientes
- **Organization:** Para empresas (requiere DUNS number)

### 3.2 Crear App ID

El App ID identifica de manera única tu aplicación:

1. Ve a https://developer.apple.com/account/
2. Haz clic en **Certificates, IDs & Profiles**
3. En el menú lateral, haz clic en **Identifiers**
4. Haz clic en el botón **+** (arriba a la derecha)

**Paso 1: Register a New Identifier**
- Selecciona **App IDs**
- Haz clic en **Continue**

**Paso 2: Select a type**
- Selecciona **App**
- Haz clic en **Continue**

**Paso 3: Register an App ID**

| Campo | Valor |
|-------|-------|
| **Description** | Nombre descriptivo (ej: "Mi Portafolio App") |
| **Bundle ID** | Debe coincidir con tu app (ej: `com.tudominio.portafolio`) |
| **Bundle ID Type** | Explicit |

**Capabilities (Capacidades):**
- Marca las capacidades que tu app necesitará:
  - Push Notifications
  - Sign in with Apple
  - Associated Domains
  - etc.

Haz clic en **Continue** y luego **Register**

### 3.3 Generar Certificados de Desarrollo

Los certificados prueban que eres quien dices ser:

**Paso 1: Generar Certificate Signing Request (CSR)**

En tu Mac:

1. Abre **Keychain Access** (Spotlight → "Keychain Access")
2. Ve a **Keychain Access → Certificate Assistant → Request a Certificate From a Certificate Authority**
3. Rellena el formulario:
   - **User Email Address:** tu email de Apple ID
   - **Common Name:** tu nombre
   - **CA Email Address:** déjalo vacío
   - **Request is:** Saved to disk
4. Haz clic en **Continue**
5. Guarda el archivo `.certSigningRequest` en tu escritorio

**Paso 2: Crear el certificado en Apple Developer**

1. Ve a https://developer.apple.com/account/resources/certificates/list
2. Haz clic en el botón **+**
3. Selecciona **Apple Development** (para desarrollo)
4. Haz clic en **Continue**
5. Haz clic en **Choose File** y selecciona tu archivo `.certSigningRequest`
6. Haz clic en **Continue**
7. Descarga el certificado (archivo `.cer`)
8. Haz doble clic en el archivo `.cer` para instalarlo en Keychain Access

**Verificación en Keychain Access:**

1. Abre **Keychain Access**
2. Selecciona **My Certificates** en el menú lateral
3. Deberías ver: "Apple Development: tu.email@ejemplo.com"
4. Expándelo (flecha) y verás la clave privada asociada

### 3.4 Provisioning Profiles

Los Provisioning Profiles conectan tu certificado, App ID y dispositivos:

**Para Desarrollo:**

1. Ve a https://developer.apple.com/account/resources/profiles/list
2. Haz clic en el botón **+**
3. Selecciona **iOS App Development**
4. Haz clic en **Continue**
5. **App ID:** Selecciona el App ID que creaste
6. Haz clic en **Continue**
7. **Certificates:** Selecciona tu certificado de desarrollo
8. Haz clic en **Continue**
9. **Devices:** Selecciona los dispositivos donde probarás (puedes registrar dispositivos en la sección "Devices")
10. **Provisioning Profile Name:** Dale un nombre descriptivo (ej: "Mi App - Development")
11. Haz clic en **Generate**
12. Descarga el archivo `.mobileprovision`

**Instalar el Provisioning Profile:**

```bash
# Opción 1: Doble clic en el archivo .mobileprovision

# Opción 2: Copiarlo manualmente
cp ~/Downloads/TuProfile.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/
```

**Configurar en Xcode:**

1. Abre tu proyecto en Xcode
2. Selecciona el proyecto en el navegador lateral
3. Selecciona el target de tu app
4. Ve a la pestaña **Signing & Capabilities**
5. **Automatically manage signing:** Desmarca si quieres control manual
6. **Team:** Selecciona tu equipo de desarrollo
7. **Provisioning Profile:** Selecciona el perfil que descargaste

### 3.5 Registrar Dispositivos de Prueba

Para instalar tu app en un iPhone/iPad físico:

1. Conecta tu dispositivo a tu Mac con un cable
2. Abre Xcode
3. Ve a **Window → Devices and Simulators**
4. Tu dispositivo aparecerá en la lista
5. Copia el **Identifier** (UDID)

**Registrar en Apple Developer:**

1. Ve a https://developer.apple.com/account/resources/devices/list
2. Haz clic en el botón **+**
3. **Platform:** iOS
4. **Device Name:** Nombre descriptivo (ej: "Mi iPhone 13")
5. **Device ID (UDID):** Pega el identificador que copiaste
6. Haz clic en **Continue** y luego **Register**

**⚠️ LÍMITE:** Con cuenta de pago puedes registrar hasta 100 dispositivos por año por tipo (100 iPhones, 100 iPads, etc.)

### 3.6 Keychain Access en macOS

Keychain Access almacena tus certificados y claves:

**Ver tus certificados:**

```bash
# Abrir Keychain Access
open "/Applications/Utilities/Keychain Access.app"

# O desde terminal
security find-identity -p codesigning -v
```

**Categorías importantes:**

- **My Certificates:** Tus certificados de desarrollo y distribución
- **Keys:** Las claves privadas asociadas a certificados

**⚠️ BACKUP IMPORTANTE:**

```bash
# Exportar certificado y clave privada (guárdalo en lugar seguro)
# En Keychain Access:
# 1. Selecciona "My Certificates"
# 2. Haz clic derecho en tu certificado
# 3. "Export..." → Guarda como .p12
# 4. Crea una contraseña fuerte
# 5. Guarda el archivo en un lugar seguro (NO en Git)
```

---

## Parte 4: Configuración de Firma Android (Para Deployment)

### 4.1 Generar Keystore

El keystore es el archivo que firma tu aplicación Android:

**Generar un keystore nuevo:**

```bash
# Navega a tu proyecto
cd /Users/alejandro/dev/capacitor-portafolio/android

# Crear directorio para keystores (NO incluir en Git)
mkdir -p keystores

# Generar keystore
keytool -genkey -v -keystore keystores/mi-app-release.keystore \
  -alias mi-app-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# Se te pedirá información:
# - Enter keystore password: [CONTRASEÑA FUERTE]
# - Re-enter new password: [MISMA CONTRASEÑA]
# - What is your first and last name? [Tu nombre]
# - What is the name of your organizational unit? [Tu empresa o "Independent"]
# - What is the name of your organization? [Tu empresa]
# - What is the name of your City or Locality? [Tu ciudad]
# - What is the name of your State or Province? [Tu estado]
# - What is the two-letter country code for this unit? [MX, US, ES, etc.]
# - Is CN=..., OU=..., ... correct? [yes]
# - Enter key password for <mi-app-alias>: [ENTER para usar la misma]
```

**⚠️ CRÍTICO - GUARDA ESTA INFORMACIÓN:**

Crea un archivo de texto (NO en Git) con:
```
Keystore Path: android/keystores/mi-app-release.keystore
Keystore Password: [TU_PASSWORD]
Key Alias: mi-app-alias
Key Password: [TU_PASSWORD]
```

**Si pierdes este archivo o contraseñas, NUNCA podrás actualizar tu app en Play Store.**

### 4.2 Configurar Signing Configs

Edita el archivo de configuración de Gradle:

```bash
# Editar build.gradle del app module
nano android/app/build.gradle
```

**Añade antes de `android {`:**

```gradle
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

**Dentro de `android {`, después de `defaultConfig {}`:**

```gradle
signingConfigs {
    release {
        if (keystorePropertiesFile.exists()) {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
}

buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled false
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
}
```

### 4.3 Almacenar Credenciales de Forma Segura

**Crear archivo de propiedades (NO incluir en Git):**

```bash
# Crear archivo keystore.properties
nano android/keystore.properties
```

**Contenido del archivo:**

```properties
storeFile=keystores/mi-app-release.keystore
storePassword=TU_KEYSTORE_PASSWORD
keyAlias=mi-app-alias
keyPassword=TU_KEY_PASSWORD
```

**Añadir al .gitignore:**

```bash
# Editar .gitignore
nano android/.gitignore

# Añade estas líneas:
keystore.properties
keystores/
*.keystore
*.jks
```

**Verificar que funciona:**

```bash
# Compilar un APK firmado
cd android
./gradlew assembleRelease

# El APK estará en:
# android/app/build/outputs/apk/release/app-release.apk

# Verificar la firma:
jarsigner -verify -verbose -certs app/build/outputs/apk/release/app-release.apk
```

Si ves "jar verified", ¡tu configuración de firma está completa! ✓

---

## Parte 5: Debugging Tools

### 5.1 Safari Web Inspector (iOS)

Safari puede inspeccionar tu app de Capacitor en el simulador o dispositivo:

**Habilitar Web Inspector:**

1. **En el simulador/dispositivo iOS:**
   - Abre **Settings → Safari → Advanced**
   - Activa **Web Inspector**

2. **En tu Mac:**
   - Abre **Safari**
   - Ve a **Safari → Settings → Advanced**
   - Marca **Show Develop menu in menu bar**

**Usar Web Inspector:**

1. Inicia tu app en el simulador o dispositivo
2. En Safari en tu Mac, ve a **Develop → [Nombre del dispositivo] → [Nombre de tu app]**
3. Se abrirá el inspector web con:
   - Console (para logs)
   - Elements (para inspeccionar DOM)
   - Network (para ver requests)
   - Sources (para debugging de JavaScript)

**Comandos útiles en Console:**

```javascript
// Ver todas las variables globales de Capacitor
window.Capacitor

// Información del dispositivo
Capacitor.getPlatform()

// Limpiar console
clear()
```

### 5.2 Chrome DevTools (Android)

Chrome puede inspeccionar tu app Android:

**Habilitar Developer Options en el emulador/dispositivo:**

1. **En el dispositivo Android:**
   - Ve a **Settings → About phone**
   - Toca **Build number** 7 veces (aparecerá "You are now a developer")
   - Vuelve a Settings, verás **Developer options**
   - Entra y activa **USB debugging**

**Conectar con Chrome DevTools:**

1. **Inicia tu app en el emulador o dispositivo físico**

2. **En Chrome en tu computadora:**
   - Abre Chrome
   - Ve a `chrome://inspect#devices`
   - Deberías ver tu dispositivo y tu app listados

3. **Haz clic en "Inspect"**
   - Se abrirá una ventana de DevTools
   - Tienes acceso a:
     - Console
     - Elements
     - Network
     - Sources
     - Performance

**Comandos útiles desde terminal:**

```bash
# Listar dispositivos conectados
adb devices

# Ver logs en tiempo real
adb logcat

# Filtrar logs de tu app
adb logcat | grep "Capacitor"

# Limpiar logs
adb logcat -c

# Tomar screenshot
adb shell screencap /sdcard/screenshot.png
adb pull /sdcard/screenshot.png

# Instalar APK manualmente
adb install -r path/to/your/app.apk
```

### 5.3 Xcode Console

El console de Xcode muestra logs de iOS:

**Abrir Console:**

1. Ejecuta tu app desde Xcode
2. Ve a **View → Debug Area → Show Debug Area** (Cmd + Shift + Y)
3. El console aparecerá en la parte inferior

**Tipos de logs:**

```swift
// En código Swift/Objective-C, puedes usar:
print("Debug message")
NSLog("Log message")

// Desde JavaScript en Capacitor:
console.log("JavaScript log")
console.error("JavaScript error")
```

**Filtrar logs:**

- Usa la barra de búsqueda en la parte inferior derecha
- Filtra por tipo: All, Errors, Warnings
- Busca por texto específico: "Capacitor", "Error", etc.

**Comandos útiles:**

```bash
# Ver logs de simulador desde terminal
xcrun simctl spawn booted log stream --level=debug

# Ver logs de un dispositivo físico
idevicesyslog

# (Requiere instalar libimobiledevice:)
brew install libimobiledevice
```

### 5.4 Android Logcat

Logcat es el sistema de logs de Android:

**En Android Studio:**

1. Ejecuta tu app
2. Ve a **View → Tool Windows → Logcat** (Alt + 6)
3. El panel de Logcat aparecerá en la parte inferior

**Configurar Logcat:**

| Opción | Descripción |
|--------|-------------|
| **Device** | Selecciona tu emulador/dispositivo |
| **Package** | Filtra por tu app |
| **Log Level** | Verbose, Debug, Info, Warn, Error, Assert |

**Niveles de log:**

```java
// En código Android:
Log.v(TAG, "Verbose");    // Verbose - Información detallada
Log.d(TAG, "Debug");      // Debug - Información de debugging
Log.i(TAG, "Info");       // Info - Información general
Log.w(TAG, "Warning");    // Warning - Advertencias
Log.e(TAG, "Error");      // Error - Errores
Log.wtf(TAG, "Fatal");    // What a Terrible Failure
```

**Buscar logs de Capacitor:**

En el filtro de Logcat, escribe:
```
package:mine tag:Capacitor
```

**Desde terminal:**

```bash
# Ver todos los logs
adb logcat

# Filtrar por nivel
adb logcat *:E  # Solo errores

# Filtrar por tag
adb logcat -s "Capacitor"

# Guardar logs a archivo
adb logcat > logs.txt

# Ver logs y guardar simultáneamente
adb logcat | tee logs.txt
```

---

## Parte 6: Troubleshooting Común

### 6.1 iOS - "Command not found: pod"

**Error:**
```bash
$ pod --version
zsh: command not found: pod
```

**Soluciones:**

**Solución 1: Reinstalar CocoaPods**

```bash
# Desinstalar versión antigua
sudo gem uninstall cocoapods

# Reinstalar
sudo gem install cocoapods

# O sin sudo:
gem install cocoapods --user-install
```

**Solución 2: Verificar PATH**

```bash
# Verificar donde está instalado gem
gem environment

# Añadir a tu PATH en ~/.zshrc:
export PATH=$HOME/.gem/ruby/2.6.0/bin:$PATH

# Recargar
source ~/.zshrc
```

**Solución 3: Usar Homebrew (Recomendado para M1/M2)**

```bash
# Instalar con Homebrew
brew install cocoapods

# Verificar
pod --version
```

### 6.2 Android - "SDK location not found"

**Error:**
```
SDK location not found. Define location with an ANDROID_SDK_ROOT
environment variable or by setting the sdk.dir path in your project's
local properties file
```

**Solución 1: Crear local.properties**

```bash
# Navega al directorio android
cd android

# Crear archivo local.properties
echo "sdk.dir=$HOME/Library/Android/sdk" > local.properties

# En Windows:
echo sdk.dir=C:\\Users\\TU_USUARIO\\AppData\\Local\\Android\\Sdk > local.properties
```

**Solución 2: Verificar ANDROID_HOME**

```bash
# Verificar variable
echo $ANDROID_HOME

# Si está vacía, añádela a ~/.zshrc:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Recargar
source ~/.zshrc
```

**Solución 3: Reinstalar Android SDK**

1. Abre Android Studio
2. Ve a **Tools → SDK Manager**
3. Desinstala y reinstala Android SDK Platform-Tools
4. Reinicia Android Studio

### 6.3 iOS - "Provisioning profile doesn't match"

**Error en Xcode:**
```
Provisioning profile "..." doesn't match the entitlements file's
value for the application-identifier entitlement
```

**Soluciones:**

**Solución 1: Automatic Signing (Más fácil)**

1. En Xcode, selecciona tu target
2. Pestaña **Signing & Capabilities**
3. Marca **Automatically manage signing**
4. Selecciona tu **Team**
5. Xcode manejará todo automáticamente

**Solución 2: Limpiar Provisioning Profiles**

```bash
# Eliminar provisioning profiles antiguos
rm -rf ~/Library/MobileDevice/Provisioning\ Profiles/*

# Descargarlos de nuevo desde Xcode:
# Xcode → Settings → Accounts → Download Manual Profiles
```

**Solución 3: Verificar Bundle ID**

1. En Xcode, verifica que el **Bundle Identifier** coincida exactamente con tu App ID
2. `com.ejemplo.miapp` ≠ `com.ejemplo.miapp.dev`
3. Ve a **General → Identity → Bundle Identifier**

**Solución 4: Verificar Capabilities**

1. Ve a **Signing & Capabilities**
2. Las capabilities deben coincidir con las del App ID en Apple Developer
3. Si añadiste Push Notifications en el código, debe estar en el App ID también

### 6.4 Android - Gradle Sync Failed

**Error:**
```
Gradle sync failed: ...
```

**Solución 1: Limpiar y Rebuild**

```bash
cd android

# Limpiar proyecto
./gradlew clean

# Rebuild
./gradlew build
```

**Solución 2: Invalidar Caches**

En Android Studio:
1. **File → Invalidate Caches / Restart**
2. Selecciona **Invalidate and Restart**
3. Espera a que Android Studio reinicie y resincronice

**Solución 3: Actualizar Gradle**

Edita `android/gradle/wrapper/gradle-wrapper.properties`:

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.0-all.zip
```

Luego:

```bash
./gradlew wrapper --gradle-version 8.0
```

**Solución 4: Verificar Java Version**

```bash
# Verificar versión de Java
java -version

# Capacitor 5+ requiere Java 17
# Instalar Java 17:
brew install openjdk@17

# Configurar JAVA_HOME en ~/.zshrc:
export JAVA_HOME=/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home
```

### 6.5 iOS - "Code Signing Error"

**Error:**
```
Code signing is required for product type 'Application' in SDK 'iOS X.X'
```

**Solución:**

1. En Xcode, selecciona el proyecto
2. Selecciona tu target
3. Pestaña **Signing & Capabilities**
4. Marca **Automatically manage signing**
5. Selecciona tu **Team** en el dropdown
6. Si no aparece team:
   - Ve a **Xcode → Settings → Accounts**
   - Haz clic en **+** y añade tu Apple ID
   - Una vez añadido, vuelve a Signing & Capabilities

### 6.6 Android - "Unable to locate adb"

**Error:**
```
Unable to locate adb within SDK
```

**Solución:**

```bash
# Verificar que platform-tools esté en PATH
which adb

# Si no está, añádelo:
echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.zshrc
source ~/.zshrc

# Reinstalar platform-tools si es necesario:
# En Android Studio → SDK Manager → SDK Tools → Android SDK Platform-Tools
```

### 6.7 iOS - CocoaPods "Unable to find a specification"

**Error:**
```
[!] Unable to find a specification for `CapacitorCordova`
```

**Solución:**

```bash
cd ios/App

# Actualizar repositorio de CocoaPods
pod repo update

# Limpiar cache
pod cache clean --all

# Reinstalar pods
rm -rf Pods/
rm Podfile.lock
pod install

# Si aún falla, intenta:
pod install --repo-update
```

### 6.8 Android - "Execution failed for task ':app:processDebugResources'"

**Error:**
```
Execution failed for task ':app:processDebugResources'.
> Android resource linking failed
```

**Solución:**

```bash
cd android

# Limpiar build
./gradlew clean

# Verificar que resources estén correctas
# Revisa android/app/src/main/res/

# Rebuild
./gradlew assembleDebug

# Si el error menciona "duplicate resources":
# Busca recursos duplicados en res/values/ o res/drawable/
```

### 6.9 iOS - Simulador no inicia

**Error:**
El simulador se abre pero se queda en negro o crash.

**Soluciones:**

```bash
# Opción 1: Reiniciar simulador
xcrun simctl shutdown all
xcrun simctl erase all

# Opción 2: Reiniciar servicio de simulador
sudo killall -9 com.apple.CoreSimulator.CoreSimulatorService

# Opción 3: Eliminar y recrear simulador
# En Xcode → Window → Devices and Simulators
# Selecciona el simulador → Click derecho → Delete
# Luego crea uno nuevo con el botón +
```

### 6.10 Android - Emulador muy lento

**Soluciones:**

**Opción 1: Verificar aceleración de hardware**

```bash
# En macOS, verifica Hypervisor Framework
# En Linux, verifica KVM

# Verificar que HAXM esté instalado (Intel):
emulator -accel-check
```

**Opción 2: Reducir RAM del emulador**

1. En AVD Manager, haz clic en **Edit** (lápiz) en tu emulador
2. **Show Advanced Settings**
3. **RAM:** Reduce a 2048 MB o 3072 MB
4. **VM heap:** 512 MB

**Opción 3: Usar imagen ARM en Mac M1/M2**

1. Crea un nuevo AVD
2. En System Image, selecciona una imagen con **arm64-v8a** en la columna ABI
3. Estas son MUCHO más rápidas en Apple Silicon

**Opción 4: Habilitar Multi-Core**

1. Edita tu AVD
2. **Show Advanced Settings**
3. **Emulated Performance → Multi-Core CPU:** 4 cores

---

## Parte 7: Verificación Final

### 7.1 Checklist de Instalación

Marca cada item cuando lo hayas completado:

#### Herramientas Base
- [ ] Homebrew instalado y funcionando
- [ ] Node.js 16+ instalado
- [ ] npm funcionando
- [ ] Git instalado

#### iOS (Solo macOS)
- [ ] Xcode instalado desde App Store
- [ ] Command Line Tools instalados
- [ ] CocoaPods instalado y funcionando
- [ ] Al menos un simulador iOS configurado
- [ ] Proyecto iOS abre en Xcode sin errores
- [ ] App corre en simulador

#### Android
- [ ] Android Studio instalado
- [ ] Android SDK instalado (API 29-34)
- [ ] ANDROID_HOME configurado correctamente
- [ ] adb accesible desde terminal
- [ ] Al menos un emulador Android (AVD) creado
- [ ] Proyecto Android abre en Android Studio
- [ ] Gradle sync completado exitosamente
- [ ] App corre en emulador

#### Certificados y Firma (Opcional - para deployment)
- [ ] Apple Developer Account creado (free o paid)
- [ ] App ID creado (iOS)
- [ ] Certificado de desarrollo instalado (iOS)
- [ ] Provisioning Profile configurado (iOS)
- [ ] Keystore generado (Android)
- [ ] Signing config configurado (Android)

#### Debugging Tools
- [ ] Safari Web Inspector accesible (iOS)
- [ ] Chrome DevTools accesible (Android)
- [ ] Xcode Console funcionando (iOS)
- [ ] Android Logcat funcionando

### 7.2 Comandos de Verificación

Ejecuta estos comandos para verificar que todo esté instalado:

```bash
# Versiones de herramientas
echo "=== Node.js ==="
node --version

echo "=== npm ==="
npm --version

echo "=== Git ==="
git --version

echo "=== CocoaPods (macOS only) ==="
pod --version

echo "=== Xcode (macOS only) ==="
xcodebuild -version

echo "=== Android SDK ==="
echo $ANDROID_HOME

echo "=== adb ==="
adb --version

echo "=== Gradle ==="
cd android && ./gradlew --version && cd ..

echo "=== Java ==="
java -version

# Simuladores iOS disponibles (macOS only)
echo "=== iOS Simulators ==="
xcrun simctl list devices available

# Emuladores Android disponibles
echo "=== Android Emulators ==="
emulator -list-avds

# Verificar proyecto Capacitor
echo "=== Capacitor ==="
npx cap doctor
```

**Salida esperada de `npx cap doctor`:**

```
💊   Capacitor Doctor  💊

Latest Dependencies:

  @capacitor/cli: 5.5.1
  @capacitor/core: 5.5.1
  @capacitor/android: 5.5.1
  @capacitor/ios: 5.5.1

Installed Dependencies:

  @capacitor/cli: 5.5.1
  @capacitor/core: 5.5.1
  @capacitor/android: 5.5.1
  @capacitor/ios: 5.5.1

[success] iOS looking great! 👌
[success] Android looking great! 👌
```

### 7.3 Test de Funcionamiento Completo

**Test iOS (macOS):**

```bash
# 1. Sincronizar
npx cap sync ios

# 2. Abrir en Xcode
npx cap open ios

# 3. En Xcode:
#    - Selecciona un simulador
#    - Presiona Cmd + R
#    - Espera a que la app se compile y abra en el simulador

# 4. Verifica:
#    - La app se abre sin crashes
#    - Ves tu contenido web
#    - La consola no muestra errores críticos
```

**Test Android:**

```bash
# 1. Iniciar emulador (hazlo primero, es más lento)
emulator -avd Pixel_7_API_33 &

# 2. Sincronizar
npx cap sync android

# 3. Abrir en Android Studio
npx cap open android

# 4. En Android Studio:
#    - Espera a que Gradle termine
#    - Selecciona tu emulador (ya debería estar corriendo)
#    - Haz clic en Run (▶️)
#    - Espera la instalación

# 5. Verifica:
#    - La app se instala sin errores
#    - Se abre en el emulador
#    - Ves tu contenido web
#    - Logcat no muestra errores críticos
```

**Test de Debugging:**

```bash
# iOS:
# 1. Con la app corriendo en el simulador
# 2. Abre Safari → Develop → Simulator → [tu app]
# 3. En Console, escribe: console.log('Test desde Safari')
# 4. Verifica que aparezca el log

# Android:
# 1. Con la app corriendo en el emulador
# 2. Abre Chrome → chrome://inspect#devices
# 3. Click en "Inspect" bajo tu app
# 4. En Console, escribe: console.log('Test desde Chrome')
# 5. Verifica que aparezca el log
```

### 7.4 Próximos Pasos

Una vez completada la verificación:

1. **Familiarízate con el desarrollo nativo:**
   - Lee la documentación de Capacitor: https://capacitorjs.com/docs
   - Explora los plugins nativos disponibles
   - Aprende sobre lifecycle de apps móviles

2. **Practica el workflow:**
   - Haz cambios en tu código web
   - Sincroniza: `npx cap sync`
   - Prueba en simuladores/emuladores
   - Usa debugging tools

3. **Aprende sobre plugins nativos:**
   - Revisa plugins oficiales de Capacitor
   - Aprende a crear plugins custom si es necesario
   - Entiende cómo funciona el bridge JavaScript-Nativo

4. **Prepárate para deployment:**
   - Si aún no lo has hecho, configura certificados (Parte 3 y 4)
   - Aprende sobre App Store Connect (iOS)
   - Aprende sobre Google Play Console (Android)
   - Familiarízate con el proceso de revisión de cada plataforma

---

## Recursos Adicionales

### Documentación Oficial

**Capacitor:**
- Docs: https://capacitorjs.com/docs
- CLI Commands: https://capacitorjs.com/docs/cli
- Plugins: https://capacitorjs.com/docs/plugins

**iOS:**
- Xcode: https://developer.apple.com/xcode/
- iOS Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/ios
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/

**Android:**
- Android Studio: https://developer.android.com/studio
- Android Developer Guides: https://developer.android.com/guide
- Material Design: https://material.io/design
- Play Console Help: https://support.google.com/googleplay/android-developer

### Comunidad y Soporte

- Capacitor Community: https://github.com/capacitor-community
- Ionic Forum: https://forum.ionicframework.com/
- Stack Overflow: Tags `capacitor`, `xcode`, `android-studio`

### Videos y Tutoriales

- Capacitor YouTube Channel: https://www.youtube.com/@capacitorjs
- iOS Development Tutorials: https://www.hackingwithswift.com/
- Android Development: https://developer.android.com/courses

---

## Conclusión

Has completado la configuración de un entorno de desarrollo completo para aplicaciones móviles nativas. Esta guía te ha llevado desde cero hasta tener:

- ✅ Xcode configurado con simuladores iOS
- ✅ Android Studio con emuladores Android
- ✅ Herramientas de debugging para ambas plataformas
- ✅ (Opcional) Certificados y firma para deployment

Recuerda que el desarrollo móvil tiene una curva de aprendizaje, pero con esta base sólida estás listo para empezar a crear aplicaciones nativas increíbles.

**¡Buena suerte en tu viaje de desarrollo móvil!**

---

*Última actualización: Octubre 2024*
*Versión: 1.0*

---

## Anexo: Shortcuts y Tips Útiles

### Xcode Shortcuts

| Shortcut | Acción |
|----------|--------|
| `Cmd + R` | Build y correr |
| `Cmd + .` | Detener ejecución |
| `Cmd + B` | Build sin correr |
| `Cmd + Shift + K` | Limpiar build folder |
| `Cmd + Shift + Y` | Mostrar/ocultar console |
| `Cmd + Shift + O` | Quick Open (buscar archivos) |
| `Cmd + /` | Comentar/descomentar línea |

### Android Studio Shortcuts

| Shortcut (macOS) | Shortcut (Windows/Linux) | Acción |
|------------------|--------------------------|--------|
| `Cmd + R` | `Shift + F10` | Build y correr |
| `Cmd + F9` | `Ctrl + F9` | Build project |
| `Cmd + Shift + A` | `Ctrl + Shift + A` | Find Action |
| `Cmd + E` | `Ctrl + E` | Recent files |
| `Cmd + Shift + F` | `Ctrl + Shift + F` | Find in path |
| `Cmd + Alt + L` | `Ctrl + Alt + L` | Reformat code |

### Tips de Productividad

1. **Usa alias en tu shell:**

```bash
# Añade a ~/.zshrc o ~/.bashrc
alias ios="npx cap sync ios && npx cap open ios"
alias android="npx cap sync android && npx cap open android"
alias capsync="npx cap sync"
alias capdoctor="npx cap doctor"
```

2. **Scripts npm útiles:**

Añade a tu `package.json`:

```json
{
  "scripts": {
    "ios": "cap sync ios && cap open ios",
    "android": "cap sync android && cap open android",
    "sync": "cap sync",
    "build:ios": "cap sync ios && cd ios && xcodebuild -workspace App/App.xcworkspace -scheme App -configuration Release",
    "build:android": "cap sync android && cd android && ./gradlew assembleRelease"
  }
}
```

Uso:
```bash
npm run ios
npm run android
```

3. **Watchman para mejor performance:**

```bash
brew install watchman
```

Watchman mejora el rendimiento de Metro Bundler y hot reload.

---

*Fin de la guía*
