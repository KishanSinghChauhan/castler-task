import axiosInstance from 'utils/axiosInstance';

export const getUsers = async (params = {}) => {
	const users = await axiosInstance.get('/users', {
		params,
	});
	return users;
};

export const getUserById = async (id: number) => {
	const user = await axiosInstance.get(`/users/${id}`);
	return user;
};
