import React from 'react'
import { Button, Modal, Grid, Label, Input, Dropdown } from 'semantic-ui-react'
import AllDocsStud from '../Students/AllDocsStud';



const TypesOfWorks = [
    { text: "Курсовой проект", value: "kp" },
    { text: "Расчетно-графическая работа", value: "rgr" },
    { text: "Выпускная квалификационная работа", value: "vkr" },
    { text: "Домашнее задание", value: "dz" }
]

const courses = [
    { text: "1 курс", value: "1" },
    { text: "2 курс", value: "2" },
    { text: "3 курс", value: "3" },
    { text: "4 курс", value: "4" },
    { text: "5 курс", value: "5" },
    { text: "6 курс", value: "6" }
]

var typeOfDoc = "";
var name = "";


export default class ModalAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valueName: '',
         modalOpen: false
        };
        this.handleChange = this.handleChange.bind(this);
     
      }

      


    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleChange(event) {
        this.setState({valueName: event.target.value});
      }


    // ОБРАБОТЧИК ДЛЯ ОТСЫЛКИ ДАННЫХ 

    render() {
        typeOfDoc  = this.props.typeOfDoc;
        name = this.state.valueName;

        let m = this.props.typeOfDoc;
        let header = null;

        let Content = null;
        if (m === "gosts") {                                                                    // ГОСТ           
            header = 'ГОСТа';
            Content = <Grid columns="two" devided>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Название документа </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input type = "text" value = {this.state.valueName} onChange = {this.handleChange}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Загрузить документ</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input type="file" name="file" size="50" />
                        
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        }
        else if (m === "reports") { // ОТЧЕТ
            header = 'отчета';
            Content = <Grid columns="two" devided>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Название документа </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input type = "text" value = {this.state.valueName} onChange = {this.handleChange}/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Тип работы </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown placeholder="Тип работы" search selection options={TypesOfWorks} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="positionOfLeftButton">
                        <Label>Загрузить документ</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Input type="file" name="file" size="50" />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        }
        else if (m === "tituls") { //    ТИТУЛЬНИК
            header = 'титульного листа';
            Content =
                <Grid columns="two" devided>
                    <Grid.Row>
                        <Grid.Column className="positionOfLeftButton">
                            <Label>Название документа </Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Input type = "text" value = {this.state.valueName} onChange = {this.handleChange}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="positionOfLeftButton">
                            <Label>Курс </Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown placeholder="Курс" search selection options={courses} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="positionOfLeftButton">
                            <Label>Тип работы </Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown placeholder="Тип работы" search selection options={TypesOfWorks} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="positionOfLeftButton">
                            <Label>Год</Label>
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
                            <Input type="file" name="file" size="50" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        }

        return (
            <Modal
                trigger={<Button onClick={this.handleOpen}>Добавить </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header> Добавление  {header}</Modal.Header>
                <Modal.Content >
                    {Content}
                    <p>тип документа:{typeOfDoc}, название документа : {name} </p> {/*Переменные для фиксирования названий и типов документа*/}
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={this.handleClose}>
                        Добавить
              </Button>
                    <Button onClick={this.handleClose}>
                        Отмена
              </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

