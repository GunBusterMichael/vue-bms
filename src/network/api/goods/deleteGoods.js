/* 删除商品 */
import request from 'network/request'
import url from 'network/url'

const getDeleteGoods = function (params) { // {id: xx}
  return request({
    method: 'get',
    url: url.deleteGoods,
    params
  })
}

export default getDeleteGoods