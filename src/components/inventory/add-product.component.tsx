import { Component, ChangeEvent } from "react";
import ProductDataService from "../../services/inventory.service";
import IProductData from '../../types/product.type';

type Props = {};

type State = IProductData & {
  submitted: boolean
};

export default class AddProduct extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.newProduct = this.newProduct.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            batchNo: "",
            quantity: 0,
            expirationDate: "",
            inStock: false,
            price: 0,
            submitted: false
        };
    }

    onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            description: e.target.value
        });
    }

  saveProduct() {
    const data: IProductData = {
      title: this.state.title,
      description: this.state.description,
      batchNo: this.state.batchNo,
      quantity: this.state.quantity,
      expirationDate: this.state.expirationDate,
      inStock: this.state.inStock,
      price: this.state.price,
    };

    ProductDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          batchNo: response.data.batchNo,
          expirationDate: response.data.expirationDate,
          inStock: response.data.inStock,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

    newProduct() {
        this.setState({
            id: null,
            title: "",
            description: "",
            batchNo: "",
            expirationDate: "",
            inStock: false,
            submitted: false
        });
    }

    render() {
        const { submitted, title, description } = this.state;

        return (
            <div className="submit-form">
                {submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newProduct}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button onClick={this.saveProduct} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
