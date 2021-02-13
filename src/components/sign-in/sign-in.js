import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import {signInWithGoogle}  from "../../firebase/firebase.utils";
import './sign-in.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({ [name]: value });
        console.log(value);
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        label="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGooleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;