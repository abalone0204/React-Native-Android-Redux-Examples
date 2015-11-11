# React Native Android : Redux Examples

## Intro

- This is a Android App built with React Native, and it will present all redux examples.

- I'm working on redux during daily work, since redux is such a beatiful and awesome work, I think it might be also  interesting to shift build everything on the browser to android version.

- If you have some suggestions, you can just give me issue or pull requests which I will super appreciate.

## Preview 

1. Counter 

![demo-counter](https://github.com/abalone0204/React-Native-Android-Redux-Examples/blob/master/demoImgs/demo-counter.png)

## Build

```bash
npm install
react-native run 
```


## Directory structure


## Todos

- [ ] Navbar

- [x] Counter

- [ ] Todos

- [ ] Todos with undo

- [ ] Reddit

- [ ] Real World 

## Issues

- You should use redux 3.x, so you might see this:

```js
<Provider store={store}>
    {() => <CounterContainer />}
</Provider>
```