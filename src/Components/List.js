import React, { Component } from 'react'

class List extends Component {
  state = {  }
  shouldComponentUpdate(newProps, newState) {
    console.log(">>> Lists render shouldComponentUpdate");
    if(this.props.data === newProps.data) {
      return false;
    }
    return true;
    // console.log(">>> Lists render shouldComponentUpdate"
    //   , newProps.data
    //   , this.props.data
    // );
  }
  render() { 

    console.log('>>> Lists render');
    
    let data = this.props.data;
    let lists = [];

    for(let i = 0; i < data.length; i++) {
      lists.push (
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={(e) => {
              e.preventDefault();
              // this.props.onChangeContent(data[i].id);
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
    }

    return ( 
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}
 
export default List;