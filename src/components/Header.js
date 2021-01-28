import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-default shadow" style={{ backgroundColor: "#E501A2", padding: "18px auto" }}>
                <a className="navbar-brand text-white" href="#" style={{ fontSize: "20px" }}>Paramafashion.com</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
