import type { TypedUseSelectorHook } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./RootReducer";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: 
    TypedUseSelectorHook<RootState> = useSelector;



