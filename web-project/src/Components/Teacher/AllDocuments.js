import React from 'react';
import {getAllGost,getAllTituls, getAllReports} from '../../Servises/'
import {Table, Grid, GridRow, GridColumn} from 'semantic-ui-react';
export default class AllDocuments extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            gosts :[],
            tituls: [],
            reports:[],             
        }
    }
    componentWillMount(){
        getAllReports((reportt) =>{
            this.setState({reports:reportt});
        });
        getAllGost((gostst) =>{
            this.setState({gosts:gostst});
        });

        getAllTituls((titull)=>{
            this.setState({tituls:titull});
        });
    }
    
    render(){
        const {gosts}=this.state;
        let docsGOSTs = gosts.map((gost)=>{   ////список строк (в каждой строке - экземпляр "гост")
        return (
        <Table.Row > 
        <Table.Cell>{gost.name}</Table.Cell>
        </Table.Row>
        );
      });
        const {tituls} = this.state;
      let docsTituls = tituls.map((titul)=>{   ////список строк (в каждой строке - экземпляр "титульник")
      return (
        <Table.Row >
        <Table.Cell>{titul.name}</Table.Cell>
        <Table.Cell>{titul.course}</Table.Cell>
        <Table.Cell>{titul.typeowork}</Table.Cell>
       
      </Table.Row>
      );
     });
        const {reports}= this.state;
        let  docsReports = reports.map((report)=>{    //список строк (в каждой строке - экземпляр "отчет")
        return (
        <Table.Row >
        <Table.Cell>{report.name}</Table.Cell>
        <Table.Cell>{report.typeowork}</Table.Cell>
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
