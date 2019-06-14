import React from 'react'
import '../support/css/Header1style.css'

class Header1 extends React.Component{
    render(){
        return(
            <div className="header1-container">
                <p className="header1-info"><i class="fas fa-phone"></i>&nbsp;&nbsp;021-22028999&nbsp;&nbsp;|&nbsp;&nbsp;<i class="fas fa-envelope"></i>&nbsp;&nbsp;<span>atspanel2015@gmail.com</span></p>
                <div className="h1-social">
                    <span><i class="fab fa-facebook-f"></i></span>
                    <span><i class="fab fa-instagram"></i></span>
                    <span><i class="fab fa-linkedin-in"></i></span>
                    <span><i class="fab fa-google"></i></span>
                </div>
            </div>
        )
    }
}

export default Header1