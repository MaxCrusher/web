import React, { Component } from 'react';


export default class MyFooter extends React.Component{

    render (){
        return(
            <footer>
                <div className = "myFooter">
                    <hr width = "50%"/>
                    <p className = 'p'>кафедра ПМиФИ</p>
                    <p className = 'p'>pmfi.omgtu.ru</p>
                </div>
            </footer>
        );
    }
}

