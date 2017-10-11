
import { nothing } from './nothing';

export const noop = (...args: any[]): void => {
	nothing(args);
};
