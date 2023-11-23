import { Product } from "src/app/models/product.model";
import { createReducer, on } from "@ngrx/store"
import { addProduct } from "./products.actions";

const localStorageInfo = localStorage.getItem("cartList")
const initState: Product[] = localStorageInfo ? JSON.parse(localStorageInfo) : []

export const productsReducer = createReducer(
    initState,
    on(addProduct, (oldProducts, newProduct) => {
        const newState = [...oldProducts, newProduct.product]
        localStorage.setItem("cartList", JSON.stringify(newState))
        return newState
    })
)

