# Nav

Nav 组件

## 使用

- 基础用法

```
import React from 'react'
import {Nav} from 'wowjoy-ui'
import { ReactComponent as Home } from "wowjoy-ui/es/static/medias/svg/home.svg";

const PROPS = {
  navList: [
    {
      content: [<Home />, "首页"],
      id: "home1",
      subList: [
        {
          content: <div>参数设置</div>,
          id: "home11"
        }
      ]
    },
    {
      content:"招聘管理",
      id: "home2",
      to: "./list"
    },
    {
      content: <span><Home />, "招聘管理"</span>,
      id: "home3",
      defaultIsOpen: true,
      subList: [
        {
          content: <div>参数设置</div>,
          subViewType: "pop",
          id: "home31",
          subList: [
            { content: <div>职级序列与职级1</div>, id: "xx1" },
            { content: <div>职级序列与职级2</div>, id: "xx2" },
            { content: <div>职级序列与职级3</div>, id: "xx3" },
          ]
        },
        {
          subViewType: "pop",
          content: <div>考勤假期设置</div>,
          id: "home32",
        }
      ]
    },
    {
      id: "home5",
      content: [<Home />, "招聘管理"]
    }
  ],
  defaultActiveId: "home5",
  onChange: (...args) => console.log(args)
};

const Foo = () => <Nav></Nav>
```

## APIs

| 属性            | 描述                                                                            |  类型  | 默认值 |
| --------------- | :------------------------------------------------------------------------------ | :----: | :----: |
| className       | 顶层样式 class                                                                  | string |        |
| defaultStyles   | 顶层默认样式                                                                    | string |        |
| children        | 内容                                                                            |  node  |        |
| navList         | 导航数据内容 配置见下表                                                         | array  |        |
| size            | 可选值'small' 导航尺寸配置                                                      | string |        |
| onChange        | 选中项改变事件, params: `(itemData.id, itemData)` //选中项的 id, 选中项的所有信息 |  func  |        |
| activeId        | 选中项                                                                          | string |        |
| defaultActiveId | 默认选中项                                                                      | string |        |
| noScroll        | 是否阻止滚动条渲染, 当确认不会产生滚动条时可以增加该属性优化性能                |  bool  |        |

### navList [{}]

| 属性          | 描述                                                      |  类型  | 默认值 |
| ------------- | :-------------------------------------------------------- | :----: | :----: |
| content       | 内容                                                      |  node  |        |
| id            | 唯一标识                                                  | string |        |
| subList       | 下拉列表内容 配置同`navList`                              | array |        |
| subViewType   | 下拉弹出类型 可选项: `'pop'`（弹出式下拉） 默认为直接下拉 | string |        |
| isOpen        | 是否打开此弹出菜单                                        |  bool  |        |
| defaultIsOpen | 是否默认打开此弹出菜单                                    |  bool  |        |
| to            | 点击跳转的路由                                            | string |        |
