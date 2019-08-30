
export const server = {
  graphql: 'http://helloyoucan.com:9090'
}

export const proxy = Object.keys(server).map(key => ({
  ['/' + key]: {
    target: server[key],
    pathRewrite: {
      ['^/' + key]: '/'
    }
  }
}))
