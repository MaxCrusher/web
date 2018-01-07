import React, { Component } from 'react';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';

const Content =()=>({
    render(){
        return(
            <Link to = "./teacher">
            <span>go to teacher</span>
           </Link>
        );
    }
       

    
});

export default Content;