import React from 'react';

import AllDocsStud from './AllDocsStud';

// import {getAllDocuments} from '../../ Services'

/*import React from 'react';

import { ProductsPage } from './ProductsPage';

import { getAllProducts } from '../../Services';

class ProductsPageWrapper extends React.Component {
    state = {
        products: []
    }

    componentWillMount() {
        getAllProducts((products) => {
            this.setState({
                products: products
            });
        });
    }

    render() {
        const { products } = this.state;

        return (
            <ProductsPage products={products} />
        );
    }
}

export default ProductsPageWrapper; */


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
            <AllDocsStud reports={reports} tituls={tituls} gosts={gosts} />
        );

    }
}

