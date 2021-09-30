import {Field, Form, Formik} from "formik";
import {FilterType} from "../../Redux/UserReducer";
import React from "react";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type propsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: React.FC<propsType> = React.memo((props) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false);
    }

    return <div>
        <Formik
            initialValues={{term: '', friend: null}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" component="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>

                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})