const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'User',
        mongodb_password: 'xV!NvYPsxbe9BJd',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'mySiteDev',
      },
    };
  }
};

return {
  reactStrictMode: true,
  env: {
    mongodb_username: 'User',
    mongodb_password: 'xV!NvYPsxbe9BJd',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'mySite',
  },
};
