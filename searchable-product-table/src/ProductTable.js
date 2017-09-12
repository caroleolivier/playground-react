import React, {Component} from 'react';

function ProductRow(props) {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.stocked ? "" : "out of stock"}</td>
        </tr>
    )
}

class ProductTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map(product => <ProductRow key={product.name} product={product}/>)}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;