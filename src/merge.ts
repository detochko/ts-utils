
export interface IMergeFunc {
	<F, S>(first: F, second: S): F & S;
	<F, S, T>(first: F, second: S, third: T): F & S & T;
	<F, S, T, X>(first: F, second: S, third: T, fourth: X): F & S & T & X;
}

export const merge: IMergeFunc = (...props: any[]) => Object.assign({}, ...props);
