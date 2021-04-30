import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Preloader/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}
                       type={"password"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Remember me
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth

})
const mapDispatchToProps = {
    login,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);