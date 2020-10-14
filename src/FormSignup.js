import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import './Form.css'
function FormSignup() {

    const {handleChange,values,handleSubmit,errors} = useForm(validate); 

    return (
        <div>
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Get started with us today! Create your account by filling out the information below.</h1>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input id="username" type="text" name='username' className="form-input" value={values.username} onChange={handleChange} placeholder="Enter your username"/>
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input id="email" type="email" name='email' className="form-input"  value={values.email} onChange={handleChange} placeholder="Enter your email"/>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">
                        Password
                        </label>
                        <input id="password" type="password" name='password' className="form-input"  value={values.password} onChange={handleChange} placeholder="Enter your password"/>
                        {errors.password && <p>{errors.password}</p>}

                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password2" className="form-label">
                            Confrim Password
                        </label>
                        <input id="password2" type="password" name='password2' className="form-input"  value={values.password2} onChange={handleChange} placeholder="Enter your password2"/>
                        {errors.password2 && <p>{errors.password2}</p>}

                    </div>
                    <button className="form-input-ntn" type="submit">Sign up</button>
                    <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
                </form>
            </div>
        </div>
    )
}

export default FormSignup
