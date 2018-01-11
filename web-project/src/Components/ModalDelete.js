import React from 'react'
import { Button, Modal, Grid,  Label,  Dropdown } from 'semantic-ui-react'


export default class  ModalDelete extends React.Component{
    
    state = { modalOpen: false ,
        reports:[],
        gosts: [],
        tituls:[]

    }

    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })
     // ОБРАБОТЧИК ДЛЯ ОТСЫЛКИ ДАННЫХ ( по типу документа (props) подгружать сооствет. тип документа в Dropdown)

     componentWillMount (){                                                //подгрузка документов для dropdown
        let typeOfDoc = this.state.typeOfDoc;
        if (typeOfDoc ==="gosts"){
            getAllGost((gostst) =>{
                this.setState({gosts:gostst});
            });
        }
        else if (typeOfDoc ==="tituls"){
    
        }
        else if (typeOfDoc === "reports"){
    
        }
    }

    render(){

        let m = this.props.typeOfDoc;
        let header = null;

        let docs = null;
        if (m== "gosts"){ // ГОСТ
         docs = this.props.dataGost;    ///// вставить данные, полученные в componentWillMount  docs = this.state.gosts
         header = 'ГОСТа';
        }
        else if (m== "reports"){ // ОТЧЕТ
            docs = this.props.dataReport;               //docs = this.state.reports
            header = 'отчета';
        }
        else if (m==="tituls"){ //    ТИТУЛЬНИК
            docs = this.props.dataTitul;                //docs = this.state.tituls
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
                            <Dropdown placeholder ="Документ" search selection options= {docs} />
                            </Grid.Column>
                        </Grid.Row>
                        
                       
                    </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick = {this.handleClose}>
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