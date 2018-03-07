**NEVER mutate state***

// reactJS -- library for building UI,  declarative, :easy to read and write,

`yarn global add create-react-app`
`create-react-app counter`

``
// if next state depends on previous state, then instead of object you can set a function, and return value = state.value,  and this guarentees that second state waits for previous state
//
// stage 2 class property:  (not part of JS yet):
//   take 'this.state' and make it just 'state'
//   and can make functions arrow functions, then you dont need to bind in constructor, and if no binding in constructor, then you dont need a constructor

`touch src/Counter.js`
  ```import React from 'react';

  class Counter extends React.Component {
    state = { value: 0 }

    inc = () => {
      this.setState( state => {
        return { value: state.value + 1 }
      });
    }

    dec = () => {
      this.setState( state => {
        return { value: state.value - 1 }
      });
    }

    render() {
      return (
        <div>
          <p>{this.state.value}</p>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      )
    }
  }

  export default Counter;```


  
