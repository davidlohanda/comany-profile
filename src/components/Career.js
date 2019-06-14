import React from 'react'
import '../support/css/Careerstyle.css'

class Career extends React.Component{
    state={open : false , open2 : false}
    onCareerClick = (num) => {
        num === 1? this.setState({open : !this.state.open}) : this.setState({open2 : !this.state.open2}) 
    }
    render(){
        return(
            <div>
            <div className="career-header">
                <div className="container">
                    <p>Career</p>
                    <hr></hr>
                </div>
            </div>
            <div className="container career-content animated fadeIn">
                <p className="text-header-career">Working at ATS</p>
                <p>We believe that everyone is special and has the capabilities to bring ATS up to higher level. ATS emphasizes in creating an environment where everyone can be inspired which in return will motivate people to work. Join us and create your career here in ATS

                Find the career that you wanted here and send us your resume to atspanel2015@gmail.com</p>
                    <hr className="mt-5 mb-5"></hr>
                    <div className="career-container">
                        <div className={this.state.open?"career-title-on":"career-title"} onClick={() => this.onCareerClick(1)}>
                            Sales Engineer
                        </div>
                        <ul className={this.state.open? 'career-info-on animated fadeIn' : 'career-info-off'}>
                            <li>Job Description:
                                <ul>
                                    <li>Pitching for new client/project opportunity.</li>
                                    <li>Providing product, service, or equipment technical and engineering information.</li>
                                    <li>Establishing new client; planning and organizing sales calls and visits.</li>
                                    <li>Preparing cost estimates.</li>
                                    <li>Advising customer on determining improvements in customer environment.</li>
                                    <li>Develops customer's staff by providing technical information and training.</li>
                                    <li>Preparing sales engineering reports.</li>
                                    <li>Accomplishing target.</li>
                                </ul>
                            </li>
                            <li>Requirements:
                                <ul>
                                    <li>Male / Female.</li>
                                    <li>Diploma / Bachelor Degree (D3 / S1) of Electrical Engineering.</li>
                                    <li>Minimum 2 years in selling product in electrical switchboard or other electrical industry.</li>
                                    <li>Having a good network in electrical switchboard or electrical industry.</li>
                                    <li>Experience in tendering process.</li>
                                    <li>Honest, loyal, having a good analytical thinking, communication, interpersonal skill and hard worker.</li>
                                    <li>Good command of spoken and written English.</li>
                                    <li>Placed in Jakarta Barat.</li>
                                </ul>
                            </li>
                        </ul>
                        {/* ================================================================================================================== */}

                        <div className={this.state.open2?"career-title-on":"career-title"} onClick={()=>this.onCareerClick(2)}>
                            Design Engineer
                        </div>
                        <ul className={this.state.open2? 'career-info-on animated fadeIn' : 'career-info-off'}>
                            <li>Job Description:
                                <ul>
                                    <li>Pitching for new client/project opportunity.</li>
                                    <li>Providing product, service, or equipment technical and engineering information.</li>
                                    <li>Establishing new client; planning and organizing sales calls and visits.</li>
                                    <li>Preparing cost estimates.</li>
                                    <li>Advising customer on determining improvements in customer environment.</li>
                                    <li>Develops customer's staff by providing technical information and training.</li>
                                    <li>Preparing sales engineering reports.</li>
                                    <li>Accomplishing target.</li>
                                </ul>
                            </li>
                            <li>Requirements:
                                <ul>
                                    <li>Male / Female.</li>
                                    <li>Diploma / Bachelor Degree (D3 / S1) of Electrical Engineering.</li>
                                    <li>Minimum 2 years in selling product in electrical switchboard or other electrical industry.</li>
                                    <li>Having a good network in electrical switchboard or electrical industry.</li>
                                    <li>Experience in tendering process.</li>
                                    <li>Honest, loyal, having a good analytical thinking, communication, interpersonal skill and hard worker.</li>
                                    <li>Good command of spoken and written English.</li>
                                    <li>Placed in Jakarta Barat.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        )
    }
}

export default Career