import React from 'react'
import { Button, Modal, Grid,  Label, Input , Dropdown} from 'semantic-ui-react'
import AllDocsStud from './AllDocsStud';



export default class  ModalAdd extends React.Component{

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })
     

    // ОБРАБОТЧИК ДЛЯ ОТСЫЛКИ ДАННЫХ 

    render(){
        let m  = this.props.typeOfDoc;
        let header = null;
       
        let Content = null;
        if (m==="gosts"){ // ГОСТ
           header = 'ГОСТа';
            Content = <Grid columns = "two" devided> 
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Название документа </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input />
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
                
                </Grid>
        }
        else if (m=== "reports"){ // ОТЧЕТ
            header = 'отчета';
            Content =    <Grid columns = "two" devided> 
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Название документа </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input />
                    </Grid.Column>
                </Grid.Row>
           
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Тип работы </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Тип работы" />
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
                
                </Grid>
        }
        else if (m === "tituls"){ //    ТИТУЛЬНИК
            header = 'титульного листа';
            Content =  
            <Grid columns = "two" devided> 
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Название документа </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Курс </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Курс"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Тип работы </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Тип работы"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Год</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Год" />
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
            </Grid>
        }

        return(
            <Modal 
                trigger={<Button onClick={this.handleOpen}>Добавить </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
            <Modal.Header> Добавление  {header}</Modal.Header>
            <Modal.Content >
                {Content}
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick = {this.handleClose}>
                Добавить
              </Button>
              <Button onClick = {this.handleClose}>
                Отмена
              </Button>
            </Modal.Actions>
          </Modal>
        );
    }
}

