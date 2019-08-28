import request from '@/utils/request.js'

export function getGoodsList ({ size = 10, page = 1, type = 1 }) {
  return request({
    url: '/goods/list',
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
