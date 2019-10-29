import * as Sentry from '@sentry/browser';

export function init() {
  Sentry.init({
    dsn: 'https://61dd131b003445158ea644c8e00fa0e9@sentry.io/1800465'
  });
}

export function log(error) {
  Sentry.captureException(error);
}
