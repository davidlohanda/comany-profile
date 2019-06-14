import React from 'react'
import Bigetron from './Bigetron';
import Separator from './Separator';
import HomeContents from './HomeContents';
import ForWhat from './ForWhat';

class Home extends React.Component{    
    render(){
        return(
            <div>
                <Bigetron/>
                <ForWhat/>
                <Separator/>
                <HomeContents/>
            </div>
        )
    }
}

export default Home