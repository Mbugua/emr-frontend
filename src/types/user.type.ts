
export default interface IUser { 
    id?: any | null,
    name: string,
    email: string,
    password: string,
    role?: Array<string>,
}