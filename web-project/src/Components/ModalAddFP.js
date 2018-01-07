import React from 'react'
import { Button, Modal, Grid,  Label, Input , Dropdown} from 'semantic-ui-react'

export default class  ModalAdd extends React.Component{

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })
     

    // ОБРАБОТЧИК ДЛЯ ОТСЫЛКИ ДАННЫХ 

    render(){
        let m  = this.props.typeOfDoc;
        let Content = null;
        if (m== "ГОСТ"){ // ГОСТ
            Content = <Grid columns = "two" devided> 
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Название документа </label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                            <label>Загрузить документ</label>
                            </Grid.Column>
                            <Grid.Column>
                                <input type = "file" name ="file" size = "50"/>
                            </Grid.Column>
                        </Grid.Row>
                
                </Grid>
        }
        else if (m== "отчет"){ // ОТЧЕТ
            Content =    <Grid columns = "two" devided> 
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Название документа </label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input />
                    </Grid.Column>
                </Grid.Row>
           
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Тип работы </label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Тип работы"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                            <label>Загрузить документ</label>
                            </Grid.Column>
                            <Grid.Column>
                                <input type = "file" name ="file" size = "50"/>
                            </Grid.Column>
                        </Grid.Row>
                
                </Grid>
        }
        else{ //    ТИТУЛЬНИК
            Content =  
            <Grid columns = "two" devided> 
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Название документа </label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Курс </label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Курс"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Тип работы </label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Тип работы"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <label>Год</label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown  placeholder = "Год"/>
                    </Grid.Column>
                </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                            <label>Загрузить документ</label>
                            </Grid.Column>
                            <Grid.Column>
                                <input type = "file" name ="file" size = "50"/>
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
            <Modal.Header> Добавление  {this.props.typeOfDoc}а</Modal.Header>
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

