import axios from "./axios";

export const getHabits = () => axios.get("/habits");
export const createHabit = (payload) => axios.post("/habits", payload);
export const updateHabit = (id, payload) => axios.put(`/habits/${id}`, payload);
export const deleteHabit = (id) => axios.delete(`/habits/${id}`);
