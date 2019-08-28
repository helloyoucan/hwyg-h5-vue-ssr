import request from '@/utils/request.js'

export function getSealList ({ page, size }) {
  return request({
    url: '/auction/seal/list',
    method: 'POST',
    data: `
            {
                _schema(size:${size},page:${page}){
                    list{
                        title
                        status
                        startPrice
                        beginTime
                        endTime
                        corpore{
                            name
                            quantity
                            measureUnit
                        }
                        summary{
                            currentPrice
                            bidNumber
                        }
                        coverUrls
                        dealPrice
                        dealTime
                        bidType
                    }
                    code
                    message
                }
            }
        `
  })
}

export function getSceneList ({ page, size, rang }) {
  return request({
    url: '/auction/scene/list',
    method: 'POST',
    data: `
            {
                _schema(size:${size},page:${page},rang:"${rang}"){
                    list{
                        beginTime
                        endTime
                        corporeCount
                        coverUrls
                        name
                        onlookNumber
                        status
                        dealNumber
                        participants
                        bidType
                        bidNumber
                    }
                    code
                    message
                }
            }
        `
  })
}
