export default interface IProductData { 
    id?: any | null;
    title: string;
    description: string;
    batchNo: string;
    quantity: number;
    expirationDate: string;
    price: number;
    inStock: boolean;
}