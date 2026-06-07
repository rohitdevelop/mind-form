import axios from "./axios";

export const getDashboard = () => axios.get("/dashboard");
export const getStats = () => axios.get("/dashboard/stats");
