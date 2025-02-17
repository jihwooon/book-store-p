import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((category) => {
     const categoryWithAll = [
       {
         id: null,
         name: "전체"
       },
       ...category
     ]

      setCategories(categoryWithAll)
    });
  }, []);

  return { categories }
}
