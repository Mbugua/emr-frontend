import http from "../http-common";

export const getPublicContent = () => {
    return http.get("/public");
};


export const getUserDashboard = () => { 
    return http.get("/user/dashboard");
};

export const getAdminDashboard = () => { 
    return http.get("/admin/dashboard");
};