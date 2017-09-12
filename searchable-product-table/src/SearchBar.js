import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onOnlyInStockChange = this.onOnlyInStockChange.bind(this);
    }
    render() {
        return (
            <form>
                <input type="text" value={this.props.filterText} placeholder="Search..." onChange={this.onFilterTextChange}/>
                <p>
                    <input type="checkbox" checked={this.props.onlyInStock} onChange={this.onOnlyInStockChange}/>
                    Only show products in stock
                </p>
            </form>
        );
    }

    onFilterTextChange(event) {
        this.props.onFilterTextChange(event.target.value);
    }

    onOnlyInStockChange(event) {
        this.props.onOnlyInStockChange(event.target.checked);
    }
}

export default SearchBar;