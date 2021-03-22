import React, { Component } from 'react';
import Subject from './Components/Subject';
import List from './Components/List';
import Content from './Components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "Web", comment: "World wide web!"},
      lists: [
        {id: 1, title: 'HTML', description: 'HTML is for information'},
        {id: 2, title: 'CSS', description: 'CSS is for design'},
        {id: 3, title: 'JavaScript', description: 'JavaScript is for information'}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} comment={this.state.subject.comment}></Subject>
        <List data={this.state.lists}></List>
        <Content></Content>
      </div>
    );
  }
}

export default App;