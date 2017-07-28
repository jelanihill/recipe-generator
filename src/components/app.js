import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Default Button</button>
        <button className="ui button">Semantic Button</button>
        <Button primary>Semantic React Button</Button>
      </div>
    );
  }
}

export default App;
