module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    product: 'chrome',
    executablePath: "/usr/bin/google-chrome",
    args: ['--no-sandbox', '--single-process']
  },
  browserContext: 'default',
  // TODO: Run a server to which e2e target to
  // server: {
  //   command: 'node server.js',
  //   port: 4444,
  // },
}
