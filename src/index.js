import React, {Component} from 'react';
import {render} from 'react-dom';
//components
import ChatEnviroment from './components/ChatEnviroment';


class App extends Component{
    render(){
        return(
            <div>
                
                <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand text-white"> Chat react</a>
                </nav>
                <div className="container p-5" >                    
                    <div className="row">                   
                        <div className="col-md-6 offset-md-3">                                             
                       
                         
                          <ChatEnviroment/>
                        </div>
                    </div>                
                </div>               
            </div>
        )
    }
}

render(
<App/>,
document.getElementById('app')
);
    
