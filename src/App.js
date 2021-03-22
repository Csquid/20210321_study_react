import React, { Component } from 'react';
import Subject from './Components/Subject';
import List from './Components/List';
import Content from './Components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="Web" comment="World wide web"></Subject>
        <Subject title="React" comment="React is future"></Subject>
        <List></List>
        <Content></Content>
      </div>
    );
  }
}

export default App;