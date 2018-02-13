import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import {getAllGost, getDoc,getAllTituls, getAllReports} from '../../Servises/';

import AllDocuments from './AllDocuments';
import TableT from './TableT';

import ModalAdd from './ModalAddFP';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

import GridRow from 'semantic-ui-react/dist/commonjs/collections/Grid/GridRow';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';


let tituls = null;
let gosts = null;
let reports =null;
export default class ChoosingDocumT extends React.Component {

    constructor(props) {
        super(props);
        this.newDocState1 = this.newDocState1.bind(this);
        this.newDocState2 = this.newDocState2.bind(this);
        this.newDocState3 = this.newDocState3.bind(this);

        this.newAllDocsState = this.newAllDocsState.bind(this);

        this.newActState1 = this.newActState1.bind(this);
        this.newActState2 = this.newActState2.bind(this);
        this.newActState3 = this.newActState3.bind(this);

        this.state = {
            document: "nothing",
            activity: "nothing",
            allDocuments: false,
            gostss:[],
            reportss:[],
            titulss:[]
        }
    }
    newDocState1() {
        this.setState({ document: "frontPages", allDocuments: false })

    }
    newDocState2() {
        this.setState({ document: "reports", allDocuments: false })

    }
    newDocState3() {
        this.setState({ document: "standarts", allDocuments: false })

    }

    newAllDocsState() {
        this.setState({ allDocuments: true })
    }

    newActState1() {
        this.setState({ activity: "add", allDocuments: false })
    }

    newActState2() {
        this.setState({ activity: "update", allDocuments: false })
    }
    newActState3() {
        this.setState({ activity: "delete", allDocuments: false })
    }

    componentWillMount (){                                              
            getAllGost((gostst) =>{
                this.setState({gostss:gostst});
            });
            
            getAllReports((reportt) =>{
                this.setState({reportss:reportt});
            });
            getAllTituls((titull)=>{
                this.setState({titulss:titull});
            });
    }
    render() {

        let element2 = null;
        let element1 = null;
        gosts = this.state.gostss.map((gost)=>({value: gost.id, text: gost.name}));
        reports = this.state.reportss.map((report)=>({value: report.id, text: report.name}));
        tituls = this.state.titulss.map((titul)=>({value: titul.id, text: titul.name}));
        if (this.state.allDocuments == true) {
            element1 = <AllDocuments />                                 // ВЫЗЫВАТЬ ОБЕРТКУ
        }
        else {

            var ds = this.state.document;
            var aas = this.state.activity;
            if (ds == "standarts" && aas == "add") { element2 = <ModalAdd typeOfDoc="gosts" dataGost={gosts} />; }
            if (ds == "standarts" && aas == "update") element2 = <ModalUpdate typeOfDoc="gosts" dataGost={gosts} />;
            if (ds == "standarts" && aas == "delete") element2 = <ModalDelete typeOfDoc="gosts" dataGost={gosts}/>;

            if (ds == "reports" && aas == "add") element2 = <ModalAdd typeOfDoc="reports" dataReport={reports} />;
            if (ds == "reports" && aas == "update") element2 = <ModalUpdate typeOfDoc="reports" dataReport={reports} />;
            if (ds == "reports" && aas == "delete") element2 = <ModalDelete typeOfDoc="reports" dataReport={reports}/>;

            if (ds == "frontPages" && aas == "add") element2 = <ModalAdd typeOfDoc="tituls" dataTitul={tituls} />;
            if (ds == "frontPages" && aas == "update") element2 = <ModalUpdate typeOfDoc="tituls" dataTitul={tituls} />;
            if (ds == "frontPages" && aas == "delete") element2 = <ModalDelete typeOfDoc="tituls" dataTitul={tituls}/>;         
        }

        return (
            <div>
                <Grid columns={2} relaxed >
                    <GridRow>
                        <Grid.Column>
                            <Segment basic>
                                <b>Выбор документа: </b>
                                <form className="form">
                                    <p><input type="radio" name="document" value="frontPages"
                                        onClick={this.newDocState1} />Титульные листы</p>
                                    <p><input type="radio" name="document" value="reports"
                                        onClick={this.newDocState2} />Структуры отчетов и пояснительных записок</p>
                                    <p><input type="radio" name="document" value="standards"
                                        onClick={this.newDocState3} />ГОСТы</p>
                                    <hr width="50%" align="left" />
                                    <p><input type="radio" name="document" value="allDocuments"
                                        onClick={this.newAllDocsState} />Показать все текущие документы</p>
                                </form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment basic>
                                <b>Выбор действия: </b>
                                <form className="form">
                                    <p><input type="radio" name="activity" value="Loading"
                                        onClick={this.newActState1} />Добавить новый документ</p>
                                    <p><input type="radio" name="activity" value="Editing"
                                        onClick={this.newActState2} />Заменить существующий</p>
                                    <p><input type="radio" name="activity" value="Deliting"
                                        onClick={this.newActState3} />Удалить</p>

                                </form>
                            </Segment>
                        </Grid.Column>
                    </GridRow>
                    {element2}
                </Grid>
                {element1}

            </div>

        );
    }
}