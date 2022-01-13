interface MenuItem {
	icon: {
		name: string;
		width: string;
		height: string;
	};
	title: string;
	path: string;
}

export const Menus: MenuItem[] = [
	{
		icon: {
			name: 'home',
			width: '24px',
			height: '24px',
		},
		title: 'Home',
		path: '/home',
	},
	{
		icon: {
			name: 'order',
			width: '24px',
			height: '24px',
		},
		title: 'Orders',
		path: '',
	},
	{
		icon: {
			name: 'notification',
			width: '24px',
			height: '24px',
		},
		title: 'Notification',
		path: '',
	},
	{
		icon: {
			name: 'help-and-support',
			width: '24px',
			height: '24px',
		},
		title: 'Help & Support',
		path: '',
	},
	{
		icon: {
			name: 'setting',
			width: '24px',
			height: '24px',
		},
		title: 'Settings',
		path: '',
	},
];
