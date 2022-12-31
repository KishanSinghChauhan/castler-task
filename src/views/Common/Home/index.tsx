import { ReactComponent as SearchIcon } from 'assets/search.svg';
import Input from 'components/Input';
import UserCard from 'components/UserCard';
import { UserProps } from 'types';

import styles from './styles.module.scss';
import useHome from './useHome';

const Home = () => {
	const { usersList } = useHome();

	const users = () => (
		<>
			{usersList.map((_item: UserProps) => (
				<UserCard
					firstName={_item.first_name}
					lastName={_item.last_name}
					avatar={_item.avatar}
					email={_item.email}
				/>
			))}
		</>
	);
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<img src='/logo.png' alt='logo' className={styles.logo} />
			</div>
			<form className={styles.form}>
				<Input
					placeholder='Enter user number'
					type='number'
					className={styles.input}
				/>
				<button type='submit' className={styles.button}>
					<SearchIcon className={styles.icon} />
				</button>
			</form>
			<div className={styles.cardList}>{users()}</div>
		</main>
	);
};

export default Home;
