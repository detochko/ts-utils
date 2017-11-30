
export interface IMergeFunc {
	<F, S>(a1: F, a2: S): F & S;
	<F, S, T>(a1: F, a2: S, a3: T): F & S & T;
	<F, S, T, X>(a1: F, a2: S, a3: T, a4: X): F & S & T & X;
	<F, S, T, X, Z>(a1: F, a2: S, a3: T, a4: X, a5: Z): F & S & T & X & Z;
}

export const merge: IMergeFunc = (...props: any[]) => Object.assign({}, ...props);
