带新人的路线
基础--框架--业务

1. 基础（当实习生遇到了问题普及基础知识和教他如何获取知识）
  eg: 后端返回的图片URL显示不出来，在浏览器输入URL就直接下载，经过排查是后端返回的content-type（content-type: image/jpeg）不对
  eg: cookie已经登入的账号，前端却读取不到cookie，普及httponly属性，并教他们在MDN直接获取前端基础知识
  教他们如何获取一手资源，并且给他们好几个解决问题的方案，发散思维不局限于一点
2. 框架（需要他们学习能力  直接去阅读官网教程）
3. 业务（先和实习生讲一下大体业务知识，开通账号让他们玩玩熟悉一下系统，然后就是在做项目时深入理解业务）


3. 独立完成营销页面接入打车小程序技术方案选定和开发工作
  0. 在此之前小程序的营销页面是webview
  1. 当时mpx刚开始支持转web端
  2. 页面抽成组件放到编辑器的组件库里
  3. 再把组件库接入页面模板（模板包含基础库等一些各个端的基础能力）
  4. 页面以npm包的形式接入小程序
  5. npm包里面的代码不经过压缩处理，小程序打包统一处理

4. 资源选择器做成前端SDK的形式供第三方使用、屏蔽前端技术栈使得使用方接入成本降低
  1. 通过iframe方式提供服务，通过postMessage传递数据
  2. 封装成npm包的形式给用户使用，用户只需调用封装好的函数即可
  3. 封装成npm包里面的代码包含资源iframe弹出框和数据处理逻辑


项目: 表单字段搭建系统

> 数据结构

```js
[
  {
    type: 'select', // array, object, input, radio, select, textarea ...
    name: 'filed_name', // 字段名字
    label: '字段名字',
    label_en: '字段名字',
    required: true,
    dataSource: {
      type: '',
      enum: [],
      dictUrl: '',
    },
    items: []
  },
  {
    type: 'array',
    name: 'filed_name',
    label: '字段名字',
    label_en: '字段名字',
    required: true,
    items: [
      {
        type: 'input',
        name: 'filed_name',
        label: '字段名字',
        label_en: '字段名字',
        required: true,
        items: [
          {
            type: 'input',
            name: 'filed_name',
            label: '字段名字',
            label_en: '字段名字',
            required: true,
            items: []
          },
        ]
      },
    ]
  },
  {
    type: 'object',
    name: 'filed_name',
    label: '字段名字',
    label_en: '字段名字',
    required: true,
    items: [
      {
        type: 'input',
        name: 'filed_name',
        label: '字段名字',
        label_en: '字段名字',
        required: true,
        items: []
      },
    ]
  },
]
```

项目:  小米.H5编辑器

0. 编辑器数据结构
```js
{
  createdAt: "2020-06-30T03:49:03.000Z",
  updatedAt: "2020-07-20T11:25:58.000Z",
  onlineUrl: "",
  note: "拷贝自服务之心模板",
  creator: "luoxupan",
  global: {
    canShare: false,
    share: { }, // 分享数据
  },
  scenes: {
    lang: "",
    eventTable: { }, // 页面事件
    style: { }, // 页面样式
    updatedAt: "2020-07-20T11:25:58.000Z",
    layers: [
      {
        editorStatus: { active: false, isLock: false, show: true },
        id: "widget-SP-wkTFGj", // 组件的div标签id
        id_name: "二维码",
        key: "ContentImage",
        label: "",
        name: "内容图",
        props: { }, // 用户编辑的动态数据
        style: { }, // 组件样式
        type: "ContentImage", // 指定哪个组件
        children: []
      }
    ]
  }
}
```
1. 优化搭建页面时页面的模块打包代码、使页面打包后的代码更合理
  1. 改造之前页面有几个相同组件，就打包进去几份代码
     改造后相同组件只打包进去一份代码，组件js是一个类，每次组件实例化都new出一个实例，所以只需一份代码即可
     ```js
      new Component(dom, props, style)
     ```
2. 页面存在多个相同模块时、通过合并相同的模块网络请求、优化性能
  ```js
    let timeouter = null; let queueGid = [];
    function fetchGoodsInfoByGid(gid, func = function() {}) {
      if (timeouter) clearTimeout(timeouter);
      queueGid.push({ gid, func });
      timeouter = setTimeout(fetch, 10);
    }
    function fetch() {
      if (queueGid.length == 0) return;
      let queue = queueGid.slice(0);
      queueGid.length = 0;

      let params = { model: "Product", action: "GetDetailLite", parameters: {} };
      params.parameters.gid = queue.map(({ gid }) => gid);
      miFetch2({
        data: { info: params },
        success: (result) => {
          let map = result.info.data;
          queue.forEach(({ gid, func }) => map[gid] && func(map[gid]));
        },
        error: (e) => toast("获取商品信息失败"),
        url: '/app/shopv3/pipe',
        skipLogin: true
      });
    }
  ```
3. 活动页面的图片全部懒加载、解决活动页面承载内容过多导致页面过慢问题
4. 倒计时模块时间校准、解决js执行阻塞导致时间不准
  1. 后端给到服务器的当前时间和结束时间，前端在倒计时开始时记录前端当前时间a，每次倒计时获取前端当前时间减去a就是这段时间的时间段
5. 参与优化模块开发流程提高开发效率
  0. 改造前是一股脑本地代码打包开发的（组件开发好再把文件上传）  开发完成后通过H5界面把源代码上传
  1. 本地开发时当勾选发布开关时，本地保存的代码直接通过接口把模块发布到后端服务
  2. 所有组件代码都在内存里面，开发修改某个组件代码后，通过websock把本地开发的代码内存中替换之前的代码，达到开发实时预览效果
6. 导出页面时、将动态数据打包到html文件、提高页面加载速度、提升用户体验
  1. 用户编辑的数据都打包到代码里面
7. 每个模块都有schema数据结构、模块支持可编辑、用数据结构方式解决用户编辑模块存储数据问题
8. 独自推动完成把相同的业务逻辑抽象成基础库（端内、小程序，分享,跳转）


小米.有品React Native项目

2. 参与产品站重构时用SectionList优化大列表性能
  1. 就像微信盆友圈列表，每个状态有头像、名字、内容框、品论点赞框等。
  2. SectionList基于VirtualizedList的封装实现，当滑出屏幕的卡片可以被复用，达到节省开销的目的

3. 由于电商业务图片多占用内存过大、用FastImage优化内存占用过大问题
  1. 图片强缓存（memory + disk image caching）
  2. 渐进式图像加载、图片预加载


content-encoding: gzip

亮点：纯粹技术上需要解决的、自我梳理发现不合理改进的、除了技术解决问题还可以站在用户角度解决问题（自己有想法可以和PM商量，资源选择器、绑卡）
1. 搭建做的多一点，就讲一下可视化搭建。对比电商和dpub的不一样场景，技术上的问题可以通过架构调整去解决
2. Dpub编辑器的ldp模板（使用ejs模板引擎）开发，支持不同分支，支持本地post上传
3. Dpub编辑器营销组件是每个组件单独模板的，如果代码有问题直接发布模板就可解决  无需再次编辑导出
4. 优化模块内的api请求
5. 优化模块开发流程提高开发效率
6. 图片懒加载、相同模块请求优化
7. 各端（小程序、端内，web和端的登入 分享）相同的业务逻辑抽象成基础库--小程序登入是小程序把token返回在URL上


工作的收获：
0. 之前做事情只是执行老大下发下来的具体开发任务，现在是做某件事情而不是某个点
1. 在这边有些项目是直接拷贝国内现有，经过业务考验成熟的项目，POPE是拷贝自国内的（借力做事情）
2. 在协助QA中台做事情的收获：基于目标做规划，选择方案，落实方案，所有资源集中起来，用户使用成本下降，云真机，物料中心（绑卡，水费账单），开国宝，质量大盘（线上故障工单流转）
3. 和D9大佬沟通后的收获：做事情搬到标准和流水线化，做完一个项目都需要复盘，好的点在哪里，做的不够的地方在哪里，下次继续迭代改进。做事大方一点放开一点（放开做事情）
4. 做事情的方法有很多，思考方式的改变：有些事情可以沟通解决，不一定是技术单独可以搞定，需要结合产品视角
5. 能力可以通过锻炼获得：做事的能力，沟通协调的能力，解决问题的能力，推动事情的能力

