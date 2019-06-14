import React from 'react'
import '../support/css/Separatorstyle.css'
import WOW from 'wowjs'
class Separator extends React.Component{
    componentDidMount(){
        new WOW.WOW().init()
    }
    render(){
        return(
            <div className="separator-container">
                <div className="container wow slideInUp" data-wow-offset="50">
                    <p>Best Services and Solutions for Customers.</p>
                </div>
            </div>
        )
    }
}

export default Separator