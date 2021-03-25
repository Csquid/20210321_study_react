import React, { Component } from 'react';
import Subject from './Components/Subject';
import List from './Components/List';
import ReadContent from './Components/ReadContent';
import Controll from './Components/Controll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      listIDX: 0,
      subject: { title: "Web",      description: "World wide web!" },
      welcome: { title: "Welcome",  description: "Hello, React!!"},
      lists: [
        {id: 0, title: 'HTML',        description: 'HTML is for information'},
        {id: 1, title: 'CSS',         description: 'CSS is for design'},
        {id: 2, title: 'JavaScript',  description: 'JavaScript is for information'}
      ]
    }
  }
      
  render() {
    console.log('App render');
    let _title, _description = null;
    if(this.state.mode === 'welcome') {
      _title        = this.state.welcome.title;
      _description  = this.state.welcome.description;
    } else if (this.state.mode === 'read') {
      _title        = this.state.lists[this.state.listIDX].title;
      _description  = this.state.lists[this.state.listIDX].description;
    }
    
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          description={this.state.subject.description}
          // custom
          onChangePage={() => {
            this.setState({mode: "welcome"});
          }}
        ></Subject>
        <List 
          data={this.state.lists}
          onChangePage={(idx) => {
            this.setState({
              mode: 'read',
              listIDX: idx
            });
          }}
        >
        </List>
        <Controll onChangePage={(nMode) => {
          this.setState({
            mode: nMode
          })
        }}></Controll>
        <ReadContent title={_title} description={_description}></ReadContent>
      </div>
    );
  }
}

export default App;
//2018.03.25