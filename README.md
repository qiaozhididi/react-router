# React - 路由

ReactRouter 路由，让用 react.js 构建单页面应用变得轻而易举

单页面应用也称为SPA(Single Page Application)，它主要是网页的界面渲染在一个静态的页面上，当用户要从当前界面跳到另一个界面的时候，在这个过程中，不需要重新加载整个页面，所以页面之间的切换十分快速

多页面在进行页面切换时十分缓慢，在路由进行跳转的时候会加载所有的资源，而且页面重复代码多

对比之下，单页面原理是JavaScript动态修改内容而已，资源只需要局部的刷新，因此SPA具有极高的流畅度，有利于提升用户体验

单页面VS多页面
|       | 单页面(SPA)                 | 多页面(MPA)       |
| ----- | ------------------------ | -------------- |
| 组成    | 外壳页面和多个页面片段              | 多个完整页面构成       |
| 资源共用  | 共用、只需在外壳部分加载             | 不共用，每个页面都需要加载  |
| 刷新方式  | 页面局部刷新或更改                | 整页刷新           |
| URL模式 | a.com/#/one 或者 a.com/one | a.com/one.html |
| 用户体验  | 页面切换快，体验好                | 页面切换慢，体验差      |
| 数据传递  | 容易(路由或者组件之间传递)           | 依赖URL传参、本地存储传参 |
| SEO   | 不利于SEO（后续有其他解决方案）        | 利于SEO          |
| 维护成本  | 相对容易                     | 相对复杂           |

## react-router

为 React Router 提供核心路由功能，但是你不需要直接安装 react-router

react-router-dom

react-router-dom是基于react-router的，适用于浏览器端应用，react-router-dom包含react-router的所有功能，并且又增加了适合在浏览器运行环境下的一些功能

```shell
npm install react-router-dom --save
```

## RouterProvider 

可以理解为是整个路由的容器

所有路由器对象都传递给此组件以呈现您的应用程序并启用其余 API

### fallbackElement
路由加载资源需要有等待的过程，在此等待期间，您可以提供一个 fallbackElement 来向用户表明该应用程序正在运行