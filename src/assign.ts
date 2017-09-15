
export const assign = <T extends U, U>(state: T, data: U): T => Object.assign({}, state, data);
