import React from 'react'
import {Button} from 'antd';
const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <Button type="primary">Button</Button>
                </a>
            </div>
        </nav>
    </header>
)

export default Header