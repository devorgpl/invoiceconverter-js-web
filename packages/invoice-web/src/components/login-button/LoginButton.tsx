import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithGoogle, auth } from '../../libs/firebase';

function LoginButton(): React.ReactElement {
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        }, [user, loading]);

    return (
      <div className="App">
        <button type="button" title="Login" onClick={signInWithGoogle}>
          test
        </button>
      </div>
    );
}

export default LoginButton;
