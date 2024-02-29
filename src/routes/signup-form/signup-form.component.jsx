import './signup-form.styles.scss';
import Button from '../../components/button/button.component'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GreenBackground from '../../assets/values-bg.png';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils';
import { setCurrentUser } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';
const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const defaultFormFields = {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {username, email, password, confirm_password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const signUpWithGoogle = async () => {
        const auth = await signInWithGooglePopUp();
        if (!auth) {
            return;
        }
        dispatch(setCurrentUser(auth.currentUser.email));
        resetFormFields();
        navigate('/');
        return
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirm_password) {
            alert('Passwords do not match.');
            return;
        }        
    
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {username});
            console.log("creat auth")
            resetFormFields();            
            navigate('/signin');
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('ERROR: User creation encountered an error', error);
            }
        }
    };
    return(
        <div className='signup-form-wrapper-container'>
            <div className ='signup-form-container'>
                <div className = 'signup-input-container'>
                    <h1>Register</h1>
                    <span className='signup-description'>Sign up with your email and password</span>
                    <div className = 'line'></div>
                    <form onSubmit={handleSubmit}>
                        <label className='form-label' for='username'>Name</label>
                        <input type='text' name='username' value={username} onChange={handleChange} required/>
                        <label for='email'>Email</label>
                        <input type='email' name='email' value={email} onChange={handleChange} required/>
                        <label for='password'>Password</label>
                        <input type='password' name='password' value={password} onChange={handleChange} required/>
                        <label for='confirm_password'>Confirm Password</label>
                        <input type='password' name='confirm_password' value={confirm_password} onChange={handleChange} required/>
                        <Button type='submit'>Sign Up</Button>
                    </form>
                    <div className= 'divider'> 
                        <div className = 'line'></div>
                        <span>or</span>
                        <div className = 'line'></div>
                    </div>
                    <span className='signup-description'>Sign up with your Google account</span>
                    <div onClick = {signUpWithGoogle}>
                        <Button type='button' style='google_button' onClick={signInWithGooglePopUp}>Sign up with Google</Button>
                    </div>
                    <Link className='signin-link' to='/signin'>Already have an account? Sign in</Link>

                </div>
   
                
                

            </div>
        </div>
    )
}

export default SignUpForm;