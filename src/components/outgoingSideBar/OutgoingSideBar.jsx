import React from "react";
import classes from './OutgoingSideBar.module.css';
import FieldHistory from "./fieldHistory/FieldHistory";
import ApiForecast from "../api/ApiForecast";

const OutgoingSideBar = ({ isOpen, setOutgoingSideBarStatus}) => {
  return (
    <div>
      <div className={`${classes.searchBox} ${isOpen ? classes.open : ""}`}>
        <div className={classes.searchContent}>
          <button
            className={classes.cross}
            onClick={() => {
              setOutgoingSideBarStatus(false);
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
                fill="#48484A"
              />
            </svg>
          </button>
          <ApiForecast />
        </div>
        <div className={classes.historyBox}>
          <ul className={classes.listCity}>
            <FieldHistory />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default OutgoingSideBar;

