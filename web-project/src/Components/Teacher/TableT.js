import React from 'react';
import {getAllGost,getAllTituls, getAllReports} from '../../Servises/'
import {Table, Grid, GridRow, GridColumn, Input} from 'semantic-ui-react';
var table;
var id;
var action;
export default class TableT extends React.Component{

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
    Action(action,table,id){
        this.action = action
        this.table = table;
        this.id = id;
        console.log(action, table,id)

    }
    render(){
        let docsGOSTs = null;
        let docsReports = null;
        let docsTituls = null;
        if(this.props.type=="standarts")
        {
            const {gosts}=this.state;
            let docsGOSTs = gosts.map((gost)=>{   ////список строк (в каждой строке - экземпляр "гост")
            return (
            <Table.Row > 
            <Table.Cell>{gost.name}</Table.Cell>
            <Table.Cell>
                        <Input type="radio" onClick = {this.Action(this.props.action,"gosts", gost.id) } name="doc"  value='gost' />
                    </Table.Cell>
            </Table.Row>
            );
          });
          return(<Table celled>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell singleLine>ГОСТы</Table.HeaderCell>
                  <Table.HeaderCell >Выбор</Table.HeaderCell>
              </Table.Row>
          </Table.Header>
          <Table.Body>
              {docsGOSTs}
          </Table.Body>
          </Table>);     
        }
        if(this.props.type=="reports")
        {
            const {reports}= this.state;
            let  docsReports = reports.map((report)=>{    //список строк (в каждой строке - экземпляр "отчет")
            return (
            <Table.Row >
            <Table.Cell>{report.name}</Table.Cell>
            <Table.Cell>{report.typeowork}</Table.Cell>
            <Table.Cell>
                        <Input type="radio" onClick = {this.Action(this.props.action,"reports", report.id) } name="doc"  value='reports' />
                    </Table.Cell>
            </Table.Row>
            );
            });
           return(
           <Table celled>
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
           </Table>   );  
        }
        if(this.props.type=="frontPages")
        {
            const {tituls} = this.state;
            let docsTituls = tituls.map((titul)=>{   ////список строк (в каждой строке - экземпляр "титульник")
            return (
              <Table.Row >
              <Table.Cell>{titul.name}</Table.Cell>
              <Table.Cell>{titul.course}</Table.Cell>
              <Table.Cell>{titul.typeowork}</Table.Cell>

              <Table.Cell>
                        <Input type="radio" onClick = {this.Action( this.props.action,"tituls", titul.id) } name="doc"  value='tituls' />
                </Table.Cell>
             
            </Table.Row>
            );
           });
           return(
           <Table celled>
           <Table.Header>
               <Table.Row>
                   <Table.HeaderCell >Название</Table.HeaderCell>
                   <Table.HeaderCell>Курс</Table.HeaderCell>
                   <Table.HeaderCell>Тип работы</Table.HeaderCell>
                   <Table.HeaderCell >Выбор</Table.HeaderCell>
               </Table.Row>
           </Table.Header>
           <Table.Body>
               {docsTituls}
           </Table.Body>
           </Table>);
        }
}
}