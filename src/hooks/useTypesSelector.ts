import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state-management/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;