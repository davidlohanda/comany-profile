import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Header1 from './components/Header1';
import Home from './components/Home'
import Company from './components/Company'
import Career from './components/Career'
import Contact from './components/Contact'
import ProductServices from './components/ProductServices'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'
import PageNotFound from './components/PageNotFound'
import Header3 from './components/Header3';

class App extends React.Component{
  render(){
    return(
        <div style={{height:'100%'}}>
        <div style={{margin:'0 auto', boxShadow:'-0.5px -0.5px 5px 8px #f4f4f4'}}>
        <ScrollToTop>
          <Header1/>
          <Header3/>
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/ourproduct" component={ProductServices} exact/>
            <Route path="/ourcompany" component={Company} exact/>
            <Route path="/contactus" component={Contact} exact/>
            <Route path="/career" component={Career} exact/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
          <Footer/>
        </ScrollToTop>
        </div>
        </div>
    )
  }
}

export default withRouter(App)



