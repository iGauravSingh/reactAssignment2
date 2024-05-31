"use client";

import { useEffect, useReducer } from "react";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

interface State {
  data: Product[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Product[] }
  | { type: ActionType.FAILED; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useProduct = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`${url}`);
      const ProductData = response.data;

      dispatch({ type: ActionType.SUCCESS, payload: ProductData });
    } catch (error: any) {
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response,
      });
    }
  };

  return { data, loading, error };
};

export default useProduct;
