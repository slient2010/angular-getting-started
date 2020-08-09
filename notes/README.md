# 基础

- 目录结构
    ```txt
    .
		├── README.md
		├── angular.json
		├── browserslist
		├── e2e
		│   ├── protractor.conf.js
		│   ├── src
		│   └── tsconfig.json
		├── karma.conf.js
		├── package-lock.json
		├── package.json
		├── src
		│   ├── app
		│   ├── assets
		│   ├── environments
		│   ├── favicon.ico
		│   ├── index.html
		│   ├── main.ts
		│   ├── polyfills.ts
		│   ├── styles.css
		│   └── test.ts
		├── tsconfig.app.json
		├── tsconfig.json
		├── tsconfig.spec.json
		└── tslint.json 
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

