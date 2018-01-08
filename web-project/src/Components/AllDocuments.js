import React from 'react';
import {Table, Grid, GridRow, GridColumn} from 'semantic-ui-react';


    const tituls = 
    [
        {id: 0, name: "titul_1", course: "1", typeOfWork: "type_1"},
        {id: 1, name: "titul_2", course: "3", typeOfWork: "type_2"},
        {id: 2, name: "titul_3", course: "2", typeOfWork: "type_2"},
        {id: 3, name: "titul_4", course: "3", typeOfWork: "type_3"},
        {id: 4, name: "titul_5", course: "2", typeOfWork: "type_1"},
        {id: 5, name: "titul_6", course: "4", typeOfWork: "type_4"}
    ]

    const reports = 
    [
        {id: 0,name: "report_1", typeOfWork: "type_1"},
        {id: 1, name: "report_2", typeOfWork: "type_2"},
        {id: 2, name: "report_3", typeOfWork: "type_2"},
        {id: 3, name: "report_4", typeOfWork: "type_3"},
        {id: 4, name: "report_5", typeOfWork: "type_3"},
        {id: 5, name: "report_6", typeOfWork: "type_4"}
    ]
    const gosts = 
    [
        {id: 0, name: "gost_1"},
        {id: 1, name: "gost_2"},
        {id: 2, name: "gost_3"},
        {id: 3, name: "gost_4"},
        {id: 4, name: "gost_5"},
        {id: 5, name: "gost_6"},
        {id: 6, name: "gost_7"},
        {id: 7, name: "gost_8"}
    ]


export default class AllDocuments extends React.Component{
    render(){

        let docsGOSTs = gosts.map((gost)=>{   ////список строк (в каждой строке - экземпляр "гост")
        return (
        <Table.Row > 
        <Table.Cell>{gost.name}</Table.Cell>
        </Table.Row>
        );
      });

      let docsTituls = tituls.map((titul)=>{   ////список строк (в каждой строке - экземпляр "титульник")
      return (
        <Table.Row >
        <Table.Cell>{titul.name}</Table.Cell>
        <Table.Cell>{titul.course}</Table.Cell>
        <Table.Cell>{titul.typeOfWork}</Table.Cell>
       
      </Table.Row>
      );
     });

        let  docsReports = reports.map((report)=>{    //список строк (в каждой строке - экземпляр "отчет")
        return (
        <Table.Row >
        <Table.Cell>{report.name}</Table.Cell>
        <Table.Cell>{report.typeOfWork}</Table.Cell>
        </Table.Row>
        );
        });

        return(
            <div className = "divBottom">
            <Grid columns = "three" devided>
                <GridRow>
                    <GridColumn>
                    <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell >Название</Table.HeaderCell>
                            <Table.HeaderCell>Курс</Table.HeaderCell>
                            <Table.HeaderCell>Тип работы</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {docsTituls}
                    </Table.Body>
                    </Table>
                    </GridColumn>

                    <GridColumn>
                    <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Название</Table.HeaderCell>
                            <Table.HeaderCell>Тип работы</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {docsReports}
                    </Table.Body>
                    </Table>               
                    </GridColumn>

                    <GridColumn>
                    <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>ГОСТы</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {docsGOSTs}
                    </Table.Body>
                    </Table>                
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div>
        );
    }
}
