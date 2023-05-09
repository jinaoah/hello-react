import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false,
    };

    handleChange = (e) => {
        this.setState({ //render 호출(화면을 다시 그림)
            password: e.target.value,
        });
    };
    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
            //handleChange 함수에서 password에 "0000" 저장
        });
    };
    render() {
        return (
            <div>
                <input 
                type="password" 
                value={this.state.password === "0000"}
                onChange={this.handleChange}
                className={
                    this.state.clicked ?
                    this.state.validated ?
                    "success": "failure" : ""
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;