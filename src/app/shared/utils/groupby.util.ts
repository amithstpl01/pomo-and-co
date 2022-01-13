export const GroupByKey = (data: any, key: string) => {
	return data.reduce((r: any, a: any) => {
		r[a[key]] = r[a[key]] || [];
		r[a[key]].push(a);
		return r;
	}, Object.create(null));
};
