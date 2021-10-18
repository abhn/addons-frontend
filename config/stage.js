// Config for the stage server.
import { analyticsHost, apiStageHost, baseUrlStage, mediaPath, stageDomain, staticPath } from './lib/shared';

module.exports = {
  baseURL: baseUrlStage,
  apiHost: apiStageHost,

  cookieDomain: `.${stageDomain}`,

  // Content security policy.
  CSP: {
    directives: {
      connectSrc: [
        analyticsHost,
        apiStageHost,
      ],
      fontSrc: [
        `${baseUrlStage}${staticPath}`,
      ],
      imgSrc: [
        "'self'",
        'data:',
        `${baseUrlStage}${mediaPath}`,
        `${baseUrlStage}${staticPath}`,
        `${baseUrlStage}${staticPath}`,
      ],
      scriptSrc: [
        `${baseUrlStage}${staticPath}`,
        `${analyticsHost}/analytics.js`,
      ],
      styleSrc: [
        `${baseUrlStage}${staticPath}`,
      ],
    },
  },

  allowErrorSimulation: true,

  extensionWorkshopUrl: 'https://extensionworkshop.allizom.org',
};
