// import { HttpParams } from '@angular/common/http';

// export const QueryString = (obj: object) => {
//   let params = new HttpParams();
//   Object.keys(obj).map((key) => (params = params.set(key, obj[key])));
//   return params.toString();
// };

export const QueryString = (obj: any) =>
	Object.keys(obj)
		.map((key) => `${key}=${obj[key]}`)
		.join('&');
