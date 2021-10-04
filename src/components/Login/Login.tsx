import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/Validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'
import {appStateType} from "../../Redux/ReduxStore";

type loginFormOwnProps = {
    captchaUrl: string | null
}
export type loginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type loginFormValuesTypeKeys = keyof loginFormValuesType

const LoginForm: React.FC<InjectedFormProps<loginFormValuesType, loginFormOwnProps> & loginFormOwnProps> = (props) => {

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
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&
            createField<loginFormValuesTypeKeys>("Symbols from image", "captcha", [requiredField], Input)}
            <div>
                <button> Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<loginFormValuesType, loginFormOwnProps>({form: "login"})(LoginForm);

export const Login: React.FC = () => {

    const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)
    const dispatch = useDispatch();

    const onSubmit = (formData: loginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
}


