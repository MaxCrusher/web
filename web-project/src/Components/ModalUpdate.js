import React from 'react'
import { Button, Modal, Grid,  Label, Input, Dropdown } from 'semantic-ui-react'


export default class  ModalUpdate extends React.Component{

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })

     // ОБРАБОТЧИК ДЛЯ ОТСЫЛКИ ДАННЫХ  ( по типу документа (props) подгружать сооствет. тип документа в Dropdown)
    render(){
        return(
            <Modal 
                trigger={<Button onClick={this.handleOpen}>Заменить  </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
            <Modal.Header> Замена {this.props.typeOfDoc}а</Modal.Header>
            <Modal.Content >
            <Grid columns = "two" devided>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                                <label>Название документа</label>
                            </Grid.Column>
                            <Grid.Column>
                            <Dropdown placeholder ="Документ"/>
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