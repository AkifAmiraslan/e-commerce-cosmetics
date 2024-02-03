import { instance } from "."

export const getProducts = async () => {
    const res = await instance.get("/products");
    return res.data;
}