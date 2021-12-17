[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

# isESM(path)

> 通过 AST 检测 JS 文件是不是 ESM，并非读取 "package.json " 文件中 "type" 设置。

## 使用

- `path`，{ String }，路径

```js
import { log } from "console";
import { isESM, isESMSync } from "@iyowei/is-esm";

(async () => {
  log(await isESM("/Users/iyowei/Development/iyowei/create-esm/src/print.js")); // 异步
  // true

  log(isESMSync("/Users/iyowei/Development/iyowei/create-esm/src/print.js")); // 串行
  // true
})();
```

## 安装

[![Node Version Badge][node version badge]][download node.js]

```shell
# Pnpm
pnpm add @iyowei/is-esm

# yarn
yarn add @iyowei/is-esm

# npm
npm add @iyowei/is-esm
```

## 参与贡献

![PRs Welcome][prs welcome badge]
