export interface UserProps {
	first_name: string;
	email: string;
	last_name: string;
	avatar: string;
	id?: number;
}

export interface response {
	data: UserProps[];
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
}
