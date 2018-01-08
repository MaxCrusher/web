import React from 'react';
import {Menu} from 'semantic-ui-react'

import {Link} from 'react-router-dom';

export default class MyHeader extends React.Component{


    render(){


        return(
            
            <div className = "myHeader">
                <Menu >
                    <Link to = "/">
                        <Menu.Item name = "DocumentationApp"  />
                    </Link>
                    
                    <Link to = "/student">
                        <Menu.Item name = "Студенту"  />
                    </Link>

                    <Link to = "/teacher">
                        <Menu.Item name = "Преподавателю"   />
                    </Link>
                   
                </Menu>
            </div>
           
        );
    }

}