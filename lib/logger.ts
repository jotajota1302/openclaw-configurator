/**
 * Simple structured logger for Next.js
 * Provides consistent logging with levels and context
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  [key: string]: unknown;
}

class Logger {
  private serviceName = 'openclaw-configurator';
  private environment = process.env.NODE_ENV || 'development';

  private log(level: LogLevel, message: string, context?: LogContext) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      service: this.serviceName,
      environment: this.environment,
      message,
      ...context,
    };

    // In production, this would go to a logging service
    // For now, structured console output
    const output = JSON.stringify(logEntry);

    switch (level) {
      case 'error':
        console.error(output);
        break;
      case 'warn':
        console.warn(output);
        break;
      case 'debug':
        if (this.environment === 'development') {
          console.debug(output);
        }
        break;
      default:
        console.log(output);
    }
  }

  debug(message: string, context?: LogContext) {
    this.log('debug', message, context);
  }

  info(message: string, context?: LogContext) {
    this.log('info', message, context);
  }

  warn(message: string, context?: LogContext) {
    this.log('warn', message, context);
  }

  error(message: string, error?: Error | unknown, context?: LogContext) {
    const errorContext = error instanceof Error
      ? {
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
          },
          ...context,
        }
      : { error, ...context };

    this.log('error', message, errorContext);
  }
}

export const logger = new Logger();
