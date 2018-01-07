import React, {Component} from 'react'
import {Grid, Segment, Divider} from 'semantic-ui-react';
import AllDocuments from './AllDocuments';
import ModalAdd from './ModalAddFP';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';


export default class ChoosingDocumT extends React.Component{

    constructor(props){
        super (props);
        this.newDocState1 = this.newDocState1.bind(this);
        this.newDocState2 = this.newDocState2.bind(this);
        this.newDocState3 = this.newDocState3.bind(this);

        this.newAllDocsState = this.newAllDocsState.bind(this);
        
        this.newActState1 = this.newActState1.bind(this);
        this.newActState2 = this.newActState2.bind(this);
        this.newActState3 = this.newActState3.bind(this);

        this.state= {
            document : "nothing",
            activity : "nothing",
            allDocuments : false
        }
    }
    newDocState1(){
        this.setState({document : "frontPages", allDocuments:false})
        
    }
    newDocState2(){
        this.setState({document:"reports" , allDocuments:false})
        
    }
    newDocState3(){
        this.setState({document:"standarts" , allDocuments:false})
        
    }

    newAllDocsState(){
        this.setState({allDocuments:true})
    }

    newActState1(){
        this.setState({activity:"add", allDocuments:false})
    }

    newActState2(){
        this.setState({activity:"update", allDocuments:false})
    }
    newActState3(){
        this.setState({activity:"delete", allDocuments:false})
    }


    render(){

       
        let element2 = null;

        if (this.state.allDocuments==true){
            element2 = <AllDocuments/>
        }
        else {

            let ds = this.state.document;
            let aas = this.state.activity;
            if (ds == "standarts" && aas == "add") {element2 =<ModalAdd typeOfDoc = "ГОСТ"/>;}
            if (ds == "standarts" && aas == "update") element2=<ModalUpdate typeOfDoc = "ГОСТ"/>;
            if (ds == "standarts" && aas == "delete") element2= <ModalDelete typeOfDoc = "ГОСТ"/>;
    
            if (ds == "reports" && aas == "add") element2= <ModalAdd typeOfDoc = "отчет"/>;
            if (ds == "reports" && aas == "update") element2=<ModalUpdate typeOfDoc = "отчет"/>;
            if (ds == "reports" && aas == "delete")element2= <ModalDelete typeOfDoc = "отчет"/>;
    
            if (ds == "frontPages" && aas == "add") element2=<ModalAdd typeOfDoc = "титул"/>;
            if (ds == "frontPages" && aas == "update")element2= <ModalUpdate typeOfDoc = "титул"/>;
            if (ds == "frontPages" && aas == "delete") element2=<ModalDelete typeOfDoc = "титул"/>;
        }

      



        return(
            <div>
                <Grid columns={2} relaxed >
                <Grid.Column>
                <Segment basic>
                        <b>Выбор документа: </b>
                        <form className = "form">
                        <p><input type = "radio" name = "document" value = "frontPages"
                        onClick={this.newDocState1}   />Титульные листы</p>
                        <p><input type = "radio" name = "document" value = "reports"
                        onClick={this.newDocState2}    />Структуры отчетов и пояснительных записок</p>
                        <p><input type = "radio" name = "document" value = "standards"
                        onClick={this.newDocState3}    />ГОСТы</p>
                        <hr width ="50%" align = "left"/>
                        <p><input type = "radio" name = "document" value = "allDocuments"
                            onClick={this.newAllDocsState}    />Показать все текущие документы</p>   
                        </form>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment basic>
                    <b>Выбор действия: </b>
                    <form className = "form">
                        <p><input type = "radio" name = "activity"  value = "Loading"
                            onClick ={this.newActState1}/>Добавить новый документ</p>
                        <p><input type = "radio" name = "activity" value = "Editing"
                            onClick ={this.newActState2}/>Заменить существующий</p>
                        <p><input type = "radio" name = "activity" value = "Deliting"
                            onClick ={this.newActState3}/>Удалить</p>
                           
                    </form>
                </Segment>
                </Grid.Column>
            </Grid>
           
            {element2}
            </div>
            
        );
    }
}