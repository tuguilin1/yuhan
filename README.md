
# 一个基于vue全家桶的小型电商项目

## 技术栈 vue+vuex+element-ui+express+node.js

- 2018/10/8

  1、实现首页
  
  2、利用http模块请求某电商数据返回给前端
  
  3、整体使用flex布局
  
  ![首页](https://raw.githubusercontent.com/tuguilin1/yuhan/master/static/demo2.jpg)
  ![首页](https://raw.githubusercontent.com/tuguilin1/yuhan/master/static/demo1.jpg)

- 2018/10/9
  1、实现导航条脱离视口之后fixed置顶
  2、利用mint-ui的loadmore实现上拉加载出错，分析源码发现在声明doctype模式下document.body.scrollTop总为0所致。将其改为document.createElement.scrollTop
  3、利用sessionstorage存储各导航下的数据，导航切换时不必再次请求
  
  ![加载页](https://raw.githubusercontent.com/tuguilin1/yuhan/master/static/demo3.jpg)
