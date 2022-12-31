import { FC } from 'react';

import styles from './styles.module.scss';

interface UserProps {
	firstName: string;
	lastName: string;
	email: string;
	avatar: string;
}
const UserCard: FC<UserProps> = ({ firstName, lastName, email, avatar }) => (
	<div className={styles.cardWrapper}>
		<div className={styles.card}>
			<img
				src={avatar}
				alt={`${firstName} ${lastName} pic`}
				className={styles.image}
			/>
			<h3 className={styles.name}>
				{firstName} {lastName}
			</h3>
			<p className={styles.mail}>{email}</p>
			<p className={styles.desc}>
				Do not be scared of the truth because we need to restart the human
				foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’
				bed design but the back is...
			</p>
		</div>
	</div>
);

export default UserCard;
