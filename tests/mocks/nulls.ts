
export const nulls = (cb: (item: any) => any): any => [
	undefined,
	null,
	Infinity,
	-Infinity,
	0,
	-0,
	NaN
].forEach(cb);

export default nulls;
