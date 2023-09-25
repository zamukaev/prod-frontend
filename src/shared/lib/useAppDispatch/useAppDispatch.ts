import { createReduxStore } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
