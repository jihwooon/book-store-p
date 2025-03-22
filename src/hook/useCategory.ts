import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";
import { useLocation } from "react-router";

export const useCategory = () => {
  const localtion = useLocation()
  const [categories, setCategories] = useState<Category[]>([]);

  const setAtive = () => {
    const params = new URLSearchParams(location.search);

    if (params.get('category_id')) {
      setCategories((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.id === Number(params.get('category_id')),
          }
        })
      })
    }
  }

  useEffect(() => {
    fetchCategory().then((category) => {
      const categoryWithAll = [
        {
          id: null,
          name: "전체",
        },
        ...category,
      ]

      setCategories(categoryWithAll)
      setAtive()
    });
  }, []);

  useEffect(() => {
    setAtive();
  }, [localtion.search])

  return { categories }
}
