import React, {Component} from 'react';

class EventPractice extends Component{

    state = {
        username: '',
        message: ''
    }

    constructor(props) {
        super(props);
        //this는 호출부에 의해서 결정된다.
        //임의 메소드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서 메서드를 this와 바인딩하는 작업이 필요하다.
        //바인딩하지 않을 경우 this 는 undefined
        this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        //e.target.name을 활용하여 변하는 input 객체에 따른 state 변화를 줄 수 있다.
        //이때 message:e.target.value -> [e.target.name]: e.target.value로 변경되었다.
        //key를 []로 감쌓아야 함에 유의하자. [key] == key가 가지고 있는 값
        //key = 'aa'일때 [key] : 'value' == 'aa':'value'
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // handleClick(e){
    //     alert(this.state.message);
    //     this.setState({
    //         message:''
    //     });
    // }


    //이렇게 함수형으로 선언함으로써 메서드가 추가되더라도 constructor 수정을 피할 수 있다.
    handleClick = () => {
        alert(this.state.username+': '+this.state.message);
        this.setState({
            username: '',
            message:''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;