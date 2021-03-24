### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
	- Redux is a state management tool that centralises an application's state. It is easily testable and by default keeps all logic pertaining to state in one place. It might be most beneficial when working on larger applications as part of a team	

- What are three features of the Redux developer tool in Chrome? 
	- the debugger makes it easy to trace when and how state has changed across time
	-  you can examine the action, the current state and the difference over time

- What is a store?
	- a store brings together the state, actions, and reducers that make up an app
	- you can access any state via `store.getState()` and update state via `store.dispatch(action)`

- What is a reducer?
	- Reducers are functions that take the current `state` and an `action` as arguments, and return a new state result. In other words, `(state, action) => newState`

- What is an action?
	- actions are JS objects that have a key of `type` and optionally `payload`. They describe what's happened in the application and trigger the appropriate reducer

- What is an action creator?
	- a function that returns an action object. This is used so that the object doesn't need to be written inline each time

- How does data flow in a React/Redux application?
	- most state is kept in the redux store
	- if an action is dispatched, it triggers the appropriate reducer
	- the reducer function changes the state by applying a pure operation, i.e. not via mutating the original state
	- state is shared via provider component and can be accessed from anywhere in the app using the `useSelector` hook

- What is the purpose of the `<Provider>` component?
	- The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.  

- What is the purpose of the `useSelector` hook? What does it return?
	- Allows you to extract data from the Redux store state, using a selector function. 

- Describe the `useDispatch` hook. What do you use it for?
	- used to dispatch actions 

- What is redux-thunk and why would you use it?
	- Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. This is useful for handling API calls and other async operations

- What are propTypes?
	- a typechecking library for React
	- was originally exposed as part of the React core module, and is commonly used with React components.

- Describe the `useCallback` hook.  What is it used for?
	- returns a memoized callback 
	- can be passed a dependency array, and callback will only change when one of the dependencies changes
	- useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
	- `useReducer` accepts a reducer of a type (state, action) => newState, and returns the current state paired with a dispatch method
	- I think that using `useReducer` in combination with the `Context` API is essentially recreating `react-redux` but worse so in situations where I have a large stateful application I'd opt for the latter. I think redux is also particularly useful for collaboration within a team because all reducers and actions are kept in specific files so it's easy to see what is going on. Another advantage of redux is its dev tools where one can track changes over time. 