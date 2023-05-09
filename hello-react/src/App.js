//App.js
import { Component, useEffect, useRef, useState } from "react";

//랜더링 : 컴포넌트가 현재 props와 state의 상태에 기초해 UI를 어떻게 구성할지, 컴포넌트에게 작업을 요청하는 것
const App = () => {
  //HTML에서 id로 DOM 요소에 접근하는 것처럼, React에서도 DOM 요소에 직접 접근하기 위해 사용하는 것 : Ref
  const inputRef = useRef();

  useEffect( () => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  
  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}!`);
    inputRef.current.value = ""; //input 요소의 ref가 ""로 저장된다.
    inputRef.current.focus(); //커서의..이동..
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username"></input>
      <button onClick={login}>로그인</button>
    </div>
  );
};
export default App;