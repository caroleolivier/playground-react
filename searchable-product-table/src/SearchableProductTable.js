import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class SearchableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            onlyInStock: false
        }
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onOnlyInStockChange = this.onOnlyInStockChange.bind(this);
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.onFilterTextChange}
                onlyInStock={this.state.onlyInStock} onOnlyInStockChange={this.onOnlyInStockChange}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText}
                onlyInStock={this.state.onlyInStock}/>
            </div>
        );
    }

    onFilterTextChange(filter) {
        this.setState({filterText: filter});
    }

    onOnlyInStockChange(onlyInStock) {
        this.setState({onlyInStock: onlyInStock});
    }
}

export default SearchableProductTable;