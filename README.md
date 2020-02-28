#  基础知识

## 模板语法

五个常用特性

- *ngFor

- *ngIf

- 插值 {{}}

- 属性绑定 []

- 事件绑定 ()

[模板语法指南](https://angular.cn/guide/template-syntax)

## 组件

组件在用户界面（也就是 UI）中定义了一些责任区，让你能重用这些 UI 功能集。你已经通过商品列表组件构建了一个。

组件包含三部分：

- 一个组件类，它用来处理数据和功能。上一节，我们在组件类中定义了商品数据和 share() 方法，它们分别用来处理数据和功能。

- 一个 HTML 模板，它决定了 UI。在上一节中，商品列表的 HTML 模板用来显示每个商品的名称、描述和 “Share” 按钮。

- 组件专属的样式定义了外观和感觉。商品列表中还没有定义任何样式，那属于组件 CSS 负责。

Angular 应用程序由一棵组件树组成，每个 Angular 组件都有一个明确的用途和责任。`

![app-components](https://angular.cn/generated/images/guide/start/app-components.png)

- app-root（橙色框）是应用的外壳。这是要加载的第一个组件，也是所有其它组件的父组件。你可以把它想象成一个基础页面。

- app-top-bar（蓝色背景）是商店名称和结帐按钮。

- app-product-list（紫色框）是你在上一节中修改过的商品列表。

[组件简介](https://angular.cn/guide/architecture-components)

## 输入

要了解如何将数据从父组件传递到子组件、拦截并处理来自父组件的值，以及检测并对输入属性值进行更改的更多信息，请参阅 [组件交互](https://angular.cn/guide/component-interaction)一章。

## 输出

要了解关于从子组件监听事件、读取子属性或调用子方法以及如何用服务在组件之间进行双向通信的详细信息，请参阅[组件交互](https://angular.cn/guide/component-interaction)一章。

## ng命令行

创建组件 

```bash
cd src/app
ng generate component product-alerts
```
