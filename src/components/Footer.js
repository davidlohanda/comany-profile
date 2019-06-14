import React from 'react'
import '../support/css/Footerstyle.css'


class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer-content">
                    <div className="mr-4">
                        <p className="footer-content1-title">Head Office</p>
                        <p className="footer-content1-value">Address : Kawasan Pergudangan & Industri Tunas Bitung Blok A2 No. 15, Pasir Jaya, Cikupa, Tangerang, Banten 15710</p>
                        <p className="footer-content1-value">Telephones : 021-22028999</p>
                        <p className="footer-content1-value">Email : atspanel2015@gmail.com</p>
                    </div>
                    <div>
                        <p className="footer-content2-title">Factory</p>
                        <p className="footer-content1-value">Address : Kawasan Pergudangan & Industri Tunas Bitung Blok A2 No. 15, Pasir Jaya, Cikupa, Tangerang, Banten 15710</p>
                        <p className="footer-content1-value">Telephones : 021-22028999</p>
                        <p className="footer-content1-value">Email : atspanel2015@gmail.com</p>
                    </div>
                </div>
                <hr color="#fff" width="90%" style={{marginTop:'50px'}}></hr>
                <div className="social-media container">
                    <span><i class="fab fa-facebook-f"></i></span>
                    <span><i class="fab fa-instagram"></i></span>
                    <span><i class="fab fa-linkedin-in"></i></span>
                    <span><i class="fab fa-google"></i></span>
                </div>
            </div>
        )
    }
}

export default Footer