import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import NavBar from '../../components/navbar-component/NavBar';
import Newsletter from '../../components/Newsletter';
import Footer from "../../components/Footer";

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div >
        <NavBar/>
        <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
        </div>       
        <Newsletter />
        <Footer/>
    </div>
); 

export default SignInAndSignUp;