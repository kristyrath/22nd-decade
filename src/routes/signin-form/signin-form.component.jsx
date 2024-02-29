import './signin-form.styles.scss';
import Button from '../../components/button/button.component'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {signInWithGooglePopUp, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import {setCurrentUser} from '../../store/user/user.action';
import GreenBackground from '../../assets/values-bg.png';

const SignInForm = () => { 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const defaultFormFields = {
        email: '',
        password: ''
    };



    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            dispatch(setCurrentUser(email));
            resetFormFields();
            navigate('/');
        } catch(error) {
            console.log('ERROR: user sign in failed', error);
        }
    };    
    const signInWithGoogle = async (email) => {
        const auth = await signInWithGooglePopUp(); 
        if (!auth.currentUser) {
            console.log("NO AUTH");
            return;
        }
        console.log("email", auth.currentUser.email);

        dispatch(setCurrentUser(auth.currentUser.email));
        resetFormFields();
        navigate('/');
        return;
    }
    return (
        <div className='signin-form-wrapper-container'>
            <div className ='signin-form-container'>
            <div className = 'signin-input-container'>
                <h1>Sign In</h1>
                <span className='signin-description'>Sign in with your email and password</span>
                <div className = 'line'></div>
                <form onSubmit = {handleSubmit}>
                    <label className='input-label' for='email'>Email</label>
                    <input type='email' name='email' value={email} required onChange={handleChange}/>
                <label className='input-label' for='password'>Password</label>
                    <input type='password' name='password' value={password} required onChange={handleChange}/>

                    <Button type = 'submit'>Sign in</Button>
                </form>

                <div className= 'divider'> 
                    <div className = 'line'></div>
                    <span>or</span>
                    <div className = 'line'></div>
                </div>
                <span className='signin-description'>Sign in with your Google account</span>
                <div onClick = {signInWithGoogle}>
                    <Button type='button' style='google_button'>Sign in with Google</Button>
                </div>            
                <Link className='signup-link' to='/signup'>Don't have an account? Sign up</Link>

            </div>
            
            

             </div>    
        </div>
        

    );
}
export default SignInForm;