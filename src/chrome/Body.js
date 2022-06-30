import React,{ Component } from 'react';

class Body extends Component {
    render() {
      let lists = [];
      let data = this.props.data;
      let i = 0;
      while(i<data.length) {
        lists.push(<button key={data[i].id}>
          <a 
          href={"/content/" + data[i].id}
          data-id = {data[i].id}
            onClick = {function(e) {
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}
          >{data[i].title}</a></button>);
        i = i + 1;
      }
      return (
        <nav>
            <br></br>
            <hr></hr>
            <br></br>
            &nbsp;&nbsp;
            {lists}
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>

        </nav>
        
      );
    }
  }
  
  export default Body;