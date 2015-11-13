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
（意思是它不會有 side effect，所有事情都在 function 內發生，
並不會影響到任何的東西）

`(previousState, action) => state`