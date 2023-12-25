import http from "../http-common";

import  IProductData  from "../types/product.type";

class ProductDataService {
    /**
     * Class responsible for handling CRUD operations for inventory products.
     * Uses the `http` (axios) module to make HTTP requests to the server.
     */

    /**
     * Sends a GET request to retrieve all products from the server.
     * @returns A promise that resolves to the response data.
     */
    getAll() {
        return http.get("/products");
    }

    /**
     * Sends a GET request to retrieve a product by its ID.
     * @param id - The ID of the product.
     * @returns A promise that resolves to the response data.
     */
    get(id: string) { 
        return http.get<IProductData>(`/products/${id}`);
    }

    /**
     * Sends a POST request to create a new product.
     * @param data - The data of the new product.
     * @returns A promise that resolves to the response data.
     */
    create(data: IProductData) { 
        return http.post<IProductData>("/products", data);
    }

    /**
     * Sends a PUT request to update a product by its ID.
     * @param data - The updated data of the product.
     * @param id - The ID of the product.
     * @returns A promise that resolves to the response data.
     */
    update(data: IProductData, id:any) {
        return http.put<IProductData>(`/products/${data.id}`, data);
    }

    /**
     * Sends a DELETE request to delete a product by its ID.
     * @param id - The ID of the product.
     * @returns A promise that resolves to the response data.
     */
    delete(id: any) {
        return http.delete(`/products/${id}`);
    }

    /**
     * Sends a DELETE request to delete all products.
     * @returns A promise that resolves to the response data.
     */
    deleteAll() { 
        return http.delete("/products");
    }

    /**
     * Sends a GET request to find products by their title.
     * @param title - The title of the products to find.
     * @returns A promise that resolves to the response data.
     */
    findByTitle(title: string) { 
        return http.get<IProductData>(`/products?title=${title}`);
    }

    /**
     * Sends a GET request to find products by their batch number.
     * @param batchNo - The batch number of the products to find.
     * @returns A promise that resolves to the response data.
     */
    findByBatchNo(batchNo: string) {
        return http.get<IProductData>(`/products?batchNo=${batchNo}`);
    }
}



export default new ProductDataService();