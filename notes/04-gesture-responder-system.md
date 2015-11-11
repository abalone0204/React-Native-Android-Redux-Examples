#Gesture Responder System

這應該就是為什麼要做 native app 最大的意義之一。

#Best Practices 

建議對每個「動作」（event）都實作下面兩個 attributes

1. Feedback/highlighting: 這樣使用者才知道自己按了什麼

2. Cancel-ability : 這樣他能隨時取消，避免犯錯時不知道怎辦


#Responder Lifecycle 

主要是用 View  component 來做到這件事情。
