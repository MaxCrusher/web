import React from 'react'
import {getAllGost, getDoc,getAllTituls, getAllReports} from '../../Servises/';
import { Button, Modal, Grid,  Label,  Dropdown } from 'semantic-ui-react'


export default class  ModalDelete extends React.Component{
    constructor(props){
        super(props);
        this.Change = this.Change.bind(this);
        this.deleteBut = this.deleteBut.bind(this);
    }
    state = { modalOpen: false ,
        reports:[],
        gosts: [],
        tituls:[],
        value: 0
    }

    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false, value:0 })
    deleteBut=(id,table,e)=>{
        console.log(id+"+");
        console.log(table+"-");
        fetch("/api/delete/"+table+"/"+id);
        this.setState({modalOpen:false})
    }

    Change= (e, {value}) =>{
        this.setState({value:value});
    }
    render(){
        let docs = null;
        let header = null;
        if (this.props.typeOfDoc== "gosts"){ // ГОСТ
            docs  = this.props.dataGost;
            header = 'ГОСТа';
        }
        else if (this.props.typeOfDoc== "reports"){ // ОТЧЕТ
            docs  = this.props.dataReport;
            header = 'отчета';
        }
        else if (this.props.typeOfDoc==="tituls"){ //    ТИТУЛЬНИК
            docs  = this.props.dataTitul;
            header = 'титульного листа';
          
        }
        return(
            <Modal 
                trigger={<Button onClick={this.handleOpen}>Удалить </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
            <Modal.Header> Удаление {header} </Modal.Header>
                <Modal.Content >
                    <Grid columns = "two" devided>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                                <Label>Название</Label>
                            </Grid.Column>
                            <Grid.Column>
                                <Dropdown selection
                                            options= {docs}
                                            placeholder ="Документ"
                                            onChange ={this.Change}
                                            value = {this.state.value}
                                            />
                            </Grid.Column>
                        </Grid.Row> 
                        <pre>=>{this.state.value}</pre>            
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick = {this.deleteBut.bind(this, this.state.value,this.state.typeOfDoc)}>
                        Удалить
                    </Button>
                    <Button onClick = {this.handleClose}>
                        Отмена
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}