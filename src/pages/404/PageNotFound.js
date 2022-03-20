import React from 'react';

import backgroundImg from './../../static/404error.gif';
import { useNavigate } from "react-router-dom";
import { Frame } from './styles';

function PageNotFound(props) {

    let navigate = useNavigate()

    function onSignInHandler(e) {
        e.preventDefault();
        navigate('/dashboard') /* If I want to go back to the lo */
    }

    return (
        <>
            <div style={{ background: `url(${backgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', alignItems: 'center' }} >

                <Frame style={{ margin: '0 auto', position: 'relative', top: '-40%', right: '-9%' }}>
                    <form onSubmit={onSignInHandler} >
                        <div className='loginButton'>
                            <button style={{ position: 'absolute', top: '1rem', right: '2rem' }} type="submit">Back Home !</button>
                        </div>
                    </form>
                </Frame>

            </div>


        </>
    )
}


export default PageNotFound