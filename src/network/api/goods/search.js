import request from 'network/request'
import url from 'network/url'

const getSearch = function (params) { // {search: xx}
  return request({
    method: 'get',
    url: url.search,
    params
  })
}

export default getSearch