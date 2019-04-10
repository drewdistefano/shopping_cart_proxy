module.exports = {
  apps: [{
    name: 'cart-proxy',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-19-70-44.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/targit.pem',
      ref: 'origin/master',
      repo: 'https://github.com/targitatx/shopping_cart_proxy.git',
      path: '/home/ubuntu/Code/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}