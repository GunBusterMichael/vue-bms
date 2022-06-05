/* axios 请求 */

import getGoodsList from './api/goods/goodsList'
import getSearch from './api/goods/search'
import getSelectCategory from './api/goods/selectCategory'
import getAddGoods from './api/goods/addGoods'
import getDeleteGoods from './api/goods/deleteGoods'

const api = {
  /* 商品列表 */
  getGoodsList,

  /* 搜索 */
  getSearch,

  /* 获取商品分类 */
  getSelectCategory,

  /* 添加商品 */
  getAddGoods,

  /* 删除商品 */
  getDeleteGoods
}

export default api