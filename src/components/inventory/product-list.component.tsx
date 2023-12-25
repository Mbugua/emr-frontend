import { Component, ChangeEvent } from "react";
import ProductDataService from "../../services/inventory.service";
import { Link } from "react-router-dom";
import IProductData from '../../types/product.type';

type Props = {};

type State = {
  products: Array<IProductData>,
  currentProduct: IProductData | null,
  currentIndex: number,
  searchTitle: string
};

export default class ProductList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveProducts() {
    ProductDataService.getAll()
      .then((response: any) => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(product: IProductData, index: number) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
  }

  removeAllProducts() {
    ProductDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });

    ProductDataService.findByTitle(this.state.searchTitle)
      .then((response: any) => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, products, currentProduct, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Inventory Catalog</h4>

          <ul className="list-group">
            {products &&
              products.map((product: IProductData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllProducts}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentProduct ? (
            <div>
              <h4>Product</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentProduct.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentProduct.description}
              </div>
              <div>
                <label>
                  <strong>Batch No:</strong>
                </label>{" "}
                {currentProduct.batchNo}
              </div>
              <div>
                <label>
                  <strong>Quantity:</strong>
                </label>{" "}
                {currentProduct.quantity}
              </div>
              <div>
                <label>
                  <strong>Expiry Date:</strong>
                </label>{" "}
                {currentProduct.expirationDate}
              </div>
              <div>
                <label>
                  <strong>Price</strong>
                </label>{" "}
                {currentProduct.price}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentProduct.inStock ? "Available" : "Out of Stock"}
              </div>

              <Link
                to={"/products/" + currentProduct.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Product...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}