- react native 用 style object 的方式來呈現，會用到許多 flex 的個概念

- [flex guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# ListView

顯示部份資料，這樣效能會比較好，
ListView 會只顯示現在螢幕出現的部分，
離開的話就會將他移掉。

## API 介紹

```js
<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
```

- dataSource: 資料來源，必須從 ListView 底下呼叫 DataSource 來初始化，同時要給他一個判定 row 有在變動的 function

```js
new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2 
      })
```

- renderRow: 從 dataSource 中每次拿出來顯示要用的 function

