import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './styles.module.scss';

type HTMLInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

type CustomProps = {
	className?: string;
};

type InputProps = HTMLInputProps & CustomProps;

const Input = forwardRef(({ className, ...rest }: InputProps, ref: any) => (
	<input className={clsx(styles.input, className)} ref={ref} {...rest} />
));

export default Input;

Input.defaultProps = {
	className: '',
};
