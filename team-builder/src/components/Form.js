import '../App.css';
import React from 'react';

export default function Form(props) {
    const { update, submit, values } = props;

    function onChange(evt) {
        const { name, value } = evt.target;
        update(name, value);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                />
            </label>
            <label>
                email:
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                />
            </label>
            <label>
                Role:
                <select value={values.role} onChange={onChange} name='role'>
                    <option value=''>-- Select a Role --</option>
                    <option value='Project Manager'>Project Manager</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Architect'>Architect</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}