# 后台管理系统

## 1. 定义

某后台管理系统。功能包括：商品管理、用户管理、订单等信息。

## 2. 技术点

Vue + vue-router + Vuex + Element-ui + Axios + 其他三方库

## 3. 项目准备

- mySQL
- iconfont

## 4. 项目搭建

- vue create vue-bms
- vue-router vuex
- axios
- （==重要==）vue add element（按需导入）
  - 不用 npm i 是因为：vue add element 后不用手动安装 babel-plugin-component 并配置 babel。
  - 在 plugins 文件夹下的 element.js 中，按照 element 的官网中的“快速上手”，在按需导入的模式下，先将所有组件引入；后续按照需求，再删除不用的组件。
  - 在安装element ui后，会在HelloWorld.vue中产生关于element相关的代码。如果在安装element ui前删除了HelloWorld.vue，则会报错。这时要自己创建一个HelloWorld.vue。

## 5. 项目初始化

- 删除无用的组件 home.vue about.vue …
- css 初始化
- 引入 iconfont 图标

## 6. 后台服务

- npm i express -S

## 7. 组件嵌套

- Layout（用于放置除了Login以外的其他所有组件）：
  - sideNavBar（侧边导航栏）；
  - content（右侧内容区）

- Login（登陆页面）

## 8. 路由配置

- 页面布局配置（Layout文件夹）&同级登陆界面（Login文件夹）
- 对组件实行懒加载：const Home = () => import('../views/Home/Home.vue')
- 默认路由：

```js
const routes = [
  {
    path: '',  // 当路径为空时（打开网页时）
    component: Layout,  // 显示 Layout 组件
    name: 'Layout',
    /* 配置二级路由 */
    children: [
      {
        path: '/',  // 显示 Layout 组件时，默认显示 Home 组件
        name: 'Home',
        component: Home
      }
    ]
  }
]
```

- 路由出口：
  - App.vue（<router-view></router-view>）：Layout 与 Login 的出口（一级路由出口）。
  - Layout 中的 content 组件：Home、Goods、Advert、Order、Params的出口（二级路由出口）。
  - Order 组件：OrderList 与 ReturnOrder 的出口（三级路由出口）。

## 9. 各个组件的布局与业务逻辑

### 9.1 Layout

#### 9.1.1 sideNavBar

##### 9.1.1.1 布局

使用 fixed 布局，将左侧导航栏定位在最左侧：

​		因为右侧内容区的内容会过高，页面会出现滚动条。用户需要上下滚动才能浏览右侧内容区。为了让用户滚动页面时，左侧导航栏不随页面滚动而滚动，所以要使用 fixed 布局，用 top: 0; bottom: 0; left: 0; 让左侧侧边栏高度充满整个页面，并靠左显示。

用 ul 中的 li 包裹 router-link 标签。

#### 9.1.2 Order（订单管理）

##### 9.1.2.1 下拉菜单

点击订单管理后，会显示下拉菜单。

#### 9.1.2 content

##### 9.1.2.1 布局

使用 margin-left: sideNavBar的宽度 将左侧侧边栏的宽度让出来。