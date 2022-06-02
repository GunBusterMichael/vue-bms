/* axios 请求 */

import getGoodsList from './api/goods/goodsList'
import getSearch from './api/goods/search'
import getSelectCategory from './api/goods/selectCategory'

const api = {
  /* 商品列表 */
  getGoodsList,

  /* 搜索 */
  getSearch,

  /* 获取商品分类 */
  getSelectCategory
}

export default api