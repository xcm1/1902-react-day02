import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老坛酸菜牛肉面','葱爆牛肉面']
        }
      ]
    }
  }

  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (<li key = {index}>
              { item.brand }
              <ul>
                {
                  this.state.list.map((it, ine) => {
                    return (<li key = { ine }>
                      { it.data }
                    </li>)
                  })
                }
              </ul>
            </li>)
          })
        }
      </ul>
    )
  }
}


export default App;