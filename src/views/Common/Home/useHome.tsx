import { getUsers } from 'api';
import { useEffect, useState } from 'react';
import { response } from 'types';

const useHome = () => {
	const [details, setDetails] = useState<response | null>(null);

	useEffect(() => {
		getUsers().then((res: any) => setDetails(res));
	}, []);

	return {
		usersList: details?.data || [],
	};
};

export default useHome;
