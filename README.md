## 前言

本次培训主要涉及webpack,babel,react,redux和react-native,我会带着大家一步一步搭建一个react的项目，代码在https://github.com/yaliyingwy/learn-react，每一节都会有对应的tag,大家可以git checkout到对应tag查看该步骤的代码。
在此之前，假设你:

1. 了解es6的语法 (http://es6.ruanyifeng.com)
2. 安装了最新的nodejs(https://nodejs.org/en/download/)
3. 了解npm(http://www.ruanyifeng.com/blog/2016/01/npm-install.html)
4. 如果你想看到项目是怎么一步步搭建起来的，还需要了解git(http://rogerdudler.github.io/git-guide/index.zh.html)


由于我忽略了node_modules目录，代码clone下来后第一件事应该是npm install

## 为什么要用react全家桶？

### 提升开发效率

1. 理论上来说纯原生的app最强大，性能最好，能做任何炫酷的功能。
2. 但是现实的工作当中我们要面临快速迭代的需求，一个功能要开发ios，android，wap三套代码，移动端面临严重的碎片化。
3. 使用react或其他js框架开发的hybrid app可以一套代码统一整个移动端，但是因为性能的关系，只能做那种设计的比较朴素，偏向于纯展示的app
4. 使用react-native可以统一ios和android,因为react-native底层封装的是原生的界面，性能接近于原生app.
5. 相对于oc,swift和java来说，javascript语法更简单，更容易入门。
6. 无论app还是wap,采用相同的技术栈，代码复用程度高，没有技术上的沟壑。

### 基于flux或redux的架构，可维护性强

1. 类似于java的ssh,开发简单的项目可能像是把简单的事情搞复杂，但是代码逻辑清晰，项目越大，代码越多，越能体现优势。
2. react本身的组件化概念，非常容易积累可以复用的组件，目前react生态圈超级活跃，很容易找到一些现成的组件。如蚂蚁金服的ant.design(http://ant.design/docs/react/introduce),开袋即食。
3. 单向的数据流动，配和immutablejs，提高页面渲染效率

### 热更新

1. 绕过烦人的app store长时间审查，跟上需求的迭代速度
2. 经常让用户下载新版本，用户会烦，热更新的话在用户感知不到的情况下就能完成更新。

### js就是全栈型语言，积累了丰富的经验后，你完全可以独立开发网站，app,wap，甚至游戏

1. 关于nodejs优势和劣势的讨论https://www.zhihu.com/question/19653241
2. 哪些公司在用react? https://www.zhihu.com/question/26387853
3. 如何评价react-native? https://www.zhihu.com/question/27852694
4. react-native 一周年回顾 http://www.oschina.net/translate/react-native-a-year-in-review

## 工欲善其事，必先利其器，我们先来看看两个工具，webpack和babel

### babel (https://babeljs.io)
简单的来说，babel就是一个让你放心使用es6语法的工具，他会将es6语法编译成es5，解决浏览器的兼容问题
babel通过项目根目录下放置一个.babelrc的json文件进行配置，我们一般跟webpack搭配使用，这里就不单独说了。

### webpack (http://webpack.github.io/docs/)

webpack解决了javascript的模块化问题，从此再也不用区分前端js还是后端js,引用模块和第三方库的时候像其他语言一样import（或require）就可以了，工程化的组织，管理代码，告别以前混乱的时代。
同时webpack跟babel和react无缝的结合，现代的前端项目基本上离不开webpack。

webpack主要通过一个webpack.config.js的文件来配置（当然可以指定另外的名字），让我们一步一步来搭建一个基于webpack的工程。

1. 创建项目

    ```
    mkdir learn-react  创建一个项目目录
    cd learn-react && npm init 进入创建的目录，执行npm init，一路回车就可以了
    上面的命令执行完后会生成一个package.json的文件，该文件作用类似于pom,是每个nodejs项目的核心文件
    ```

2. 安装webpack和webpack-dev-server的依赖

    ```
    npm install webpack webpack-dev-server --save-dev --verbose 
    其中save-dev选项是安装完后将依赖写入package.json文件，verbose则是输出安装日志，不至于盯着屏幕没反应
    ```

3. 添加webpack.config.js文件, 并配置loader
    ```
    代码里想要正确的import或require代码，需要为webpack配置不同类型文件对应的loader
    我们loader的配置如下

    const babelQuery = {
      presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve)
    };

    var loaders = [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: babelQuery,
      }, {
      test: /\.json$/,
      loader: 'json-loader',
      }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=application/font-woff',
      }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=application/font-woff',
      }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=application/octet-stream',
      }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
      }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=image/svg+xml',
      }, { 
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=10000!img?progressive=true'
      }, {
        test: /\.less$/,
        loader:  ExtractTextPlugin.extract('css?sourceMap!autoprefixer-loader!less?sourceMap')
      }
    ];

    上面的babelQuery是babel的配置。
    ExtractTextPlugin是生成单独的css文件，不然的话默认是没有css文件的，都内联在js里。
    其他loader的作用请自行google

    当然，光有了配置还是不行的，我们还需要安装对应的包
    npm install babel-loader url-loader img-loader json-loader css-loader less-loader autoprefixer-loader --save-dev --verbose 安装用到的loader
    npm install babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev --verbose  安装babel用到的组件
    npm install extract-text-webpack-plugin --save-dev --verbose 安装ExtractTextPlugin
    ```

4. 添加一些常用的plugin

    ```
    const plugins = [
      new webpack.optimize.CommonsChunkPlugin({
          name: 'common',
          filename: 'common.js'
      }),
      new ExtractTextPlugin("[name].css", {
          allChunks: true
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.DEBUG': !!process.env.DEBUG,
      }),
    ];

    if (!process.env.DEBUG) {
      plugins.push(
        new webpack.optimize.UglifyJsPlugin({
          output: {
            ascii_only: true
          },
          compress: {
            warnings: false
          }
        })
      );
    }

    Object.keys(entries).forEach((key) => {
      plugins.push(
        new HtmlWebpackPlugin({
          inject: true,
          minify: false,
          title: key,
          hash: true,
          filename: key + '.html',
          chunks: ['common', key],
          template: 'assets/tpl/index.html'
        })
      );
    });

    其中CommonsChunkPlugin是自动找出公用代码的
    ExtractTextPlugin上面已经说过了
    NoErrorsPlugin是处理错误的，开发的时候写错代码webpack-dev-server不会挂
    DefinePlugin为代码添加一些自定义的环境变量
    HtmlWebpackPlugin为每一个entry生成一个html,有多少个entry就要配多少个（entry后面单独讲)

    上面需要安装html-webpack-plugin，其他webpack都自带了
    npm install html-webpack-plugin --save-dev --verbse
    ```

5. 配置resolve

    ```
    const resolve = {
      root: __dirname,
      extensions: ['', '.js', '.less', '.woff', '.svg', '.ttf', '.eot', '.json', '.png', '.jpg'],
      modulesDirectories: ['.', 'node_modules'],
    };

    resolve的作用是指定支持的文件后缀和查找路径
    ```

6. 配置output

    ```
    const output = {
      path: path.join(__dirname, 'build'),
      publicPath: './',
      filename: '[name].js',
    };

    output主要是指定输出文件的配置
    ```

7. 配置entry

    ```
    const entries = {
      lifecycle: 'src/containers/lifecycle/lifecycle.js',
    }

    entry是webpack的核心配置，一个entry将会生成一个js
    这里我们随便写了两个js文件，用于测试。
    ```

8 为package.js 添加build和dist两个构建任务
    
    ```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "DEBUG=true node node_modules/webpack/bin/webpack.js",
      "dist": "DEBUG=false node node_modules/webpack/bin/webpack.js"
    },
    npm run build 和 npm run dist 分别试试，走你！
    ```


### webpack-dev-server

在上面的例子中，每改一点代码都要重新编译一次才能看到效果，而且随着文件增多，编译的过程很慢。
这里便轮到我们的开发神器webpack-dev-server登场了

前面我们已经安装过对应的包了，这里我们单独写一个js脚本来配置

1. 新建scripts目录，在下面新建一个dev.js文件

    ```
    const config = require('../webpack.config.js');
    const WebpackDevServer = require('webpack-dev-server');
    const webpack = require('webpack');

    Object.keys(config.entry).forEach((key) => {
      config.entry[key].unshift(require.resolve('webpack-dev-server/client') + '?http://localhost:8080', require.resolve('webpack/hot/dev-server'));
    });

    config.debug = true;

    config.devtool = 'eval-cheap-module-source-map';

    config.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );

    const devServerConfig = {
      contentBase: config.output.path,
      hot: true,
      historyApiFallback: true,
      stats: {
        colors: true
      }
    };

    new WebpackDevServer(webpack(config), devServerConfig)
      .listen(8080, 'localhost', (err) => {
        if (err) {
          console.error(err);
        }
      });

    整个脚本代码并不多，主要是往entry里面插入了两个热替换的脚本
    webpack.config.js中的entry也需要改成数组
    const entries = {
      lifecycle: ['src/containers/lifecycle/lifecycle.js'],
    }
    ```

2. 让我们在package.json中添加一条dev任务

    ```
    "dev": "DEBUG=true node scripts/dev.js"

    好了，npm run dev 然后随便改点代码试试
    ```

## 工具弄好了，接下来就是我们的主角react(https://facebook.github.io/react/docs/getting-started.html)了

### react 简单介绍

1. 简单的来说，react就是一个高端的模版引擎
2. 主要由一个render方法和一堆生命周期函数组成
3. 最重要的是props跟state两个概念
4. 视图的展示逻辑根据props和state在render中写好，不要操作doom.
5. 开始react有很多种方式，但是对于新手选择太多了反而让人无所适从，所以我们使用es6的class和jsx

### 让我们先来看看生命周期

我们就在前面的lifecycle.js和foo.js,bar.js几个文件上改造

1. 先安装react和react-dom
    ```
    npm install react react-dom --save --verbose
    ```

2. 让我们观察函数的执行顺序

npm run dev, 然后打开 http://localhost:8080/webpack-dev-server/lifecycle.html

### 让我们再来看看父子组件间如何通信

1. 父组件可以通过像子组件传递的props来改变子组件。
2. 父组件可以通过ref （https://facebook.github.io/react/docs/more-about-refs.html）拿到子组件，然后直接调用子组件的方法。
3. 父组件可以在props中传递一个函数，子组件通过调用该函数来改变父组件。

让我们通过一个例子来看看效果，代码在father_child目录
npm run dev, 然后打开 http://localhost:8080/webpack-dev-server/father.html

### 通过上面的例子我们已经用到了state和props,我们总结一下她们的区别

1. state和props都是存储了数据和函数的js对象，render方法中根据state和props上的数据做一些逻辑判断，渲染不同的界面
2. props只能通过父组件传递下来，不能自己更改
3. state可以通过setState方法更改,是用于组件自己更新自己。
4. 一般来说state存储的是程序的业务逻辑，而props只是展示逻辑
5. redux和flux架构将state拿到store中单独存放，区分出container和component的概念，因此state已经交给redux管理，很好再自己setState了。


## redux (http://redux.js.org)

redux是基于flux架构的一个状态管理框架

我们先来看一张flux架构图 （从flux的github扣来的）

<img src="./assets/img/flux-diagram-white-background.png" />

flux的核心概念是数据的单向流动，通过发起action去改变store，store上数据更新后触发组件的redner,达到更新界面的效果

flux有官方的一个简单实现，但是用起来太啰嗦，所以大家都选择使用redux

对比flux,redux只有一个store,并增加了reducer,container还有中间件的概念

### 简单介绍redux几个概念

1. store 存放全局的数据，所有组件的state都在这里统一管理。
2. container 从store上获取数据的组件，拿到数据后通过props传递给comonent
3. component 只负责展示逻辑的组件，通过props获取数据，不直接跟store打交道
4. action 就是一个简单的js对象，代表一次操作（用户点击，网络请求等），通过dispatch函数分发到reducer,reducer在根据action的内容去改变store上的数据。
5. reducer一个处理action的地方，根据action返回一个新的state,改变store, 然后container会感知到store的变化，如果container所取的state发生变化，就会触发render方法刷新界面。
6. connect 是react-redux中的一个函数，他就是container跟store的桥梁，他接受mapStateToProps跟mapDispatchToProps两个函数作为参数，store变化了就调用这两个函数，将新的state变成props传递给container
7. 中间件，这个redux偷师了express,主要用作在action分发的途中做一些处理，中间件按顺序一级一级的调用

### 让我们通过一个麻雀虽小，五脏俱全的例子来了解一下一个真实的redux项目

#### 首先安装依赖包

npm install redux react-redux redux-logger redux-thunk immutable --save --verbose

上面react-logger是一个打印action日志的中间件，redux-thunk是一个异步action的中间件

这里跟immutablejs (https://facebook.github.io/immutable-js/docs/#/Map)配合使用

1. immutablejs 是react全家桶的一份子，react对他支持很好
2. immutablejs 可以提高程序的渲染效率
3. immutablejs 有一系列操作集合的方法，很好用（map,reduce,filter,every...)
4. immutablejs 其实就是提供了一堆常用的不可变的数据结构
5. 对immutablejs对象的操作会返回一个新的对象，而不是直接改变原对象
6. 我们主要在store的state上用immutablejs
7. 更多内容参见 [immutable.md](./immutable.md)

#### 我们先规范一下我们的action数据结构

```
{
  type: xxx,
  payload: xxx,
  error: xxx,
}

```

type 作为action的唯一标示，payload存放数据，error存放错误信息

#### 为了防止type冲突，我们专门用一个文件来存放action types

新建文件contants/actionType.js

内容如下,先定义两个简单的action类型

```
export const DISABLE_BTN = 'DISABLE_BTN';
export const ENABLE_BTN = 'ENABLE_BTN';

```

#### 其他部分代码我们培训时再讲

这个一个把button的状态交给redux管理的小例子。

### 通过一个toast的例子，我们来认识一下async action

前面的例子两个action都是立马就触发了reducer，程序中大多数的action都是这种类型

有时后我们希望做一些异步的操作后再触发reducer，比如说网络请求的回调函数中。

这里我们选用toast作为例子，他符合异步的要求（2秒后消失）。

#### 数据结构是程序的灵魂，在开始写任何界面之前，先思考一下我们的数据，也就是state长什么样纸

```
const initialState = Immutable.fromJS({
  show: false,
  timestamp: 0,
  text: '提示',
});
```

我们用上面的数据结构来支撑我们的toast

1. show 控制显示和隐藏
2. 由于toast的显示和消失是成对出现的，我们用timestamp在处理消失的时候判断是不是同一次toast
3. text 没啥好说的，界面上展示的信息

#### 最核心的代码，reducer部分逻辑如下

```
export default (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case SHOW_TOAST:
      newState = state.merge({
        show: true,
        timestamp: action.payload.timestamp,
        text: action.payload.text,
      });
      return newState;

    case HIDE_TOAST:
      const timestamp = state.get('timestamp');
      if (timestamp === action.payload.timestamp) {
        newState = state.set('show', false);
      }
      return newState;
    default :
      return state;
  }
};
```

### 接下来我们继续完善上面的button组件

一个合格的button组件应该有以下功能
1. 可用状态
2. 不可用状态
3. 按压情况下的高亮状态
4. busy状态，（转圈，防止表单重复提交)

这里我们来实现一个防止重复提交的button(当然这只是ui层面的防止重复提交，为了更保险，我们还应该在ajax请求的封装里面做一些工作),其他的状态功能请自行发挥

这里网络请求我们用到了fetch代替ajax,这是一个新的api，请在较新的浏览器里查看demo

由于代码逻辑跟toast差不多，这里就不赘述了。

### 上面的例子中用到了网络请求，下面我们来封装一下网络请求的action,顺便了解一下中间件的编写

关于网络请求的封装，我整理了以下几点需求

1. 功能强大却简单好用，能给默认参数的就给出默认参数（封装其他东西也都一样）
2. 封装缓存逻辑
3. 封装loading框
4. 默认的出错处理
5. 可以设置成功和失败的处理逻辑
6. 防止重复提交
7. 可以设置超时时间

由于时间仓促，6，7我们就不做了，6的实现其实跟2差不多

我们还是先来约定以下网络请求action的参数

```
{
  type: CALL_API,
  payload: {
    api: //接口地址
    headers: // 请求header
    loading: //是否显示loading
    success: 成功的action
    fail: 失败的action
    cache: 缓存类型 
  }
}
```

看着参数挺多，其实就api和success 是必须的，其他都有默认值

cache的可选策略如下

```
export const USE_LATEST = 'USE_LATEST'; // 使用上一次的缓存数据，本次请求回来后更新缓存
export const DOUBLE_CB = 'DOUBLE_CB'; // 分别使用缓存数据和本次请求的数据回调两次，更新缓存
export const ONLY_CACHE = 'ONLY_CACHE'; // 只使用缓存数据，在缓存过期之前不请求网络
export const NO_CACHE = 'NO_CACHE'; // 不使用缓存
```

我没有测试每种情况，所以这部分可能会有bug,发现bug请大家自行修改，很好的练手机会。
