// // import logo from './logo.svg';
// import './App.css';
// import React,{ Component } from 'react';
// import TOC from './components/TOC';
// import COL from './components/COL';
// import Subject from './components/Subject';

import './App.css';
import React,{ Component } from 'react';
import Header from '../src/chrome/Header';
import Footer from '../src/chrome/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="WEB" sub="이건우 머리 입니다!"></Header>   {/* <Subject /> */}
        <Footer title="HTML" desc="이건우 발 입니다...."></Footer>
      </div>
    );
  }
}
export default App;

//--------------------------------------------------------------------------------------------------------------------------

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Subject title="WEB" sub="World Wide Web!"></Subject>   {/* <Subject /> */}
//         {/* <Subject title="React" sub="FOR UI"></Subject> */}
//         <TOC></TOC>
//         <COL title="HTML" desc="HTML is HyperText Markup Language."></COL>
//       </div>
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React
//       //     </a>
//       //   </header>
//       // </div>
//     );
//   }
// }


// export default App;
