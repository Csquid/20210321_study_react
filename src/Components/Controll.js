import React, { Component } from 'react'

class Subject extends Component {
  render() {
    console.log('Subject Render');
    return (
      <ul>
        <li>
          <a href="/create" onClick={(e) => {
          
            e.preventDefault();
            this.props.onChangePage('create');
          }}>Create</a>
        </li>
        <li>
          <a href="/update" onClick={(e) => {
            
            e.preventDefault();
            this.props.onChangePage('update');
          }}>Update</a>
        </li>
        <li>
          <input type="button" value="delete" onClick={(e) => {
              
            e.preventDefault();
            this.props.onChangePage('delete');
          }}/>
        </li>
      </ul>
    );
  }
}

export default Subject;