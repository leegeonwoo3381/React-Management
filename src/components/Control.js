import React,{ Component } from "react";

// 클래스 이름이 같아도 모듈 자체가 다르면 상관이 없다!
class Subject extends Component{
    render() {
        console.log('Control render');

        return (
            <ul>
                <li>
                    <a
                        href="/create"
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangeMode('create')
                            }.bind(this)
                        }
                    >create</a>
                </li>
                <li>
                    <a
                        href="/update"
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangeMode('update')
                            }.bind(this)
                        }
                    >update</a>
                </li>
                <li>
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