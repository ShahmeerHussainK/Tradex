import axiosInstance from "./axios";

export const getUsers = async () => {
  const result = await axiosInstance.get('/users')

   const mappedResult = result.data.map((item)=>{
    return{
      id:item.id,
      bettor:`${item.first_name} ${item.last_name}`,
      email: item.email,
      mobile:item.mobile_number,
      country: item.country,
      joinedAt: item.created_at,
      balance: item.sweeps_points,
      ban:item.ban,
    }
  })
  return mappedResult;
};

export const getUsersDetail = async (id) => {
  const result = await axiosInstance.get(`/users/${id}`)
  return result.data;
};

export const postUsersDetail = async (payload,id) => {
  console.log('in',id)
  const result = await axiosInstance.patch(`/api/admin/user-profile/edit/${id}`,payload)
  return result;
};

export const banUser = async (user_id,message) => {
  const result = await axiosInstance.post(`/ban_unban?user_id=${user_id}&message=${message}`)
  return result;
};

export const addSubUserBalance = async (payload) => {
  const result = await axiosInstance.post('/modifyBalance',payload)
  return result;
};
