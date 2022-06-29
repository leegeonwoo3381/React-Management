// // import logo from './logo.svg';
// import './App.css';
// import React,{ Component } from 'react';
import TOC from './components/TOC';
import COL from './components/COL';
import Subject from './components/Subject';

import './App.css';
import React,{ Component } from 'react';
// import Header from '../src/chrome/Header';
// import Footer from '../src/chrome/Footer';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header title="WEB" sub="이건우 머리 입니다!"></Header>   {/* <Subject /> */}
//         <Footer title="HTML" desc="이건우 발 입니다...."></Footer>
//       </div>
//     );
//   }
// }
// export default App;

//--------------------------------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB',sub:'World Wide Web'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for imformation'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'Welcome') {       // == 는 값이 같은 때만 사용, === 는 값과, 타입이 같은지 확인할 때 사용
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read') {
      // for(let i=0; i<this.state.contents.length; i++) {
      //   let data = this.state.contents[i];
      //   if(data.id === this.setState.selected_content_id) {
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
        
      //   }
      // }
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }

    }
    return (
      <div>
        
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){this.setState({mode:'Welcome'})}.bind(this)}
        ></Subject>   {/* <Subject /> */}

        {/* <Subject title="React" sub="FOR UI"></Subject> */}
        <TOC data={this.state.contents}
          onChangePage={function(id){
            this.setState(
              {
                mode:'read',
                selected_content_id:Number(id)
              }
              );
          }.bind(this)}
        ></TOC>

        <COL title={_title} desc={_desc}></COL>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}


export default App;
