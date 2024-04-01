import propTypes from 'prop-types';
import {
    Link
} from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={props.style}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.style.color}`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon text-${props.style.color}`}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link   text-${props.style.color}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  text-${props.style.color}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" checked={props.mode} role="switch" id="flexSwitchCheckChecked" onChange={props.toggleMode} />
                        <label>Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'My App'
}