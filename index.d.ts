import type { Writable } from 'node:stream';
import type { EventEmitter } from 'node:events';

export interface IWoodlotOptions {
  streams?: Writable[];
  stdout?: boolean;
  routes?: {
    whitelist?: string[];
    strictChecking?: boolean;
  };
  userAnalytics?: {
    platform?: boolean;
    country?: boolean;
  };
  format?: {
    type?: 'json' | 'common' | 'combined';
    options?: {
      cookies?: boolean;
      headers?: boolean;
      compact?: boolean;
      spacing?: string | number;
      separator?: string;
    };
  };
}

export interface ICustomOptions {
  streams?: Writable[];
  stdout?: boolean;
  format?: {
    type?: 'json' | 'text';
    options?: {
      compact?: boolean;
      spacing?: string | number;
      separator?: string;
    };
  };
}

export interface ICustomLogger {  
  config: ICustomOptions;
  logToConsole: boolean;
  info: (message: string) => void;
  debug: (message: string) => void;
  warn: (message: string) => void;
  err: (message: string) => void;
}

export function middlewareLogger(config: IMiddlewareOptions): (req: any, res: any, next: any) => void;
export function customLogger(config: ICustomOptions): ICustomLogger;
export const events: EventEmitter;
export { events, middlewareLogger, customLogger };
