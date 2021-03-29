import React, {Component} from 'react';
import '../../css/content.css';

class CreateContent extends Component {
  render() {
    console.log('Content render');
    return (
      <article>
        <h2>Create</h2>
        <form action='/create_porocess' method='post'
          onSubmit={ (e) => {
            e.preventDefault();
            this.props.onCreatePage(
              e.target.title.value, 
              e.target.description.value
            );
          }
        }>
          <p><input type="text" name="title" placeholder="title"/></p>
          <p><textarea name="description" placeholder="description"></textarea></p>
          <p><input type="submit"/></p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
