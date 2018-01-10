
import React from 'react';

import AllDocuments from './AllDocuments';  

export default class AllDocsStudWrapper extends React.Component {
    state = {
        reports: [],
        tituls: [],
        gosts: []
    }

    componentWillMount() {

    }

    render() {
        const { reports, tituls, gosts } = this.state;
        return (
            <AllDocuments reports={reports} tituls={tituls} gosts={gosts} />
        );

    }
}

