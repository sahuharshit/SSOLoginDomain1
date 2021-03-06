import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    const {user, isAuthenticated, isLoading} = useAuth0();
    return !isAuthenticated && <>
    <br/><br/><br/>
      <button onClick={
        () => loginWithRedirect()
    } style={{padding: 20, display:'flex', justifyContent:'center', margin:'auto'}}>Log In</button>
      </>
};

export default LoginButton;
