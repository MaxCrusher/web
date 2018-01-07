import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react'
import MainPage from './mainPage';
import ChoosingDocumT from './DocumT';
import ChoosingDocumS from './DocumS';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';


/*const items = [
    { key: 'logo', onItemClick:{this.newState1}, name: 'DOCUMENTATION' },
    { key: 'student', onItemClick:{this.newState2} ,name: 'Студенту' },
    { key: 'teacher', onItemClick:{this.newState3}, name: 'Преподавателю' },
  ]*/

export default class MyHeader extends React.Component{

    constructor (props){
        super (props);
        this.newState1=this.newState1.bind(this);
        this.newState2=this.newState2.bind(this);
        this.newState3=this.newState3.bind(this);
        this.state = {selected : 0};
    }

    newState1(){
        this.setState({selected:1})
    }

    newState2(){
        this.setState({selected:2})
    }

    newState3(){
        this.setState({selected:3})
    }

    render(){

        let component = null;
        if (this.state ===1){
            component = <MainPage/>
        }
        else{
            if (this.state.selected ===2)
            component = <ChoosingDocumS/>
            else{
                if (this.state.selected ===3)
                {
                    component = <ChoosingDocumT/>
                }
            }
        }
    

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