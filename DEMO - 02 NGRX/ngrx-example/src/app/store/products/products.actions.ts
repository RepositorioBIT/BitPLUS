import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const addProduct = createAction(
    "[Products component] Add product",
    props<{product:Product}>()
);