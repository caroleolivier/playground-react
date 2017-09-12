import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class SearchableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}

export default SearchableProductTable;