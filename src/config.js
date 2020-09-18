const env = process.env.NODE_ENV || 'development'

const development = {
  serverHost: 'http://localhost:3000'
}

const production = {
  serverHost: ''
}

const test = {
  serverHost: ''
}

const config = {
  development,
  production,
  test
}

export default config[env]
