#Navigator

並不是指上方的瀏覽bar，
可以想成是用於切換 app 中 View 的 controller，
但必須要提供給 Navigator 這個 component route object來決定

用原生地 component 來處理換頁可以有較好的效能，
比起原先的一直不斷重新 render

```js
A renderScene function that the navigator
can use to render the scene for a given route.
```

使用`renderScene`這個 function 來決定要 render 哪個 scene

prop: `configureScene` 可以用來決定 render 當情這個 scene 時要執行什麼動畫
(可以在`Navigator.SceneConfigs`裡面看看有哪些內建的動畫特效可用)

# 實際例子

```js
<Navigator
    initialRoute={{name: 'My First Scene', index: 0}}
    renderScene={(route, navigator) =>{
        return (
            <CounterApp
                name={route.name}
            />      
        );    
    }
}
/>
```

執行`renderScene`之後的兩個參數：`(route, navigator)`

1. route可以拿來決定要 render 哪個 component

2. navigator 則可以執行一些 Navigator 提供給我們的 function


[參考資料](https://facebook.github.io/react-native/docs/navigator.html#content)

