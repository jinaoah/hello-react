import React, { Component } from "react";

class RefSample extends Component {
    input = React.createRef();
    //멤버변수로 React.createRef()에 의해 ref 생성
    handleFocus = () => {
        this.input.current.focus();
    };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}