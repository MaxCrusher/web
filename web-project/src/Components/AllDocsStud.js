import React from 'react'
import { saveAs } from 'file-saver';
import { getAllGost, getDoc, getAllTituls, getAllReports } from '../Servises/';
import { Grid, GridRow, GridColumn, Table, Button, Input } from 'semantic-ui-react';

var id;
var name;
var path;
var selected = { type: "", index: null }   //ПЕРЕМЕННАЯ, КУДА ЗАПИСЫВАЮТСЯ ДАННЫЕ ДЛЯ ЗАПРОСА НА СЕРВЕР
export default class AllDocsStud extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick4 = this.handleClick4.bind(this);
        this.donloading = this.donloading.bind(this);
        this.state = {
            selectedRow1: false,
            selectedRow2: false,
            selectedRow3: false,
            gosts: [],
            tituls: [],
            reports: [],
            ex: '',

        }
    }
    componentWillMount() {
        getAllReports((reportt) => {
            this.setState({ reports: reportt });
        });
        getAllGost((gostst) => {
            this.setState({ gosts: gostst });
        });

        getAllTituls((titull) => {
            this.setState({ tituls: titull });
        });
        fetch("/api/gost")
            .then(res => {

                return res.json();
            })

    }
    donloading(id, name, table) {
        console.log(id + ' ' + name + ' ' + table);
        fetch("/api/gost/download/" + table + "/" + id, {
            responseType: 'blob'
        }).then(res => 
            res.blob()
        ).then(blob => saveAs(blob, name));
    }
    Cool() {
        console.log("+++");
    }

    handleClick4(id, name, path, e) {
        selected.type = e.target.value;
        this.id = id;
        this.name = name;
        this.path = path;
        if (e.target.value === "titul") {
            this.setState({
                selectedRow1: true,
                selectedRow2: false,
                selectedRow3: false
            })
        }
        else if (e.target.value === "report") {
            this.setState({
                selectedRow1: false,
                selectedRow2: true,
                selectedRow3: false
            })
        }
        else if (e.target.value === "gost") {
            this.setState({
                selectedRow1: false,
                selectedRow2: false,
                selectedRow3: true
            })
        }

    }


    render() {
        const { gosts } = this.state;
        let docsGOSTs = gosts.map((gost) => {   ////список строк (в каждой строке - экземпляр "гост")
            return (
                <Table.Row >
                    <Table.Cell>{gost.name}</Table.Cell>
                    <Table.Cell>
                        <Input type="radio" name="doc" onClick={this.handleClick4.bind(this, gost.id, gost.name, gost.path)} value='gost' />
                    </Table.Cell>

                </Table.Row>
            );
        });
        const { tituls } = this.state;
        let docsTituls = tituls.map((titul) => {   ////список строк (в каждой строке - экземпляр "титульник")
            return (
                <Table.Row >
                    <Table.Cell>{titul.name}</Table.Cell>
                    <Table.Cell>{titul.course}</Table.Cell>
                    <Table.Cell>{titul.typeowork}</Table.Cell>
                    <Table.Cell>
                        <Input type="radio" name="doc" onClick={this.handleClick4.bind(this, titul.id, titul.name, titul.path)} value='titul' />
                    </Table.Cell>

                </Table.Row>
            );
        });
        const { reports } = this.state
        let docsReports = reports.map((report) => {    //список строк (в каждой строке - экземпляр "отчет")
            return (
                <Table.Row >
                    <Table.Cell>{report.name}</Table.Cell>
                    <Table.Cell>{report.typeowork}</Table.Cell>
                    <Table.Cell>
                        <Input type="radio" name="doc" onClick={this.handleClick4.bind(this, report.id, report.name, report.path)} value='report' />
                    </Table.Cell>

                </Table.Row>
            );
        });

        let button1 = null;
        let button2 = null;
        let button3 = null;

        if (this.state.selectedRow1 == true) {  // по щелчку по кнопке передать значение selected на сервер
            button1 = <Button primary onClick={this.donloading(this.id, this.name, 'tituls')}>Скачать лист</Button>
        }
        else if (this.state.selectedRow2 == true) { // по щелчку по кнопке передать значение selected на сервер
            button2 = <Button primary onClick={this.donloading(this.id, this.name, 'reports')}>Скачать отчет</Button>
        }
        else if (this.state.selectedRow3 == true) { // по щелчку по кнопке передать значение selected на сервер
            button3 = <Button primary onClick={this.donloading(this.id, this.name, 'gosts')}>Скачать ГОСТ</Button>// 
        }


        return (

            <Grid columns="three" devided>

                <GridRow>
                    <GridColumn>
                        <b>Титульные листы</b>
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row >
                                    <Table.HeaderCell >Название</Table.HeaderCell>
                                    <Table.HeaderCell>Курс</Table.HeaderCell>
                                    <Table.HeaderCell>Тип работы</Table.HeaderCell>
                                    <Table.HeaderCell >Выбор</Table.HeaderCell>
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
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Название</Table.HeaderCell>
                                    <Table.HeaderCell>Тип работы</Table.HeaderCell>
                                    <Table.HeaderCell >Выбор</Table.HeaderCell>
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
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Название</Table.HeaderCell>
                                    <Table.HeaderCell >Выбор</Table.HeaderCell>
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