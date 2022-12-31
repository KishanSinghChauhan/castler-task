import { ReactComponent as SearchIcon } from 'assets/search.svg';
import Input from 'components/Input';
import Loader from 'components/Loader';
import CustomPagination from 'components/Pagination';
import UserCard from 'components/UserCard';
import { UserProps } from 'types';

import styles from './styles.module.scss';
import useHome from './useHome';

const Home = () => {
	const {
		usersList,
		searchValue,
		handleSubmit,
		handleChange,
		loading,
		pagination,
		handlePageChange,
	} = useHome();

	const users = () => (
		<>
			{usersList.map((_item: UserProps) => (
				<UserCard
					firstName={_item.first_name}
					lastName={_item.last_name}
					avatar={_item.avatar}
					email={_item.email}
					key={_item.id}
				/>
			))}
		</>
	);
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<img src='/logo.png' alt='logo' className={styles.logo} />
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					placeholder='Enter user'
					value={searchValue}
					onChange={e => handleChange(e.target.value)}
				/>
				<button type='submit' className={styles.button}>
					<SearchIcon className={styles.icon} />
				</button>
			</form>
			<div className={styles.cardList}>
				{usersList.length > 0 && !loading && users()}
				{usersList.length === 0 && !loading && (
					<div className={styles.noUser}>
						<img src='/no-user.png' alt='no user' />
						<h3>No User Found</h3>
					</div>
				)}
				{loading && (
					<div className={styles.loader}>
						<Loader />
					</div>
				)}
			</div>
			{usersList.length > 1 && (
				<CustomPagination
					totalPages={pagination?.totalPages}
					currentPage={pagination?.currentPage}
					onChange={handlePageChange}
				/>
			)}
		</main>
	);
};

export default Home;
