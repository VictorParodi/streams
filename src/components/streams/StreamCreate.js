import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({input, label, meta}) {
        console.log(meta);
        return (
            <div className="field">
                <label>{label}</label>
                <input  {...input} />
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formFieldsValues) {
        console.log(formFieldsValues);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui primary button">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    let error = {};

    if (!formValues.title) {
        error.title = 'A title is needed';
    }

    if (!formValues.description) {
        error.description = 'A description is needed';
    }

    return error;
}

export default reduxForm({
    form: 'StreamCreate',
    validate: validate
})(StreamCreate);