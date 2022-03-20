import React from 'react';

import { AppBar } from '../../components/appbar'
import { Panels } from '../../components/panels'
import { SideBar } from '../../components/sidebar'

/* import { Link } from "react-router-dom" */


function DashBoardPage(props) {
    return (
        <>
            {/* <ul>
                <h1 style={{color:'red'}}>DASHBOARD PAGRE</h1>
                <li>
                    <Link to="/">sign out</Link>
                </li>

                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul> */}

            <AppBar />
            <div style={{ display: "flex"}}>
                <SideBar />
                <Panels />
            </div>
        </>
    );
}

export default DashBoardPage;


