/* 获取商品类别 */
import request from 'network/request'
import url from 'network/url'

const getSelectCategory = function (params) { // {id: cid}
  return request({
    method: 'get',
    url: url.selectCategory,
    params
  })
}

export default getSelectCategory