import React, {Component} from 'react'

import {Grid, GridRow, GridColumn, Table, Checkbox} from 'semantic-ui-react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

const tituls = 
    [
        {id: 0, name: "titul_1", course: "1", typeOfWork: "type_1"},
        {id: 1, name: "titul_2", course: "3", typeOfWork: "type_2"},
        {id: 2, name: "titul_3", course: "2", typeOfWork: "type_2"},
        {id: 3, name: "titul_4", course: "3", typeOfWork: "type_3"},
        {id: 4, name: "titul_5", course: "2", typeOfWork: "type_1"},
        {id: 5, name: "titul_6", course: "4", typeOfWork: "type_4"}
      ]

      const reports = 
    [
        {id: 0,name: "report_1", typeOfWork: "type_1"},
        {id: 1, name: "report_2", typeOfWork: "type_2"},
        {id: 2, name: "report_3", typeOfWork: "type_2"},
        {id: 3, name: "report_4", typeOfWork: "type_3"},
        {id: 4, name: "report_5", typeOfWork: "type_3"},
        {id: 5, name: "report_6", typeOfWork: "type_4"}
      ]
      const gosts = 
    [
        {id: 0, name: "gost_1"},
        {id: 1, name: "gost_2"},
        {id: 2, name: "gost_3"},
        {id: 3, name: "gost_4"},
        {id: 4, name: "gost_5"},
        {id: 5, name: "gost_6"}
      ]
export default class AllDocsStud extends React.Component{

    constructor (props){
        super (props);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.state = {
            selectedRow1 : false,
            selectedRow2 : false,
            selectedRow3 : false,
        }
    }
    


    
    
    handleClick1 (){
        this.setState({selectedRow1 : true,
            selectedRow2 : false,
            selectedRow3 : false
        })   // ПЕРЕДАТЬ, КАКАЯ ИМЕННО СТРОКА ВЫБРАНА!!!!!
    }
    handleClick2 (){
        this.setState({selectedRow2 : true,
            selectedRow1 : false,
            selectedRow3 : false
        })   // ПЕРЕДАТЬ, КАКАЯ ИМЕННО СТРОКА ВЫБРАНА!!!!!
    }

    handleClick3 (){
        this.setState({selectedRow3 : true,
            selectedRow1 : false,
            selectedRow2 : false
        })   // ПЕРЕДАТЬ, КАКАЯ ИМЕННО СТРОКА ВЫБРАНА!!!!!
    }
    handleClick4 (tit,e){
        console.log(tit)
    }

    getId(){
        
    }

    render(){
        let selected = {typeOfDoc : "nothing", index : null}



        let docsGOSTs = gosts.map((gost)=>{   ////список строк (в каждой строке - экземпляр "гост")
        return (
        <Table.Row /*onClick={}*/>  {/*НАПИСАТЬ ФУНКЦИЮ, ЧТОБЫ В ПЕРЕМЕННУЮ selected СОХРАНЯЛО ТИП И  ID ДОКУМЕНТА*/}
        <Table.Cell>{gost.name}</Table.Cell>
        </Table.Row>
        );
      });

      let docsTituls = tituls.map((titul)=>{   ////список строк (в каждой строке - экземпляр "титульник")
      return (
        <Table.Row >
            <input type = "radio" name = "tit" onClick = {this.handleClick4.bind(this,titul.id)} value = 'titul'/>
        <Table.Cell>{titul.name}</Table.Cell>
        <Table.Cell>{titul.course}</Table.Cell>
        <Table.Cell>{titul.typeOfWork}</Table.Cell>
      </Table.Row>
      );
     });

        let  docsReports = reports.map((report)=>{    //список строк (в каждой строке - экземпляр "отчет")
        return (
        <Table.Row >
        <Table.Cell>{report.name}</Table.Cell>
        <Table.Cell>{report.typeOfWork}</Table.Cell>
        </Table.Row>
        );
        });

       // console.log(selected.typeOfDoc, selected.index);

        let button1 = null;
        let button2 = null;
        let button3 = null;
        
        if (this.state.selectedRow1 == true){
            button1=<Button primary>Скачать лист</Button>
        }
        else if (this.state.selectedRow2 == true){
            button2=<Button primary>Скачать отчет</Button>
        }
        else if (this.state.selectedRow3 == true){
            button3=<Button primary>Скачать ГОСТ</Button>
        }

       

        return(

            <Grid columns = "three" devided>
           
            <GridRow>
                <GridColumn>
                    <b>Титульные листы</b>
                    <Table celled selectable onClick= {this.handleClick1}>
                        <Table.Header>
                        <Table.Row >
                        <Table.HeaderCell >Checkbox</Table.HeaderCell>
                            <Table.HeaderCell >Название</Table.HeaderCell>
                            <Table.HeaderCell>Курс</Table.HeaderCell>
                            <Table.HeaderCell>Тип работы</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                    
                        <Table.Body>

                            {docsTituls}
                        </Table.Body>
                    </Table>
                    {button1}
                </GridColumn>

                <GridColumn>
                    <b>Структуры отчетов</b>
                    <Table celled selectable onClick= {this.handleClick2}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Название</Table.HeaderCell>
                            <Table.HeaderCell>Тип работы</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                    
                        <Table.Body>
                            {docsReports}
                        </Table.Body>
                    </Table>
                    {button2}
                </GridColumn>

                <GridColumn>
                    <b>ГОСТы</b>
                    <Table celled selectable onClick= {this.handleClick3}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Название</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                    
                        <Table.Body>
                            {docsGOSTs}
                        </Table.Body>
                    </Table>
                    {button3}
                   
                </GridColumn>
            </GridRow>
        </Grid>
        );
    }
}