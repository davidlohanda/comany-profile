import React from 'react'
import '../support/css/Header3style.css'
import logo from '../support/img/logo.png'
import {Link} from 'react-router-dom'

class Header3 extends React.Component{
    render(){
        return(
            <div className="header3-container text-center">
                <Link to="/"><img src={logo} alt="" className="logo-pict"/></Link>
            </div>
        )
    }
}

export default Header3