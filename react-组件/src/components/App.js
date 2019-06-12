import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: true
    }
  }

  render () {
    return (
      <div>
        {
          this.state.flag ? <h1>如果为真11就显示</h1> : <h1>去过为佳就显示</h1>
        }
      </div>
    )
  }
}


export default App;