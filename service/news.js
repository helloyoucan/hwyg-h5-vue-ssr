import request from '@/utils/request.js'
import { baseUrl } from '@/config/proxy.js'
export function getNewsList ({ size = 10, page = 1, keyWord = '' }) {
  return request({
    url: `${baseUrl.graphql}/news/list`,
    method: 'POST',
    data: `
            {
                _schema(size:${size},page:${page}${keyWord ? ',keyWord:' + keyWord : ''}){
                    list{
                        title
                        checkNumber
                        createTime
                        content
                    }
                    pager{
                        totalPages
                    }
                    message
                    code
            }
        }
        `
  })
}
