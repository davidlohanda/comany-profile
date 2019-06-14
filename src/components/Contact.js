import React from 'react'
import '../support/css/Contactstyle.css'
import axios from 'axios'
import swal from 'sweetalert'
import Loader from 'react-loader-spinner'

class Contact extends React.Component{
    state = {error : '', loading : false}

    renderButtonOrLoading = () => {
        if(this.state.loading){
            return <div className="mt-4"><Loader type="TailSpin" color="#192a56" height={30} width={30}/></div>
        }else{
            return <button onClick={this.sendMessage}>Send Message</button>
        }
    }
    sendMessage = () => {
        if(this.refs.name.value && this.refs.email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && this.refs.subject.value && this.refs.message.value){
            this.setState({loading : true})
            const data = {
                name : this.refs.name.value,
                email : this.refs.email.value,
                subject : this.refs.subject.value,
                message : this.refs.message.value
            }
            axios.post('http://localhost:4000/sendClientMail' , data)
            .then((res) => {
                this.setState({error : ''})
                this.refs.name.value = ''
                this.refs.email.value = ''
                this.refs.subject.value = ''
                this.refs.message.value = ''
                this.setState({loading : false})
                swal("OK","We will contact you soon, for fast respond please directly call us","success")
            })
            .catch((err) => console.log(err))
            
        }else{
            this.setState({error : 'Please fill all the requirement and check your email format!'})
        }
    }
    render(){
        return(
            <div className="main-contact-container">
                <div className="contact-header">
                    <div className="container">
                        <p>Contact Us</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="container contact-content animated fadeIn">
                    <div className="contact-content-1">
                        <p className="text-header-contact">Enquiry</p>
                        <div className="contact-form">
                            <label>Name :</label>
                            <input type="text" ref="name"></input>
                            
                            <label>Email :</label>
                            <input type="text" ref="email"></input>

                            <label>Subject :</label>
                            <input type="text" ref="subject"></input>

                            <label>Message :</label>
                            <textarea rows="7" ref="message"></textarea>
                            {this.renderButtonOrLoading()}
                        </div>
                        {this.state.error?<p style={{color : 'red'}}>{this.state.error}</p> : null}
                    </div>
                    <div className="contact-content-2">
                        <div className="address">
                            <p>Head Office</p>
                            <p className="info">Kawasan Pergudangan & Industri Tunas Bitung Blok A2 No. 15, Pasir Jaya, Cikupa, Tangerang, Banten 15710</p>
                            <p className="info">Telephones : 021-22028999</p>
                            <p className="info">Email : ats2015@gmail.com</p>
                        </div>
                        <div>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d
                        31730.304832342106!2d106.5213257!3d-6.225693!3m2!1i1024!2i768!
                        4f13.1!3m3!1m2!1s0x0%3A0xeb89eea1f2ba43f2!2sPT.+ANUGRA
                        H+TEKNIK+SEJAHTERA+(Panel+Listrik)!5e0!3m2!1sen!2sid!4v1560416755657!5m2!
                        1sen!2sid" style={{width:"400px" ,height:"185px" ,frameborder:"0", border:0}} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact