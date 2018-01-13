import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import AllDocuments from './AllDocuments';                          // ВЫЗЫВАТЬ ОБЕРТКУ ДЛЯ КОМПОНЕНТЫ 
import ModalAdd from './ModalAddFP';
import TableT from './TableT';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';
import GridRow from 'semantic-ui-react/dist/commonjs/collections/Grid/GridRow';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';


const tituls =
    [
        { id: 0, text: "titul_1", course: "1", typeOfWork: "type_1", value: 't1' },
        { id: 1, text: "titul_2", course: "3", typeOfWork: "type_2", value: 't2' },
        { id: 2, text: "titul_3", course: "2", typeOfWork: "type_2", value: 't3' },
        { id: 3, text: "titul_4", course: "3", typeOfWork: "type_3", value: 't4' },
        { id: 4, text: "titul_5", course: "2", typeOfWork: "type_1", value: 't5' },
        { id: 5, text: "titul_6", course: "4", typeOfWork: "type_4", value: 't6' }
    ]

/*const reports =
    [
        { id: 0, text: "report_1", typeOfWork: "type_1", value: 'r1' },
        { id: 1, text: "report_2", typeOfWork: "type_2", value: 'r2' },
        { id: 2, text: "report_3", typeOfWork: "type_2", value: 'r3' },
        { id: 3, text: "report_4", typeOfWork: "type_3", value: 'r4' },
        { id: 4, text: "report_5", typeOfWork: "type_3", value: 'r5' },
        { id: 5, text: "report_6", typeOfWork: "type_4", value: 'r6' }
    ]
const gosts =
    [
        { id: 0, text: "gost_1", value: 'g1' },
        { id: 1, text: "gost_2", value: 'g2' },
        { id: 2, text: "gost_3", value: 'g3' },
        { id: 3, text: "gost_4", value: 'g4' },
        { id: 4, text: "gost_5", value: 'g5' },
        { id: 5, text: "gost_6", value: 'g6' },
        { id: 6, text: "gost_7", value: 'g7' },
        { id: 7, text: "gost_8", value: 'g8' }
    ]
*/
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
            allDocuments: false
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


    render() {


        let element2 = null;
        let element1 = null;

        if (this.state.allDocuments == true) {
            element1 = <AllDocuments />                                 // ВЫЗЫВАТЬ ОБЕРТКУ
        }
        else {

            var ds = this.state.document;
            var aas = this.state.activity;
           /* if (ds == "standarts" && aas == "add") { element2 = <ModalAdd typeOfDoc="gosts" dataGost={gosts} />; }
            if (ds == "standarts" && aas == "update") element2 = <ModalUpdate typeOfDoc="gosts" dataGost={gosts} />;
            if (ds == "standarts" && aas == "delete") element2 = <ModalDelete typeOfDoc="gosts" dataGost={gosts} />;

            if (ds == "reports" && aas == "add") element2 = <ModalAdd typeOfDoc="reports" dataReport={reports} />;
            if (ds == "reports" && aas == "update") element2 = <ModalUpdate typeOfDoc="reports" dataReport={reports} />;
            if (ds == "reports" && aas == "delete") element2 = <ModalDelete typeOfDoc="reports" dataReport={reports} />;*/

            if (ds == "frontPages" && aas == "add") element2 = <ModalAdd typeOfDoc="tituls" dataTitul={tituls} />;
            if (ds == "frontPages" && aas == "update") element2 = <ModalUpdate typeOfDoc="tituls" dataTitul={tituls} />;
            if (ds == "frontPages" && aas == "delete") element2 = <ModalDelete typeOfDoc="tituls" dataTitul={tituls} />;
            if (ds == "standarts" && aas == "add") { element2 = <TableT type = {this.state.document} action ={this.state.activity}/>; }
            if (ds == "standarts" && aas == "update") element2 = <TableT type = {this.state.document} action ={this.state.activity}/>;
            if (ds == "standarts" && aas == "delete") element2 = <TableT type = {this.state.document} action ={this.state.activity} />;

            if (ds == "reports" && aas == "add") element2 =  <TableT type = {this.state.document} action ={this.state.activity} />;
            if (ds == "reports" && aas == "update") element2 =  <TableT type = {this.state.document} action ={this.state.activity} />;
            if (ds == "reports" && aas == "delete") element2 =  <TableT type = {this.state.document} action ={this.state.activity} />;

           /* if (ds == "frontPages" && aas == "add") element2 =  <TableT type = {this.state.document} action ={this.state.activity} />;
            if (ds == "frontPages" && aas == "update") element2 =  <TableT type ={this.state.document} action ={this.state.activity} />;
            if (ds == "frontPages" && aas == "delete") element2 =  <TableT type = {this.state.document} action ={this.state.activity} />;
 */           
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

                   {/*<GridRow>
                        <GridColumn></GridColumn>
                        <GridColumn>  {element2}</GridColumn>
                    </GridRow>*/}
                    {element2}
                </Grid>
                {element1}

            </div>

        );
    }
}