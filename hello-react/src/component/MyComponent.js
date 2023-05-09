import PropTypes from "prop-types"

const MyComponent = ({name, favoriateNum ,children}) => {
    return (
        <div>나의 새롭고 멋진 컴포넌트<br/>
            내 이름은 {name}, children값 : {children}이야<br></br>
            가장 좋아하는 숫자 : {favoriateNum}
        </div>
    );
};

MyComponent.defaultProps =  {
    name : "기본이름",
}
  MyComponent.propTypes = {
    name: PropTypes.string,
    favoriateNum: PropTypes.number.isRequired
}

export default MyComponent;