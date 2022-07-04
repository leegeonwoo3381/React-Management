import React,{ Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.data.id,
            title : this.props.data.title,
            desc:this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
      this.setState({[e.target.name]:e.target.value});

    }
    render() {
      console.log('UpdateContent render');
      return (
        <article>
            <h2>수정하기</h2>
            <form 
                action="/create_process" 
                method="post" 
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(this.state.id,this.state.title,this.state.desc);
                }.bind(this)}
            >
                <input type='hidden' name='id' value={this.state.id}></input>
                <p>수정할 과목 : <input 
                    type="text" 
                    name="title" 
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.inputFormHandler}
                ></input>
                </p>
                <p>수정할 내용 : <textarea 
                    name='desc' 
                    placeholder='description' 
                    value={this.state.desc}
                    onChange={this.inputFormHandler}
                ></textarea></p>
                <input type='submit' value='확인'></input>&nbsp;&nbsp;<input type='reset' value='취소'></input>
            </form>
        </article>
      );
    }
  }

  export default UpdateContent;