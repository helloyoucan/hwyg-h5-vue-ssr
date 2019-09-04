import request from '@/utils/request.js'
import { baseUrl } from '@/config/proxy.js'
export function getTradeNewsList () {
  return request({
    url: `${baseUrl.graphql}/order/traded`,
    method: 'POST',
    data: `
            {
                _schema(size:10,page:1){
                    list{
                        productName
                        amount
                        unit
                        unitPrice
                        price
                        time
                    }
                    code
                    message
                }
            }
        `
  })
}
