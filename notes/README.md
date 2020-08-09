# 基础

- 目录结构
    ```txt
		.
		├── README.md
		├── angular.json
		├── browserslist
		├── e2e															// e2e测试
		│   ├── protractor.conf.js
		│   ├── src
		│   │   ├── app.e2e-spec.ts
		│   │   └── app.po.ts
		│   └── tsconfig.json
		├── karma.conf.js
    ├── node_modules                    // package.json 中指定安装的软件包
		├── package-lock.json
		├── package.json
		├── src
		│   ├── app
		│   │   ├── app-routing.module.ts   // 路由模块
		│   │   ├── app.component.css       // 样式
		│   │   ├── app.component.html		  // 模版文件
		│   │   ├── app.component.spec.ts	  // 测试
		│   │   ├── app.component.ts				// 组件
		│   │   └── app.module.ts           // 根模块
		│   ├── assets
		│   ├── environments
		│   │   ├── environment.prod.ts
		│   │   └── environment.ts
		│   ├── favicon.ico
		│   ├── index.html
		│   ├── main.ts                     // 包含引导代码
		│   ├── polyfills.ts
		│   ├── styles.css
		│   └── test.ts
		├── tsconfig.app.json
		├── tsconfig.json
		├── tsconfig.spec.json
		└── tslint.json

		6 directories, 28 files
    ```

- package.json

    文件格式

    ```json
    {
      "dependencies":{},  
      "devDependencies":{},
      "scripts":{}
    }
    ```

    `dependencies` 应用程序依赖的包，包括angular本身;

    `devDependencies` 开发过程中用到的包，比如编译器和测试框架；

    `scripts`  用来定义、测试或运行应用程序的命令

```json
{
  "name": "example",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~9.0.7",        // @angular/* 提供了angular的功能，不同模块，功能不同
    "@angular/common": "~9.0.7",
    "@angular/compiler": "~9.0.7",
    "@angular/core": "~9.0.7",
    "@angular/forms": "~9.0.7",
    "@angular/platform-browser": "~9.0.7",
    "@angular/platform-browser-dynamic": "~9.0.7",
    "@angular/router": "~9.0.7",
    "rxjs": "~6.5.4", // Reactive Extensions 软件包，用于实现数据绑定中使用的angular变更检测系统
    "tslib": "^1.10.0",
    "zone.js": "~0.10.2" // 为异步任务提供执行上下文，并用于对模版表达式进行求值
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.900.7",
    "@angular/cli": "~9.0.7",
    "@angular/compiler-cli": "~9.0.7",
    "@angular/language-service": "~9.0.7",
    "@types/node": "^12.11.1",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "^5.1.2",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~4.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~2.1.0",
    "karma-jasmine": "~2.0.1",
    "karma-jasmine-html-reporter": "^1.4.2",
    "protractor": "~5.4.3",
    "ts-node": "~8.3.0",
    "tslint": "~5.18.0",
    "typescript": "~3.7.5" // typescript 语言支持
  }
}
```

- tsconfig.json
    ```json
    {
        "compilerOnSave": false,
        "compilerOptions": {},
        "exclude":[]
    }

    ```

    `compilerOnSave`  toDo

    `compilerOptions`  toDo

    `exclude`  编译器应排除的目录 

```json
{
  "mpileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "module": "esnext",
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "lib": [
      "es2018",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  }
}
```


