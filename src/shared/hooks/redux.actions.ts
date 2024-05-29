import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispath } from "./redux.dispath";

const Actions = {};

export const useActions = () => bindActionCreators(Actions, useDispath());
