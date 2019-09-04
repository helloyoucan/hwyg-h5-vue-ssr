// 代理地址（key-value）,key是前缀标识，value是该标识对应的地址
const server = {
  graphql: 'http://helloyoucan.com:9090'
}

// 客户端url前缀
const client = fromEntries(Object.keys(server).map(key => ([key, '/' + key])))

// 配置文件使用的代理配置
export const proxy = Object.assign.apply({}, Object.keys(server).map(key => ({
  ['/' + key]: {
    target: server[key],
    pathRewrite: {
      ['^/' + key]: '/'
    }
  }
})))

// 兼容处理不支持Object.fromEntries的环境
function fromEntries (arr) {
  const o = Object.create(null)
  for (let i = 0, l = arr.length; i < l; i++) {
    o[arr[i][0]] = arr[i][1]
  }
  return o
}

export const baseUrl = process.client ? client : server
