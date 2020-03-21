import { Component, OnInit } from '@angular/core';

// 从 @angular/core 导入 Input。
import { Input } from '@angular/core';

// 从 @angular/core 中导入 Output 和 EventEmitter
import { Output, EventEmitter } from '@angular/core';

// 注意 @Component() 装饰器。这表明它下面的类是一个组件。它提供了有关该组件的元数据，包括它的选择器、模板和样式。
// 该 selector 用于标识该组件。该选择器是当 Angular 组件在页面中渲染出 HTML 元素时使用的名字。按照惯例，Angular 组件选择器会以前缀 app- 开头，后跟组件名称。
// 模板和样式文件名。它们是对 StackBlitz 生成的 HTML 和 CSS 文件的引用。
// 组件定义中还导出了类 ProductAlertsComponent，用于处理该组件的功能。

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// 在 ProductAlertsComponent 类的定义中，定义一个带 @Input() 装饰器的 product 属性。@Input() 装饰器指出其属性值是从该组件的父组件商品列表组件中传入的。
export class ProductAlertsComponent implements OnInit {
  @Input() product;

  // 在组件类中，用 @Output() 装饰器和一个事件发射器 EventEmitter() 实例定义一个名为 notify 的属性。这可以让商品提醒组件在 notify 属性发生变化时发出事件。
  @Output() notify = new EventEmitter();

  // 当 Angular CLI 生成一个新组件时，它包含一个空的构造函数，OnInit 接口和 ngOnInit()方法。
  constructor() { }

  ngOnInit() {
  }

}
