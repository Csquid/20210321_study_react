import React, { Component } from 'react'

class Subject extends Component {
  render() {
    console.log('Subject Render');
    return (
      <header>
        <h1>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            console.log(this);
            //debugger;
            this.props.onChangePage();
          }}>{this.props.title}</a>
        </h1>
        {this.props.description}
      </header>
    );
  }
}

export default Subject;