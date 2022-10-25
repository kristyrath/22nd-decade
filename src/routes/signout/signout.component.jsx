import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const SignOut = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(setCurrentUser(null));
    signOutUser();
    useEffect(() => {
        navigate('/');
    }, []); 
}

export default SignOut;