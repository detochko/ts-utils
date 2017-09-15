
export const spread = <T extends {}> (props: T): T => Object.assign({}, props);
