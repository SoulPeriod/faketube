import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">
                    <img
                    src="https://i.pinimg.com/originals/62/60/ef/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                    alt="Youtube logo"
                    style={{height:"100px", width:"100px"}}
                    />
                </Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

