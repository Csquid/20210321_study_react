import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description
    }
  }
  render() { 
    let _title = this.props.title;
    let _description = this.props.description;

    console.log('Content render');
    return ( 
      <article> 
        <h2>Update</h2>
        <form action='/update_porocess' method='post' onSubmit={(e) => {
          e.preventDefault();
          
          this.props.onUpdatePage (
            e.target.title.value,
            e.target.description.value
          );
        }}>
          <p><input type="text" name="title" defaultValue={_title}/></p>
          <p><textarea name="description" defaultValue={_description}></textarea></p>
          <p><input type="submit"/></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;