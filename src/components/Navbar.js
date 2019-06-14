import React from 'react'
import {NavLink} from 'react-router-dom'
import '../support/css/Navbarstyle.css'

class Navbar extends React.Component{
    state={scrolled : false, isOpen : false}
    componentDidMount(){
        window.addEventListener('scroll' , () => {
            const isTop = window.scrollY < 120
            if(isTop !== true){
                this.setState({scrolled : true})
            }else{
                this.setState({scrolled : false})
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    render(){
        return(
            <div className={this.state.scrolled?'navbar-container-scroll text-center' : 'navbar-container text-center'}>
                <nav>
                    <input type="checkbox" id="nav" className="hidden" ref="check" onClick={()=>this.setState({isOpen : !this.state.isOpen})} checked={this.state.isOpen}/>
                    <label for="nav" className="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                    </label>
                    {
                        window.screenX === '900px'?
                        <div className="nav-wrapper" style={{display : this.state.isOpen === false? 'none' : null}}>
                            <ul>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover animated">Home</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/ourproduct" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Product & Service</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/ourcompany" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Company</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/career" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Career</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/contactus" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Contact Us</NavLink></li>
                            </ul>
                        </div> 
                        :
                        <div className="nav-wrapper">
                            <ul>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Home</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/ourproduct" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Product & Service</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/ourcompany" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Company</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/career" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Career</NavLink></li>
                                <li><NavLink onClick={() => this.setState({isOpen : false})} exact to="/contactus" activeClassName="link-active" style={{textDecoration:'none'} } className="text-hover">Contact Us</NavLink></li>
                            </ul>
                        </div>
                }
                </nav>
            </div>
        )
    }
}

export default Navbar