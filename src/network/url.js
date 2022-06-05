/* 接口路径配置 */

const url = {
  host: 'http://localhost:8989',
  goodsList: '/projectList', // 商品列表
  search: '/search', // 搜索
  selectCategory: '/backend/itemCategory/selectItemCategoryByParentId', // 类目选择
  uploadUrl: '/api/api/upload', // 图片上传 post 请求
  addGoods: '/backend/item/insertTbItem', // 添加商品
  deleteGoods: '/backend/item/deleteItemById' // 删除商品
}

export default url