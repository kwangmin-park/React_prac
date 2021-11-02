import react, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히가세요!');

    const [color, setColor] = useState('black'); //분할할당

    return (
        <div>
            {/*
            1.이벤트 이름은 카멜 표기법으로 작성 onclick -> on Click
            2.이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달. 함수명이 아니라 직접 작성할 경우에도 arrow fun 등을 이용하여 작성한다.
            3.DOM 요소에만 이벤트 설정 가능(우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정 불가능하다)
            직접 만든 컴포넌트에 onClick={onClickEnter} 라고 설정하면 clickEvent를 설정한 것이 아니라 이름이 onClick인 props를 전달한다.
            */}
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    );
}

export default Say;