import request from '@/utils/request.js'
import { baseUrl } from '@/config/proxy.js'
/**
 *
 * @param {*} type 商品类型，1求购，2供应
 */
export function getGoodsList ({ size = 10, page = 1, type = 1 }) {
  return request({
    url: `${baseUrl.graphql}/goods/list`,
    method: 'POST',
    data: `
            {
                _schema(size:${size},page:${page},status:1,type:${type}){
                list{
                    defaultImage
                    productName
                    specification
                    addedTime
                    unit
                    unitPrice
                    totalAmount
                    quoteType
                }
                pager{
                    totalPages
                }
                code
                message
            }
        }
        `
  })
}
