import React,{ Component } from "react";

// 클래스 이름이 같아도 모듈 자체가 다르면 상관이 없다!
class Subject extends Component{
    render() {
        console.log('Control render');

        return (
            <ul>
                <li>회원가입 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                    <a
                        href="/create"
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangeMode('create')
                            }.bind(this)
                        }
                    >회원가입</a>
                </li>
                <li>책 수정하기 :&nbsp;
                    <a
                        href="/update"
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangeMode('update')
                            }.bind(this)
                        }
                    >수정하기</a>
                </li>
                <li>책 삭제하기 :&nbsp;
                    <input
                        type="button" value="delete"
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangeMode('delete')
                            }.bind(this)
                        }
                    ></input>
                </li>
            </ul>
        );
    }
}

export default Subject;