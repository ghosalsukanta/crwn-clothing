import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';
import {auth, signinWithGoogle} from '../../firebase/firebase.utils';

class SignIN extends React.Component{

    constructor(props){

        super(props);

        this.state={
            email: '',
            password: ''
        }

    }

    handleSubmit = async event =>{
        event.preventDefault();
        
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }
        catch(error){
            console.log(error);
        }

        this.setState({email:'',password:''})
    }

    handleChange = event =>{

        const {value,name} = event.target;

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required/>
                    <FormInput 
                    name='password'
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required/>

                    <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <span>  </span>
                    <CustomButton onClick={signinWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>    
        )
    }



}

export default SignIN;