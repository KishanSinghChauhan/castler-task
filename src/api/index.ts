import axiosInstance from 'utils/axiosInstance';

export const getUsers = async () => {
	const users = await axiosInstance.get('/users');
	return users;
};

export const getUserById = async (id: number) => {
	const user = await axiosInstance.get(`/users/${id}`);
	return user;
};
