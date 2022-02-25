const WorkerPlugin = require("worker-plugin");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
  experimental: {
    urlImports: ['http://localhost:3000']
  }
};
