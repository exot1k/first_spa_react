import React from "react";
import styles from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import {fieldValidatorType} from "../../../Utils/Validators/Validators";


/*const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <element {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {

}*/

export const Input:React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}



export function createField<formKeysType extends string>(placeholder:string,
                            name:formKeysType,
                            validators:Array<fieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = "")  {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}/> {text}
    </div>
}