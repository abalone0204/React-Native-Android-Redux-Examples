# 用 jest 來測試

寫 code 當然不能不寫測試
這裏需要在 package.json 中對jest 做一些設定。

```js
  "jest": {
    "scriptPreprocessor": "node_modules/react-native/jestSupport/preprocessor.js",
    "setupEnvScriptFile": "node_modules/react-native/jestSupport/env.js",
    "testPathIgnorePatterns": [
      "/node_modules/",
      "packager/react-packager/src/Activity/"
  ],
  "testFileExtensions": [
    "js"
  ],
  "unmockedModulePathPatterns": [
    "promise",
    "source-map"
  ]

```

官方的doc 裡面還是舊的`scriptPreprocessor.js`，
如果沒改成`preprocessor.js`，剛剛開了 pull request。
