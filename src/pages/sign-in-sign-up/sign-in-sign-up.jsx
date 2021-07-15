import React from 'react';
import './sign-in-sign-up.scss';

import SignIN from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInSignUp =()=>(
    <div className='sign-in-and-sign-up'>
        <SignIN/>
        <SignUp/>
    </div>
)

export default SignInSignUp;