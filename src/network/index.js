/* axios 请求 */

import getGoodsList from './api/goods/goodsList'
import getSearch from './api/goods/search'

const api = {
  /* 商品列表 */
  getGoodsList,

  /* 搜索 */
  getSearch
}

export default api