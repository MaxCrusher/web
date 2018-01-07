import React from 'react';


import {Grid, Segment, Divider} from 'semantic-ui-react';


export default class MainPage extends React.Component{

    render(){
        return(
            <div className = "mainPartOfPage">
            <p>В нашем приложении вы сможете: </p>
              <div className = "q">
                <Grid columns={3} relaxed >
                    <Grid.Column>
                    <Segment basic>
                        Скачать  титульный лист для работ по дисциплинам кафедры ПМиФИ
                    </Segment>
                    </Grid.Column>
                    <Divider vertical>Or</Divider>
                    <Grid.Column>
                    <Segment basic>
                        Скачать структуры отчетов, пояснительных записок, рефератов и т.д. по интересующим Вас видам работ
                    </Segment>
                    </Grid.Column>
                    <Divider vertical>And</Divider>
                    <Grid.Column>
                    <Segment basic>
                        Скачать ГОСТы, необходимые для оформления Вашей работы
                    </Segment>
                    </Grid.Column>
                </Grid>
                </div>
            </div>
        );
    }
}