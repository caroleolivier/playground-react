import React, {Component} from 'react';
import ProductTable from './ProductTable';

class SearchableProductTable extends Component {
    render() {
        return (
           <ProductTable products={this.props.products}/>
        )
    }
}

export default SearchableProductTable;