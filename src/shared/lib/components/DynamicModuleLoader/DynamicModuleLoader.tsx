import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}
export type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoaderProps>> = (props) => {
    const { reducers, children, removeAfterUnmount } = props;
    const dispatch = useAppDispatch();

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (children);
};
