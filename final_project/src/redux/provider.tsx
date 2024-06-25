"use client";
import { Provider } from "react-redux";
import store from "./store";

interface int{
  children:React.ReactNode
}

const Provide:React.FC<int> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default Provide;
