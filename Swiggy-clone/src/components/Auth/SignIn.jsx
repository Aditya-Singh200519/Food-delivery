import React, { useEffect } from 'react';

const SignInButton = () => {
    useEffect(() => {
        // Load the external script
        const script = document.createElement('script');
        script.src = "https://www.phone.email/sign_in_button_v1.js";
        script.async = true;
        document.querySelector('.pe_signin_button').appendChild(script);

        // Define the listener function
        window.phoneEmailListener = async function(userObj) {
            const user_json_url = userObj.user_json_url;
            // Insert the debug message
            try {
                const response = await fetch('http://localhost:4000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_json_url }),
                });
        
                const data = await response.json();
        
                if (data.success) {
                    alert('Authentication successful!');
                    console.log( data.token); // Save JWT token
                } else {
                    alert('Authentication failed: ' + data.message);
                }
            } catch (error) {
                console.error('Error during authentication:', error);

            }
        };

        return () => {
            // Cleanup the listener function when the component unmounts
            window.phoneEmailListener = null;
        };
    }, []);

    return (
        <div className="pe_signin_button" data-client-id="13823986951097834119"></div>
    );
};

export default SignInButton;