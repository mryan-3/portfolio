module.exports = {
  apps: [
    {
      name: 'portv2',
      script: 'npx',
      args: ' serve dist/ --single -p 5173', // Correct argument format for serving an SPA on port 3000
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
