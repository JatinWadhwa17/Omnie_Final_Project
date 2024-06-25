import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countApi } from "@/redux/totalCountSlice";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const InitialDisplay = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const count = useSelector((state: RootState) => state.totalcount.totalcount);
  useEffect(() => {
    dispatch(countApi());
  }, []);

  const viewButton = () => {
    router.push("/partners");
  };

  return (
    <div className="homeDisplay">
      <div className="header">
        <h1>Partners</h1>
        <div className="buttons">
          <button className="styledButton">Add Partner</button>
          <button className="styledButton" onClick={viewButton}>
            View All
          </button>
        </div>
      </div>
      <p>Total</p>
      <h2>{count}</h2>
    </div>
  );
};

export default InitialDisplay;
