import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'
import {appStateType} from "../../Redux/ReduxStore";

type loginFormOwnProps = {
    captchaUrl:string | null
}
const LoginForm:React.FC<InjectedFormProps<loginFormValuesType,loginFormOwnProps> & loginFormOwnProps> = (props) => {

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
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            { props.captchaUrl && <img src={props.captchaUrl} />}
            { props.captchaUrl &&
            createField<loginFormValuesTypeKeys>("Symbols from image", "captcha", [requiredField], Input) }
            <div>
                <button> Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<loginFormValuesType,loginFormOwnProps>({form: "login"})(LoginForm);

type mapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type mapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha: string) => void
}




export type loginFormValuesType = {
    email:string
    password:string
    rememberMe:boolean
    captcha: string
}

type loginFormValuesTypeKeys=  keyof loginFormValuesType

const Login: React.FC<mapStatePropsType & mapDispatchPropsType> = (props) => {

    const onSubmit = (formData: loginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
}

const mapStateToProps = (state: appStateType):{ isAuth: boolean; captchaUrl: null | string } => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth

})
const mapDispatchToProps = {
    login,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);