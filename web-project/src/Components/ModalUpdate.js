import React from 'react'
import { Button, Modal, Grid,  Label, Input, Dropdown } from 'semantic-ui-react'

 var selected = {type :"", value :0}
export default class  ModalUpdate extends React.Component{

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })

   
    state = {}

    handleChange = (e, {  value }) =>{
        this.setState({ value });       // получаем value и знаем тип документа .. 

    } 

     // ОБРАБОТЧИК ДЛЯ ОТСЫЛКИ ДАННЫХ  ( по типу документа (props) подгружать сооствет. тип документа в Dropdown)
    render(){

        let m = this.props.typeOfDoc;
        let header = null;

        let docs = null;
        if (m== "gosts"){ // ГОСТ
         docs = this.props.dataGost;
         header = 'ГОСТа';
        }
        else if (m== "reports"){ // ОТЧЕТ
            docs = this.props.dataReport;
            header = 'отчета';
        }
        else if (m==="tituls"){ //    ТИТУЛЬНИК
            docs = this.props.dataTitul;
            header = 'титульного листа';
          
        }

        const {value } = this.state
        return(
            <Modal 
                trigger={<Button onClick={this.handleOpen}>Заменить  </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
            <Modal.Header> Замена {header}</Modal.Header>
            <Modal.Content >
            <Grid columns = "two" devided>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                                <Label>Название документа</Label>
                            </Grid.Column>
                            <Grid.Column>
                                <Dropdown 
                                placeholder ="Документ" 
                                search selection options= {docs} 
                                onChange={this.handleChange}
                                value = {value}
                              />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                            <Label>Загрузить документ</Label>
                            </Grid.Column>
                            <Grid.Column>
                                <Input type = "file" name ="file" size = "50"/>
                            </Grid.Column>
                        </Grid.Row>
                        <pre>Current value:  {value}</pre>
                    </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick = {this.handleClose}>
                Заменить
              </Button>
              <Button onClick = {this.handleClose}>
                Отмена
              </Button>
            </Modal.Actions>
          </Modal>

        );
    }
}