import React, {Component} from 'react';

function CategoryRow(props) {
    return (
        <tr>
            <td>{props.category}</td>
        </tr>
    )
}

function ProductRow(props) {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

class ProductTable extends Component {
    render() {
        // assuming it comes grouped by category
        let rows = [];
        if(this.props.products.length > 0) {
            let category;
            for (let i = 0; i < this.props.products.length; i++) {
                let product = this.props.products[i];
                
                if(!this.filterOutProduct(product))
                {
                    if(product.category !== category) {
                        category = product.category;
                        rows.push(<CategoryRow key={"cat"+category} category={category}/>);
                    }

                    rows.push(<ProductRow key={"prod"+product.name} product={product}/>);
                }
            }
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

    filterOutProduct(product) {
        return !(product.name.toLowerCase().includes(this.props.filterText.toLowerCase()) && (!this.props.onlyInStock || product.stocked));
    }
}

export default ProductTable;