import { EnhancedStore } from "@reduxjs/toolkit";
import { App, inject, reactive } from "vue";
import { TypedRootState } from ".";

export const storeKey = Symbol("Redux-Store");

export const useStore = () => {
  const store = <{ state: TypedRootState }>inject(storeKey);
  return store;
};

export const createRedux = (store: EnhancedStore) => {
  const _state = reactive<{ state: TypedRootState }>({
    state: store.getState(),
  });
  const redux = {
    install: (app: App) => {
      app.provide(storeKey, _state);
      store.subscribe(() => {
        _state.state = store.getState();
      });
    },
  };
  return redux;
};
