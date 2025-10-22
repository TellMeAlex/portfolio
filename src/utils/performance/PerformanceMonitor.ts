/**
 * PerformanceMonitor - Core Web Vitals Tracking
 *
 * Tracks and logs key performance metrics:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 *
 * @see https://web.dev/vitals/
 */

interface PerformanceMetrics {
  lcp?: number // Largest Contentful Paint (ms)
  fid?: number // First Input Delay (ms)
  cls?: number // Cumulative Layout Shift (score)
  fcp?: number // First Contentful Paint (ms)
  ttfb?: number // Time to First Byte (ms)
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private isInitialized = false

  constructor() {
    if (typeof window === 'undefined' || this.isInitialized) {
      return
    }

    this.init()
  }

  private init(): void {
    this.isInitialized = true

    // Track Core Web Vitals
    this.trackLCP()
    this.trackFID()
    this.trackCLS()
    this.trackFCP()
    this.trackTTFB()

    // Log metrics on page load
    this.logMetrics()
  }

  /**
   * Track Largest Contentful Paint (LCP)
   * Target: < 2.5s (good), < 4.0s (needs improvement), > 4.0s (poor)
   */
  private trackLCP(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver(entryList => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
          startTime: number
        }

        this.metrics.lcp = Math.round(lastEntry.startTime)
        this.logMetric(
          'LCP',
          this.metrics.lcp,
          'ms',
          this.evaluateLCP(this.metrics.lcp)
        )
      })

      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch (error) {
      console.warn('LCP tracking not supported:', error)
    }
  }

  /**
   * Track First Input Delay (FID)
   * Target: < 100ms (good), < 300ms (needs improvement), > 300ms (poor)
   */
  private trackFID(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver(entryList => {
        const entries = entryList.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const fidEntry = entry as PerformanceEntry & {
            processingStart: number
            startTime: number
          }

          this.metrics.fid = Math.round(
            fidEntry.processingStart - fidEntry.startTime
          )
          this.logMetric(
            'FID',
            this.metrics.fid,
            'ms',
            this.evaluateFID(this.metrics.fid)
          )
        })
      })

      observer.observe({ entryTypes: ['first-input'] })
    } catch (error) {
      console.warn('FID tracking not supported:', error)
    }
  }

  /**
   * Track Cumulative Layout Shift (CLS)
   * Target: < 0.1 (good), < 0.25 (needs improvement), > 0.25 (poor)
   */
  private trackCLS(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      let clsValue = 0

      const observer = new PerformanceObserver(entryList => {
        for (const entry of entryList.getEntries()) {
          const layoutShift = entry as PerformanceEntry & {
            hadRecentInput: boolean
            value: number
          }

          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value
          }
        }

        this.metrics.cls = parseFloat(clsValue.toFixed(4))
        this.logMetric(
          'CLS',
          this.metrics.cls,
          '',
          this.evaluateCLS(this.metrics.cls)
        )
      })

      observer.observe({ entryTypes: ['layout-shift'] })
    } catch (error) {
      console.warn('CLS tracking not supported:', error)
    }
  }

  /**
   * Track First Contentful Paint (FCP)
   * Target: < 1.5s (good), < 3.0s (needs improvement), > 3.0s (poor)
   */
  private trackFCP(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver(entryList => {
        const entries = entryList.getEntries()
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = Math.round(entry.startTime)
            this.logMetric(
              'FCP',
              this.metrics.fcp,
              'ms',
              this.evaluateFCP(this.metrics.fcp)
            )
          }
        })
      })

      observer.observe({ entryTypes: ['paint'] })
    } catch (error) {
      console.warn('FCP tracking not supported:', error)
    }
  }

  /**
   * Track Time to First Byte (TTFB)
   * Target: < 800ms (good), < 1800ms (needs improvement), > 1800ms (poor)
   */
  private trackTTFB(): void {
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as
        | (PerformanceNavigationTiming & {
            responseStart: number
            requestStart: number
          })
        | undefined

      if (navigationEntry) {
        this.metrics.ttfb = Math.round(
          navigationEntry.responseStart - navigationEntry.requestStart
        )
        this.logMetric(
          'TTFB',
          this.metrics.ttfb,
          'ms',
          this.evaluateTTFB(this.metrics.ttfb)
        )
      }
    } catch (error) {
      console.warn('TTFB tracking not supported:', error)
    }
  }

  /**
   * Evaluation helpers
   */
  private evaluateLCP(value: number): string {
    if (value < 2500) return 'good ✅'
    if (value < 4000) return 'needs improvement ⚠️'
    return 'poor ❌'
  }

  private evaluateFID(value: number): string {
    if (value < 100) return 'good ✅'
    if (value < 300) return 'needs improvement ⚠️'
    return 'poor ❌'
  }

  private evaluateCLS(value: number): string {
    if (value < 0.1) return 'good ✅'
    if (value < 0.25) return 'needs improvement ⚠️'
    return 'poor ❌'
  }

  private evaluateFCP(value: number): string {
    if (value < 1500) return 'good ✅'
    if (value < 3000) return 'needs improvement ⚠️'
    return 'poor ❌'
  }

  private evaluateTTFB(value: number): string {
    if (value < 800) return 'good ✅'
    if (value < 1800) return 'needs improvement ⚠️'
    return 'poor ❌'
  }

  /**
   * Log individual metric
   */
  private logMetric(
    name: string,
    value: number,
    unit: string,
    evaluation: string
  ): void {
    console.log(
      `%c[Performance] ${name}: ${value}${unit} - ${evaluation}`,
      'color: #64FFDA; font-weight: bold'
    )
  }

  /**
   * Log all collected metrics
   */
  private logMetrics(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        console.group(
          '%c📊 Core Web Vitals Summary',
          'color: #64FFDA; font-size: 14px; font-weight: bold'
        )

        if (this.metrics.lcp !== undefined) {
          console.log(
            `LCP: ${this.metrics.lcp}ms - ${this.evaluateLCP(this.metrics.lcp)}`
          )
        }
        if (this.metrics.fid !== undefined) {
          console.log(
            `FID: ${this.metrics.fid}ms - ${this.evaluateFID(this.metrics.fid)}`
          )
        }
        if (this.metrics.cls !== undefined) {
          console.log(
            `CLS: ${this.metrics.cls} - ${this.evaluateCLS(this.metrics.cls)}`
          )
        }
        if (this.metrics.fcp !== undefined) {
          console.log(
            `FCP: ${this.metrics.fcp}ms - ${this.evaluateFCP(this.metrics.fcp)}`
          )
        }
        if (this.metrics.ttfb !== undefined) {
          console.log(
            `TTFB: ${this.metrics.ttfb}ms - ${this.evaluateTTFB(this.metrics.ttfb)}`
          )
        }

        console.groupEnd()
      }, 3000) // Wait 3s for metrics to stabilize
    })
  }

  /**
   * Get current metrics (useful for external access)
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }
}

// Initialize and export
let performanceMonitorInstance: PerformanceMonitor | null = null

export const initPerformanceMonitor = (): PerformanceMonitor => {
  if (!performanceMonitorInstance && typeof window !== 'undefined') {
    performanceMonitorInstance = new PerformanceMonitor()
  }
  return performanceMonitorInstance!
}

export default PerformanceMonitor
