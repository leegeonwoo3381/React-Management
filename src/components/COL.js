import React,{ Component } from 'react';

class COL extends Component {
    render() {
      console.log('COL render');
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

  export default COL;