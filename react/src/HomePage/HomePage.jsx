import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, productActions } from '../_actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: '',
            productName: '',
            productType: 'type 1'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleProductSubmit = this.handleProductSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getProducts();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    addProductVisible() {
        return (e) => this.props.addProductVisible();
    }
    handleProductSubmit(e) {
        e.preventDefault();
        const { productId, productName, productType } = this.state;
        this.setState({
            productId: '',
            productName: '',
            productType: 'type 1'
        })
        this.props.handleProductSubmit(productId, productName, productType);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { user, users, product } = this.props;
        const { productId, productName, productType } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <div className="row form-group">
                  <form name="form" onSubmit={this.handleProductSubmit}>
                      <input type="hidden" name="productId"></input>
                      <div className="col-sm-5">
                        <input className="form-control" type="text" name="productName" value={productName} onChange={this.handleChange}></input>
                      </div>
                      <div className="col-sm-5">
                        <select className="form-control col-sm-3" name="productType" value={productType} onChange={this.handleChange}>
                            <option value="type 1">Type 1</option>
                            <option value="type 2">Type 2</option>
                            <option value="type 3">Type 3</option>
                            <option value="type 4">Type 4</option>
                        </select>
                      </div>
                      <div className="col-sm-1">
                        <button className="btn btn-success">Add</button>
                      </div>
                  </form>
                </div>
                <h1>All Product</h1>
                {this.props.product.length !== 0 ? (
          <table
            style={{ marginTop: "60px" }}
            className="table table-hover table-dark"
          >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.product.map(todo => (
                <tr key={todo.id}>
                  <td>
                    {todo.productName}
                  </td>
                  <td>
                  {todo.productType}
                  </td>
                  <td>
                    <button class="btn btn-danger" onClick={() => this.props.deleteProduct(todo.id)}><i class="fa fa-close"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : "" }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication, product } = state;
    const { user } = authentication;
    return { user, users, product };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    addProductVisible: productActions.addProductVisible,
    handleProductSubmit: productActions.handleProductSubmit,
    getProducts: productActions.getProducts,
    deleteProduct: productActions.deleteProduct,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };