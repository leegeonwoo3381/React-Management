// // import logo from './logo.svg';
// import './App.css';
// import React,{ Component } from 'react';
// import TOC from './components/TOC';
// import ReadContent from './components/ReadContent';
// import Subject from './components/Subject';
// import Control from './components/Control';
// import UpdateContent from './components/UpdateContent';

// import './App.css';
// import React,{ Component } from 'react';
// import CreateContent from './components/CreateContent';
// import ReadContent from './components/ReadContent';
// import Header from '../src/chrome/Header';
// import Body from '../src/chrome/Body';
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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.max_content_id = 3;
//     this.state = {
//       mode:'read',
//       selected_content_id:2,
//       subject:{title:'WEB',sub:'World Wide Web'},
//       welcome:{title:'Welcome', desc:'Hello, React!!!'},
//       contents:[
//         {id:1, title:'HTML',desc:'HTML is for imformation'},
//         {id:2, title:'CSS',desc:'CSS is for design'},
//         {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
//       ]
//     }
//   }

  //getReadContent Start

  // getReadContent() {
  //   let i = 0;
  //     while(i < this.state.contents.length) {
  //       let data = this.state.contents[i];
  //       if(data.id === this.state.selected_content_id) {
  //         return data;
  //       }
  //       i = i+1;
  //     }
  // }

  //getReadContent End

  //getContent Start
  
  // getContent() {
  //   let _title, _desc = null, _article;
  //   if(this.state.mode === 'Welcome') {       // == 는 값이 같은 때만 사용, === 는 값과, 타입이 같은지 확인할 때 사용
  //     _title = this.state.welcome.title;
  //     _desc = this.state.welcome.desc;
  //     _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
  //   }else if(this.state.mode === 'read') {
  //     let _content = this.getReadContent();

      // for(let i=0; i<this.state.contents.length; i++) {
      //   let data = this.state.contents[i];
      //   if(data.id === this.setState.selected_content_id) {
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
      //   }
      // }
      
  //     _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
  //   }else if(this.state.mode === 'create') {
  //     _article = <CreateContent onSubmit={function(_title,_desc){
  //       // console.log(_title, _desc);
  //       this.max_content_id = this.max_content_id +1;
  //       // this.state.contents.push(
  //       //   {id:this.max_content_id,title:_title,desc:_desc}
  //       // );
  
  //       let _contents = this.state.contents.concat(
  //         {id:this.max_content_id,title:_title,desc:_desc}
  //       );
  
  //       this.setState({
  //         contents : _contents
  //       })
  //     }.bind(this)}></CreateContent>
  //   }else if(this.state.mode === 'update') {
  //     let _content = this.getReadContent();
  //     _article = <UpdateContent data = {_content}></UpdateContent>
  //   }


  //   return _article;

  // }

  //getContent end

  // render() {
  //   console.log('App render');
  //   return (
  //     <div>
  //       <Subject 
  //         title={this.state.subject.title} 
  //         sub={this.state.subject.sub}
  //         onChangePage={function(){this.setState({mode:'Welcome'})}.bind(this)}
  //       ></Subject>   {/* <Subject /> */}

  //       {/* <Subject title="React" sub="FOR UI"></Subject> */}
  //       <TOC data={this.state.contents}
  //         onChangePage={function(id){
  //           this.setState(
  //             {
  //               mode:'read',
  //               selected_content_id:Number(id)
  //             }
  //             );
  //         }.bind(this)}
  //       ></TOC>
  //       <Control onChangeMode={function(_mode){
  //         this.setState({
  //           mode:_mode
  //         });
  //       }.bind(this)}></Control>
  //       {this.getContent()}
  //     </div>
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
//     );
//   }
// }


// export default App;

//--------------------------------------------------------------------------------------------------------------------------

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mode:'read',
//       selected_content_id:1,
//       subject:{title:'홈',sub:'안녕하세요~'},
//       welcome:{title:'환영합니다', desc:'안녕하세요 이건우라고 합니다. 잘부탁드립니다.'},
//       contents:[
//         {id:1, title:'이건우',desc:'손놈님~~'},
//         {id:2, title:'나이',desc:'32세'},
//         {id:3, title:'연락처', desc:'010-1234-5678'},
//         {id:4, title:'집', desc:'서울 구로구'},
//       ]
//     }
//   }
//   render() {
//     console.log('App render');
//     let _title, _desc = null;
//     if(this.state.mode === 'Welcome') {       // == 는 값이 같은 때만 사용, === 는 값과, 타입이 같은지 확인할 때 사용
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//     }else if(this.state.mode === 'read') {

//       let i = 0;
//       while(i < this.state.contents.length) {
//         let data = this.state.contents[i];
//         if(data.id === this.state.selected_content_id) {
//           _title = data.title;
//           _desc = data.desc;
//           break;
//         }
//         i = i+1;
//       }

//     }
//     return (
//       <div>
//         <Header 
//           title={this.state.subject.title} 
//           sub={this.state.subject.sub}
//           onChangePage={function(){this.setState({mode:'Welcome'})}.bind(this)}
//         ></Header>   {/* <Subject /> */}

//         <Body data={this.state.contents}
//           onChangePage={function(id){
//             this.setState(
//               {
//                 mode:'read',
//                 selected_content_id:Number(id)
//               }
//               );
//           }.bind(this)}
//         ></Body>

//         <Footer title={_title} desc={_desc}></Footer>
//       </div>
//     );
//   }
// }
// export default App;

//--------------------------------------------------------------------------------------------------------------------------
// import './App.css';
// import React,{ Component } from 'react';
// import TOC from './components/TOC'
// import Subject from './components/Subject';
// import ReadContent from './components/ReadContent';
// import Control from './components/Control';
// import CreateContent from './components/CreateContent';
// import UpdateContent from './components/UpdateContent';

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.max_content_id = 3;
//     this.state = {
//       mode:'read',
//       selected_content_id:2,
//       subject:{title:'WEB',sub:'World Wid Web'},
//       welcome:{title:'Welcome',desc:'Hello, React!!'},
//       contents:[
//         {id:1, title:'HTML',desc:'HTML is for imformation'},
//         {id:2, title:'CSS', desc:'CSS is for design'},
//         {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
//       ]
//     }
//   }

//   //getReadContent start

//   getReadContent(){
//     let i = 0;
//       while(i < this.state.contents.length) {
//         let data = this.state.contents[i];
//         if(data.id === this.state.selected_content_id) {
//           return data;
//         }
//         i = i + 1;
//       }
//   }

//   //getReadContent end

//   //getContent start
  
//   getContent(){
//     let _title, _desc = null, _article;
//     if(this.state.mode === 'welcome'){
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//       _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
//     }else if(this.state.mode === 'read'){
//       let _content = this.getReadContent();
//       _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
//     }else if(this.state.mode === 'create'){
//       _article = <CreateContent onSubmit={function(_title,_desc){
//         this.max_content_id = this.max_content_id + 1;
//         // this.state.contents.push(
//         //   {id:this.max_content_id,title:_title,desc:_desc}
//         // );

//         // let _contents = this.state.contents.concat(
//         //      {id:this.max_content_id,title:_title,desc:_desc}
//         //  );

//         let _contents = Array.from(this.state.contents);
//         _contents.push({id:this.max_content_id,title:_title,desc:_desc});

//         this.setState({
//           //contents : this.state.contents
//           mode:'read',
//           contents : _contents,
//           selected_content_id:this.max_content_id
//         })
//       }.bind(this)}></CreateContent>
//     }else if(this.state.mode === 'update'){
//       let _content = this.getReadContent();
//       _article = <UpdateContent 
//                     data = {_content} 
//                     onSubmit={function(_id,_title,_desc){
//                       let _contents = Array.from(this.state.contents);
//                       let i = 0;
//                       while(i < _contents.length){
//                         if(_contents[i].id == _id){
//                           _contents[i] = {id:_id,title:_title,desc:_desc};
//                           break;
//                         }
//                         i = i + 1;
//                       }
//                       this.setState({
//                         contents:_contents,
//                         mode:'read'
//                       })
//                     }.bind(this)}>

//                   </UpdateContent>
//     }

//     return _article;
//   }

//   //getContent end

//   render(){
//     console.log('App render');

//     return (
//       <div>
//         <Subject 
//           title={this.state.subject.title} 
//           sub={this.state.subject.sub} 
//           onChangePage={function(){
//             this.setState({mode:'welcome'}) ;
//           }.bind(this)}
//         >
//         </Subject>
//         <TOC data={this.state.contents}
//           onChangePage={function(id){
//             this.setState(
//               {
//                 mode:'read',
//                 selected_content_id:Number(id)
//               }
//             ) ;
//           }.bind(this)}
//         >
//         </TOC>
//         <Control onChangeMode={function(_mode){
//             if(_mode === 'delete') {
//               if(window.confirm('really?')){
//                 let _contents = Array.from(this.state.contents);
//                 let i = 0;
//                 while(i < _contents.length){
//                   if(_contents[i].id === this.state.selected_content_id){
//                     _contents.splice(i,1);
//                     break;
//                   }
//                   i = i + 1;
//                 }
//                 this.setState({
//                   mode:'welcome',
//                   contents:_contents
//                 })
//               }
//             }else{
//               this.setState({
//                 mode:_mode
//               });
//             } 
//           }.bind(this)}></Control>
//         {this.getContent()}
//       </div>
//     );
//   }
// }

// export default App;
//--------------------------------------------------------------------------------------------------------------------------

import './App.css';
import React,{ Component } from 'react';
import TOC from './homepage/TOC'
import Subject from './homepage/Subject';
import ReadContent from './homepage/ReadContent';
import Control from './homepage/Control';
import CreateContent from './homepage/CreateContent';
import UpdateContent from './homepage/UpdateContent';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB',sub:'World Wid Web'},
      welcome:{title:'Welcome',desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for imformation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  //getReadContent start

  getReadContent(){
    let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i = i + 1;
      }
  }

  //getReadContent end

  //getContent start
  
  getContent(){
    let _title, _desc = null, _article;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id:this.max_content_id,title:_title,desc:_desc}
        // );

        // let _contents = this.state.contents.concat(
        //      {id:this.max_content_id,title:_title,desc:_desc}
        //  );

        let _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id,title:_title,desc:_desc});

        this.setState({
          //contents : this.state.contents
          mode:'read',
          contents : _contents,
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article = <UpdateContent 
                    data = {_content} 
                    onSubmit={function(_id,_title,_desc){
                      let _contents = Array.from(this.state.contents);
                      let i = 0;
                      while(i < _contents.length){
                        if(_contents[i].id == _id){
                          _contents[i] = {id:_id,title:_title,desc:_desc};
                          break;
                        }
                        i = i + 1;
                      }
                      this.setState({
                        contents:_contents,
                        mode:'read'
                      })
                    }.bind(this)}>

                  </UpdateContent>
    }

    return _article;
  }

  //getContent end

  render(){
    console.log('App render');

    return (
      <div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(){
            this.setState({mode:'welcome'}) ;
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.contents}
          onChangePage={function(id){
            this.setState(
              {
                mode:'read',
                selected_content_id:Number(id)
              }
            ) ;
          }.bind(this)}
        >
        </TOC>
        <Control onChangeMode={function(_mode){
            if(_mode === 'delete') {
              if(window.confirm('really?')){
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while(i < _contents.length){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode:'welcome',
                  contents:_contents
                })
              }
            }else{
              this.setState({
                mode:_mode
              });
            } 
          }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;


