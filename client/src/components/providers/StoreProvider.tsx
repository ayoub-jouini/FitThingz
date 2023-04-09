"use client";
import { Provider } from "react-redux";

import store from "../../store/store";

import { checkAuth } from "../../store/features/auth/checkAuthThunk";

store.dispatch(checkAuth());

interface Props {
  children: any;
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
