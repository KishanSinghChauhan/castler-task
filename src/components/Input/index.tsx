import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './styles.module.scss';

type HTMLInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

type CustomProps = {
	className?: string;
	onSearch?: () => void;
};

type InputProps = HTMLInputProps & CustomProps;

const Input = forwardRef(({ className, ...rest }: InputProps, ref: any) => (
	<div className={styles.inputBox}>
		<input className={clsx(styles.input, className)} ref={ref} {...rest} />
	</div>
));

export default Input;

Input.defaultProps = {
	className: '',
	onSearch: () => null,
};
