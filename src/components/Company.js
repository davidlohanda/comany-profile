import React from 'react'
import '../support/css/Companystyle.css'


class Company extends React.Component{
    render(){
        return(
            <div>
                <div className="company-header">
                    <div className="container">
                        <p>Our Company</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="container company-content animated fadeIn">
                    <p className="text-header-company">Who we are?</p>
                    <p className="text">PT. Anugerah Teknik Sejahtera  (ATS) was estabilished on 20 May 2015.   ATS is led by a person who has a strong spirit and a willingness to take part in the existing development in Indonesia. 

                        Quality and Customer Satiisfaction is an our priority. Skill and competency be attention  for all employees, and continued  to work together in improving the knowledge and abilities according to their respective fields.

                        PT. ANUGRAH TEKNIK SEJAHTERA can be the right choice for those who require electrical panels and installation work for Projectt : Industry, Oil & Gas, Power Plant,  High Rise Building, Hotel, Hospital, Office, Apartement, Campus/School , Residences, Etc.</p>

                        <hr className="mt-5 mb-5"></hr>
                        <p  className="text"><span>Vision : </span>  To Become The Leading Company Electrical Panel in Indonesia</p>

                        <p  className="text"><span>Mission : </span> 
                        <ul>

                        <li>Best Service to Customer</li>

                        <li>Be a Responsible and Professional Team</li>                                                           

                        <li>Continuous Improvement in Quality and Service</li>
                        </ul>
                        </p>
                        

                        <p  className="text"><span>Motto  : </span>  "Best Service and Solution for Customer"</p>
                </div>
            </div>
        )
    }
}

export default Company