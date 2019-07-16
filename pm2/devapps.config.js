module.exports = {
  apps: [{
    name: 'sample',
    cwd: '..',
    script: './app.js',
    instances: 1,
    exec_mode: 'fork',
    node_args: ['--max_old_space_size=8000'],
    args: '-s backend --ms base --env dev --name sample',
    watch: ['./app.js'],
  }],
};