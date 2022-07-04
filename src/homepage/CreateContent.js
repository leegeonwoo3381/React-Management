import React,{ Component } from 'react';

class CreateContent extends Component {
    render() {
      console.log('CreateContent render');
      return (
        <article>
          <h2>회원가입</h2>
            <form
              action="/create_process"
              method="post"
              onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(e.target.title.value,e.target.desc.value);
                // alert('Submit');
              }.bind(this)}
            >
              <p>이름 : <input type='text' name='title' placeholder='이름'></input></p>
              <p>아이디 : <input type='text' name='title1' placeholder='아이디'></input></p>
              <p>비밀번호 : <input type='password' name='password' placeholder='비밀번호'></input></p>
              <p>자기소개<br/><br/><textarea name='desc' placeholder='자기소개'></textarea></p>
              <input type='submit' value='가입'></input>&nbsp;&nbsp;<input type='reset' value='취소'></input>
            </form>
        </article>
      );
    }
  }

  export default CreateContent;