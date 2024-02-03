import { instance } from "./index";

export const getCategory = async () => {
  const token = import.meta.env.VITE_API_TOKEN; 
  const res = await instance.get("/category", {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  return res;
}
