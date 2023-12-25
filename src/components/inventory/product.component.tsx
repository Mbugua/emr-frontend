// import { Component, ChangeEvent } from "react";

// import IProductData from "../../types/product.type";
// import ProductDataService from "../../services/inventory.service";
// import { useParams } from "react-router-dom";
// // import { RouteComponentProps } from "react-router-dom";
// // interface RouterProps {
// //     id: string,
// // }
// // type Props = RouteComponentProps<RouterProps>;

// interface productParams {
//     id: string,
// }
// type Props = productParams;

// type State = {
//     currentProduct: IProductData,
//     message: string,
// }

// export default class Product extends Component<Props,State>{ 
//   constructor(props: Props) {
//     super(props);

//     this.onChangeTitle = this.onChangeTitle.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.getProduct = this.getProduct.bind(this);
//     this.updateProduct = this.updateProduct.bind(this);
//     this.deleteProduct = this.deleteProduct.bind(this);
//     this.updateStock = this.updateStock.bind(this);

//     this.state = {
//       currentProduct: {
//         id: null,
//         title: "",
//         description: "",
//         batchNo: "",
//         quantity: 0,
//         expirationDate: "",
//         price: 0.0,
//         inStock: false,
//       },
//       message: "",
//     };
//   }

// componentDidMount(): void {
//     this.getProduct(this.props.id);
//   }

//     onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
//         const title= e.target.value;
//         this.setState( (prevState)=> ({
//                 currentProduct: {
//                     ...prevState.currentProduct,
//                     title: title
//                 }
//         }));
//     }

//     onChangeDescription(e: ChangeEvent<HTMLInputElement>) { 
//         const description= e.target.value;
//         this.setState((prevState) => ({
//             currentProduct: {
//                 ...prevState.currentProduct,
//                 description: description
//             }
//         }));
//     }
//     getProduct(id: string) { 
//         ProductDataService.get(id)
//             .then((response: any) => {
//                 this.setState({
//                     currentProduct: response.data,
//                 });
//                 console.log(response.data);
//             }).catch((e: Error) => {
//                 console.log(e);
//             });
//     }

//     updateProduct() { 
//         ProductDataService.update(
//             this.state.currentProduct,
//             this.state.currentProduct.id
//         )
//            .then((response: any) => {
//                 this.setState({
//                     message: "The product was updated successfully!"
//                 });
//                 console.log(response.data);
//             }).catch((e: Error) => {
//                 console.log(e);
//             });
//     }

//   deleteProduct() {
    
//     ProductDataService.delete(this.state.currentProduct.id)
//       .then((response: any) => {
//         // this.props.history.push("/products");
//         // navigate("/products");
//         console.log(response.data);
//       })
//       .catch((e: Error) => {
//         console.log(e);
//       });
//   }

//     updateStock(status: boolean) { 
//         const data: IProductData = {
//             id: this.state.currentProduct.id,
//             title: this.state.currentProduct.title,
//             description: this.state.currentProduct.description,
//             batchNo: this.state.currentProduct.batchNo,
//             quantity: this.state.currentProduct.quantity,
//             expirationDate: this.state.currentProduct.expirationDate,
//             price: this.state.currentProduct.price,
//             inStock: status,
//         };


//         ProductDataService.update(data, this.state.currentProduct.id)
//             .then((response: any) => {
//                 this.setState({
//                     currentProduct: response.data,
//                     message: "The product was updated successfully!"
//                 });
//                 console.log(response.data);
//             }).catch((e: Error) => {
//                 console.log(e);
//             });
//     }


//   render() {
//       // const { id } = useParams<{ id?: string }>(); 
//         const { currentProduct } = this.state;
//         return (
//         <div>
//         {currentProduct ? (
//           <div className="edit-form">
//             <h4>Product</h4>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="title"
//                   value={currentProduct.title}
//                   onChange={this.onChangeTitle}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="description"
//                   value={currentProduct.description}
//                   onChange={this.onChangeDescription}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>
//                   <strong>Status:</strong>
//                 </label>
//                 {currentProduct.inStock ? "InStock" : "OutofStock"}
//               </div>
//             </form>

//             {currentProduct.inStock? (
//               <button
//                 className="badge badge-primary mr-2"
//                 onClick={() => this.updateStock(false)}
//               >
//                 Out of Stock
//               </button>
//             ) : (
//               <button
//                 className="badge badge-primary mr-2"
//                 onClick={() => this.updateStock(true)}
//               >
//                 In Stock
//               </button>
//             )}

//             <button
//               className="badge badge-danger mr-2"
//               onClick={this.deleteProduct}
//             >
//               Delete
//             </button>

//             <button
//               type="submit"
//               className="badge badge-success"
//               onClick={this.updateProduct}
//             >
//               Update
//             </button>
//             <p>{this.state.message}</p>
//           </div>
//         ) : (
//           <div>
//             <br />
//             <p>Please click on a Product...</p>
//           </div>
//         )}
//       </div>
//         )
//     }

// }
const Product: React.FC = () => {
  return (
        <div>
            <h1>Product</h1>
        </div>
    )
}

export default Product;