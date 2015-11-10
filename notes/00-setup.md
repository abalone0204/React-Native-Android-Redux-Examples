# React Native : Android 

- 線一定要弄對，有些 micro usb 線只能充電
        （=.=）

- 開啟開發者模式，USB 偵錯，讓電腦能直接在手機上安裝程式

- 安裝 android sdk

- 在 command-line 輸入 `android`

- 照著 tutorial 把建議的裝一裝

```
adb reverse tcp:8081 tcp:8081
```

- 確定筆電跟手機連的是同個 wifi

- 再來就是把 demo 的專案在手機上 build 起來

- 在專案資料夾執行 

```
react-native run-android
```

(因為跑虛擬機我的小4GB筆電實在吃不消)

- 這裏會遇到一些 dependencies 沒有處理好的問題，再次回到 cli 輸入 android 去安裝沒裝好的 dependencies

- 成功之後就會開啟 AwesomePorject 這個 App 在手機上

- 打開剛 Build 好的 App 之後，搖兩下或者在 cli 輸入：

```
adb shell input keyevent 82
```

- 選 Dev settings

- 選 Debug server host for device

- 再次確定手機和電腦連了同一個 wifi network，輸入 local ip 和 port，預設是 8081

- 回到 app，再搖兩下，選擇 Reload JS

- [參考資料：Running on device: android](http://facebook.github.io/react-native/docs/running-on-device-android.html)