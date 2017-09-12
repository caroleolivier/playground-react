import React, {Component} from 'react';

function CategoryRow(props) {
    return (
        <tr>
            <td>{props.category.name}</td>
        </tr>
    )
}

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
        // assuming it comes grouped by category
        let rows = [];
        if(this.props.products.length > 0) {
            let category = {name: this.props.products[0].category};
            rows.push(<CategoryRow key={"cat"+category.name} category={category}/>);
            for (let i = 0; i < this.props.products.length; i++) {
                let product = this.props.products[i];
                
                if(product.category !== category.name) {
                    category = {name: product.category};
                    rows.push(<CategoryRow key={"cat"+category.name} category={category}/>);
                }

                rows.push(<ProductRow key={"prod"+product.name} product={product}/>);
            }
        }

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
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;