import request from '@/utils/request.js'
import { baseUrl } from '@/config/proxy.js'
export function getBrannerList () {
  return request({
    url: `${baseUrl.graphql}/branners/list`,
    method: 'POST',
    data: `
              {
                  _schema{
                      list{
                          brannerName
                          imgUrl
                      }
                      code
                      message
                  }
              }
            `
  })
}
