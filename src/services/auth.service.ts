import http from "../http-common";


/**
 * Sends a POST request to the server with the user's email and password for authentication.
 * If the login is successful, the user data is stored in the local storage.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @returns A Promise that resolves to the response data from the server, which includes an accessToken property if the login was successful.
 */
export const login = (email: string, password: string) => { 
    return http.post("/auth/login", { email, password })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
    });
};

/**
 * Removes the user data from the local storage.
 */
export const logout = () => { 
    localStorage.removeItem('user');
};

/**
 * Retrieves the user data from the local storage.
 * @returns The user data as an object, or null if there is no user data stored.
 */
export const getCurrentUser = () => { 
    const userStr = localStorage.getItem('user');
    if (userStr){
        return JSON.parse(userStr);
    }
    
    return null;
};