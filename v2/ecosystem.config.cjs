module.exports = {
  apps: [
    {
      name: 'portv2',
      script: 'npx',
      args: 'vite serve dist/ --single -p 5173',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
