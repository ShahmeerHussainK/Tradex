import axiosInstance from "./axios";

export const getMatches = async () => {
  const result = await axiosInstance.get('/matches')
  console.log(result)
  return result.data;
};

export const getEvents= async () => {
  const result = await axiosInstance.get('/events')
  console.log(result)
  return result.data;
};

export const getEventDetail= async (id) => {
  const result = await axiosInstance.get(`/event/${id}`)
  console.log(result)
  return result.data;
};

export const buyShare= async (payload) => {
  const result = await axiosInstance.post(`/api/market/buy-share`,payload)
  console.log(result)
  return result.data;
};