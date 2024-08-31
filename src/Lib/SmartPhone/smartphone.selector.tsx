import { RootState } from "../store";

import { ProductsState } from "./smartphone.slice";

export const getAllProductSelector = (state: RootState) =>
  state.products as ProductsState;
