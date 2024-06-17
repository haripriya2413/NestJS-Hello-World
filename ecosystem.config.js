module.exports = {
  apps: [
    {
      name: 'nestjs-hello-world',
      script: 'dist/main.js', // Path to the main file
      instances: 'max', // Or specify a number, e.g., 2
      exec_mode: 'cluster', // Enable cluster mode for load balancing
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
