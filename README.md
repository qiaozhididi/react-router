# React - 路由

ReactRouter 路由，让用 react.js 构建单页面应用变得轻而易举

单页面应用也称为SPA(Single Page Application)，它主要是网页的界面渲染在一个静态的页面上，当用户要从当前界面跳到另一个界面的时候，在这个过程中，不需要重新加载整个页面，所以页面之间的切换十分快速

多页面在进行页面切换时十分缓慢，在路由进行跳转的时候会加载所有的资源，而且页面重复代码多

对比之下，单页面原理是JavaScript动态修改内容而已，资源只需要局部的刷新，因此SPA具有极高的流畅度，有利于提升用户体验

单页面VS多页面
|          | 单页面(SPA)                     | 多页面(MPA)                |
| -------- | ------------------------------- | -------------------------- |
| 组成     | 外壳页面和多个页面片段          | 多个完整页面构成           |
| 资源共用 | 共用、只需在外壳部分加载        | 不共用，每个页面都需要加载 |
| 刷新方式 | 页面局部刷新或更改              | 整页刷新                   |
| URL模式  | a.com/#/one 或者 a.com/one      | a.com/one.html             |
| 用户体验 | 页面切换快，体验好              | 页面切换慢，体验差         |
| 数据传递 | 容易(路由或者组件之间传递)      | 依赖URL传参、本地存储传参  |
| SEO      | 不利于SEO（后续有其他解决方案） | 利于SEO                    |
| 维护成本 | 相对容易                        | 相对复杂                   |

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

## BrowserRouter

`<BrowserRouter>`使用HTML5 History API保持页面 和 URL 的同步，使用干净的URL将当前位置存储在浏览器的地址栏中

URL模式: a.com/#/one 或者 a.com/one

## HashRouter
`<HashRouter>`使用 Hash 模式路由保持页面 和 URL 的同步。

`BrowserRouter`与`HashRouter`区别：

- BrowseRouter使用HTML5的history API，HashRouter使用哈希

  - 地址表现形式不同

    BrowserRouter : http://localhost:3000/app

    HashRouter : http://localhost:3000/#/app

- BrowseRouter地址的请求会发送到服务器，需要服务器的支持，而HashRouter的不会

- 官方推荐使用BrowserRouter

在路由v6.4版本新增createRoutesFromElements,目的切换路由风格，很多人依然习惯使用jsx语法

## Route 和 Routes 
- `<Routes>`包裹一组<Route>，每当地址发生变化时，<Routes>都会查看其所有子<Route>元素，以找到最佳路径匹配并呈现对应的UI
  - path:设置访问路径
  - element:设置对应URL要渲染的组件

- `<Route>`用来配置URL与UI，如果其路径与当前地址栏中URL匹配，则会呈现其元素。
  - path:设置访问路径
  - element:设置对应URL要渲染的组件
  - index:确定路由是否为索引路由
  - caseSensitive:设置路径是否区分大小写，默认为false
  
## OutLet
`<Outlet>`

父路由元素中应使用<Outlet>来渲染其子路由元素。这允许在呈现子路由时显示嵌套UI。

如果URL跟父路由的路径完全匹配，则会默认渲染设置了index属性的子路由，如果子路由中没有设置index的，则不渲染任何子路由。

## Link && NavLink
`<Link>`用户可以通过点击它来导航跳转到另一个页面。

props：

- to :设置点击后要跳转的页面地址
- string：to的值为字符串，代表要跳转的路径
- object: to的值为对象，该对象可以包含下列属性：
  - pathname: <string> 表示要链接到的路径
  - search: <string> 查询参数
- state:属性可用于为存储在 history state 中的新位置设置有状态值。随后可以通过 useLocation() 访问该值
```js
<Link to="/">首页</Link>
<Link to="/user">用户页面</Link>
<Link to={{pathname:'/user'}} >用户页面</Link>
<Link state={{ some: "value" }} to="/">首页</Link>

```
  
`<NavLink>`一个特殊的<Link>，它会知道当前被选中的项是哪个。被选中选会添加.active class。
```js
<NavLink to="/">首页</NavLink>
<NavLink to="/news">新闻</NavLink>
```
props：
- end：精准匹配，如：/news,/news/sport也包含/news，添加end后，就是完美的字符串对比

- className：修改默认的class名字.active

## Navigate
当渲染一个 <Navigate> 元素的时候，就会执行它指向的路由跳转（重定向）
```js
<Navigate to='/'/> 

```

一般逻辑发生变化后，想要跳转到其他页面（非手动点击方式）使用。


## 路由传参 

### params

在要跳转的路由路径中使用:params这种语法传递参数，然后在跳转后的页面中使用useParams读取传递过来的参数

### search
在要跳转的路由路径中使用?search这种语法传递参数，然后在跳转后的页面中使用useSearchParams读取传递过来的参数

### state
在要跳转的路由路径中使用state这种语法传递参数，然后在跳转后的页面中使用useLocation读取传递过来的参数

### useNavigate
这个是react-router-dom v6.4版本新增的API，用于页面跳转，它可以实现页面的跳转，并且可以传递参数，并且可以实现页面的刷新。