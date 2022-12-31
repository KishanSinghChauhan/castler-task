import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';

type PaginationProps = {
	totalPages: number;
	currentPage: number;
	// eslint-disable-next-line no-unused-vars
	onChange: (page: number) => void;
};

const CustomPagination: FC<PaginationProps> = ({
	totalPages = 0,
	currentPage = 0,
	onChange,
}) => {
	const items = [];
	for (let number = 1; number <= totalPages; number += 1) {
		items.push(
			<button
				key={number}
				className={clsx(styles.paginationItem, {
					[styles.active]: currentPage === number,
				})}
				onClick={() => onChange(number)}
				type='button'
			>
				{number}
			</button>
		);
	}

	return <div className={styles.pagination}>{items}</div>;
};

export default CustomPagination;
