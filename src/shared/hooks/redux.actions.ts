import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispath } from "./redux.dispath";
import { ParamsSliceActions } from "@/store/slices/params.slice";

const Actions = {
  ...ParamsSliceActions,
};

export const useActions = () => bindActionCreators(Actions, useDispath());
