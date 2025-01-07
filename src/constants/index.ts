export const env = import.meta.env.MODE;
export const BASE_URL=env === 'development' ? 'lost-ark-tools/' : '';