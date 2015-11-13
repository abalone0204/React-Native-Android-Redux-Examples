# Todo Example

Redux 的部分不會講得太詳細，
只會說明大致上的流程，
還有我認為關鍵或者在 react-native 中會不一樣的地方

## Actions

- 先建立 action

- 一共有 addTodo, completeTodo, removeTodo, setVisibility 四個 action

## Reducer


### 設計 state 的長相

畫面上的每個元件都會有它自己的狀態，
我們如果更改狀態的話，整個畫面就會重新 render，
所以最好的做法就是我們在一開始就先規劃好所有需要的狀態。
（這個概念正是為什麼 redux 也跟 react 這麼合拍的原因）


前面的 action 所做的事情只是 return 了一個 object，
並不會直接對狀態造成改變，
因為「判斷狀態如何改變」是 reducer 的工作。

所以我們要做的是先規劃好 我們 UI state的長相，
todo 之所以經典就是因為他除了簡單之外，
同時也會讓你思考一下 state object 該如何規劃。

這裏的 state 只要簡單分成兩塊就好

1. 選擇哪個filter 
2. 一共有哪些 todos
    - 每個 todo 的文字以及是否完成

```js
{
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {text: 'wash', completed: true},
        {text: 'wash', completed: true},
        {text: 'sleep', completed: false},
    ]
}
```

### Reducer

reducer 其實只是一個函數，而且是純函數
（意思是它不會有 side effcect，所有事情都在 function 內發生，
並不會影響到任何的東西）

`(previousState, action) => state`

- 活用 combine reducer 可以讓程式碼變得更好維護，尤其是

### Store

state 最終會被放到 store 裡面存放，
也就是 reducer 只是決定要更新的 state 長成怎樣
最終還是要 dispatch 以後 state才能真正變動
action -> reducer -> store

## Data Flow

講完這裡就要馬上講資料流
當 action 發生之後
其實是這樣改變狀態的 `store.dispatch(action)`
只是中間會多了一層 reducer 來決定到底新的 state 要長怎樣

`store.subscribe(listerner)`

曾經我也對 listener 感到困惑，但其實前面例子有說到了，
listener 也只是一個 function，
但是這個 function 會在 store 裡面的 state 有變化時被呼叫。
沒錯，就像我們 subscribe 了某個 utube 頻道，
當那個頻道有新影片發佈時，我們會收到通知。
而我們可以在 listener 這個 function裡面執行
`console.log(state.getState())`可以拿到當前 store 的 state。

- 因為我們是用 react-redux的關係，就是在這裡我們會在最上層放 state的 container 去執行 state。

## Import to React

### Smart & Dumb Component

理論上來說我們只有最上層的 component 
會subscribe redux 中的 state，
因為它多「會」了這一項技能，所以我們把它稱為「Smart Component」。

其餘沒有從 redux subscribe 的 component則稱為「Dumb Component」
如果這是一篇只關於 redux 的教學，那著重應該會在 Smart Component的說明，
可惜這是一篇 redux + react-native 的教學，
我們必須來好好考慮要用哪些 Component ，
畢竟這些並不是我們所熟悉的 html tag XD

