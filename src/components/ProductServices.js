import React from 'react'
import '../support/css/ProductServicesstyle.css'
import panel from '../support/img/el.jpeg'


class ProductServices extends React.Component{
    render(){
        return(
            <div>
                <div className="ps-header">
                    <div className="container">
                        <p>Product & Services</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="container ps-content animated fadeIn">
                    <p className="text-header-ps">Switchboard</p>
                    <p>Anugerah Teknik Sejahtera (ATS) gives answer for the need of high quality switchboard to regulate the flow of electricity safely within a building. Our highly experienced technicians provide neat power distribution installation. They will be ready to serve should there be any problems. Our portfolio cover projects from government agencies to private companies. Our switchboard has many advantages such as:</p>
                    <ul>
                        <li>It is compact-sized and easy to operate</li>
                        <li>You can choose the components by your own preferences</li>
                        <li>It is made up of sectional compartments and bolt assembled structure</li>
                        <li>Future extension and maintenance are easy to do</li>
                    </ul>
                    <hr className="mt-5 mb-5"></hr>
                    <p className="text-header-ps">Services</p>
                    <div className="ps-content-2">
                        <p>ATS staffs and technicians have years of experience installing panel at various types of building. Our quality of work is based on the standards and regulations that are implemented by both government agencies and international organization for standardization. Therefore we guarantee a safe and reliable electric power distribution system for buildings. We offer a comprehensive range of service, installation, training, maintenance, repair, and design consultation.

                        ATS uses components from global brands such as Schneider, ABB, Siemens, and GE. We use high quality tools and equipment to ensure the high quality installation. We also provide the best after sales service because we fully prioritize customer satisfaction. We have a team of highly experienced engineers and service technicians who are ready to assist customers with all kind of switchboard related works. Simetri provides 24 hours standby full time service. Simetri switchboards are warranted for 1 year free of workmanship defect. Should there be any questions or issues, you can contact our company representatives through the contact page.</p>
                        <img src={panel} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductServices