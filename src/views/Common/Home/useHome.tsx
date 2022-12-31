import { getUserById, getUsers } from 'api';
import { FormEvent, useEffect, useState } from 'react';
import { UserProps } from 'types';

const useHome = () => {
	const [pagination, setPagination] = useState<any>(null);
	const [usersList, setUsersList] = useState<UserProps[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');

	const getUsersDetails = (params = {}) => {
		setLoading(true);
		getUsers(params)
			.then((res: any) => {
				setUsersList(res.data);
				setPagination({
					totalPages: res.total_pages,
					currentPage: res.page,
				});
				setLoading(false);
			})
			.catch(() => setLoading(false));
	};

	const getUserDetailById = () => {
		setLoading(true);
		getUserById(Number(searchValue))
			.then((res: any) => {
				setUsersList([res.data]);
				setLoading(false);
			})
			.catch(() => {
				setUsersList([]);
				setLoading(false);
			});
	};

	useEffect(() => {
		getUsersDetails();
	}, []);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchValue) {
			getUserDetailById();
		} else {
			getUsersDetails();
		}
	};

	const handleChange = (val: string) => {
		const regex = /[0-9]|\./;
		if (val === '') setSearchValue('');
		if (regex.test(val)) setSearchValue(val);
	};

	const handlePageChange = (pageNumber: number) => {
		getUsersDetails({ page: pageNumber });
	};

	return {
		usersList,
		pagination,
		handleChange,
		searchValue,
		handleSubmit,
		loading,
		handlePageChange,
	};
};

export default useHome;
