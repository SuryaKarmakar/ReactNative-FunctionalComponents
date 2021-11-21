# React Native Functional Component

Functional components are functions that takes in props and return JSX. They do not natively have state or lifecycle methods, but this functionality can be added by implementing React Hooks. Functional components are usually used to display information. They are easy to read, debug, and test.

## Usage :

- We can use normal JavaScript <b>function</b> keyword to create function component :

```js
export default function App() {
  return <Text>Using Normal Function</Text>;
}
```

- Or we can also use JavaScript ES6 <b>Arrow function</b> to create function component :

```js
const App = () => {
  return <Text>Using Arrow Function</Text>;
};
```

- You can export your <b>ES6</b> function component with JavaScript’s <b>export default</b> for use throughout your app :

```js
const App = () => {
  return <Text>Using Arrow Function</Text>;
};

export default App;
```
