/* 添加商品 */
import request from 'network/request'
import url from 'network/url'

const getAddGoods = function (params) { // params 是对象。参数： title cid  category sellPoint price num descs paramsInfo image
  return request({
    method: 'get',
    url: url.addGoods,
    params
  })
}

export default getAddGoods