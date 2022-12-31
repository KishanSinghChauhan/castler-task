import { FC } from 'react';

type PaginationProps = {
	totalPages: number;
	currentPage: number;
};

const CustomPagination: FC<PaginationProps> = () => <h1>Pagination</h1>;

export default CustomPagination;
