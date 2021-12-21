import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';


export default function(SpecificComponent, option, adminRoute = null) {
    /* option
        null => A page that anyone can enter
        True => Page that only logged in users can enter.
        false => The page where the logged-in user is not allowed to enter.
    */

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        let navigate = useNavigate();

        useEffect(() => {
            dispatch(auth())
            .then(response => {
                // not logged in
                if(!response.payload.isAuth) {
                    if(option) {
                        navigate('/login');
                    }
                } else {
                    // logged in
                    if(adminRoute && !response.payload.isAdmin) {
                        navigate('/');
                    } else {
                        if(option === false) {
                            navigate('/');
                        }
                    }
                }

            });
        }, []);

        return (
            <SpecificComponent />
        );
    }

    return <AuthenticationCheck />;
}