import React,{ Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <footer>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </footer>
      );
    }
  }

  export default Footer;