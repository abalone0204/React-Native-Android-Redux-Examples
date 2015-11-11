# Image

跟 android 裡面一樣，

可以從 image 的名稱去決定對對應的解析度做出 responsive 的 render

```
.
├── button.js
└── img
    ├── check@2x.png
    └── check@3x.png
```
前面 hello wordl 的練習裡面有發現，
這裏面的 `<Image />` component 跟 html 中的 img tag 有兩個最不同的點

1. source 吃的是一整個 object，而 img 的 src 吃的是純 string。

=> `<Image source={uri: PATH}/>` v.s `<img src=PATH/>`

2. 圖片要指定大小才行，不管是在 style 或是在 source 裡面直接指定

=> 因為如果像瀏覽器一樣不指定給預設大小的話，等於是要 render 時才能知到圖片大小，這樣 UI 在 load 到圖片前會先亂噴一通，造成不好的 UX。

# `require('./my-icon.png')`

如果是在本機要 load 靜態檔案可以用這種語法，
會回傳一個 object:

```
{"__packager_asset":true,"path":"/Users/react/HelloWorld/my-icon.png","uri":"my-icon.png","width":591,"height":573}
```
這樣就可以自動讀取到適合的圖片 size。
(在 mounting component 的時候)