/**
 * ErrorBoundary Component
 * Catches JavaScript errors in child component tree
 * Displays fallback UI instead of crashing the app
 * WCAG 2.1 AA compliant error handling
 */
import { Component, ReactNode, ErrorInfo } from 'react'
import './ErrorBoundary.css'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    // Call optional error callback
    this.props.onError?.(error, errorInfo)

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    })
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  handleReload = (): void => {
    window.location.reload()
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI from props
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div
          className="error-boundary"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="error-boundary__container">
            <div className="error-boundary__icon" aria-hidden="true">
              ⚠️
            </div>

            <h2 className="error-boundary__title">Algo salió mal</h2>

            <p className="error-boundary__message">
              Ocurrió un error inesperado. Puedes intentar recargar la página o
              volver atrás.
            </p>

            {this.state.error && (
              <details className="error-boundary__details">
                <summary className="error-boundary__summary">
                  Detalles del error
                </summary>
                <pre className="error-boundary__stack">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className="error-boundary__actions">
              <button
                onClick={this.handleReset}
                className="error-boundary__button error-boundary__button--primary"
                type="button"
                aria-label="Try to recover from error"
              >
                <span>Reintentar</span>
              </button>

              <button
                onClick={this.handleReload}
                className="error-boundary__button error-boundary__button--secondary"
                type="button"
                aria-label="Reload the page"
              >
                <span>Recargar Página</span>
              </button>
            </div>

            <p className="error-boundary__help">
              Si el problema persiste, por favor{' '}
              <a
                href="mailto:llamamealex@gmail.com"
                className="error-boundary__link"
              >
                contacta conmigo
              </a>
              .
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
