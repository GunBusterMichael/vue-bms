import request from 'network/request'
import url from 'network/url'

const getGoodsList = function (params) { // {page: xx}
  return request({
    method: 'get',
    url: url.goodsList,
    params
  })
}

export default getGoodsList