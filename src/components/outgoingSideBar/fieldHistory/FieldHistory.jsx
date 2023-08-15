import React, {useContext} from "react";
import classes from './FieldHistory.module.css';
import { Link } from "react-router-dom";
import Context from "../../Context";

const FieldHistory = () => {
    const value=useContext(Context);
    const searchHistory=value.searchHistory;

        return (
          searchHistory.length > 0 &&
          searchHistory.map((item, index) => (
            <li key={index} onClick={() => value.handleSearchItemClick(item)}> 
              <Link to="#" className={classes.cityBox}>
                <div className={classes.wrapperCity}>
                  <span className={classes.city}>{item}</span>
                  <svg
                    className={`${classes.arrow} ${classes.display}`}
                    width="11"
                    height="15"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.09312 0L0 1.7625L6.79892 7.5L0 13.2375L2.09312 15L11 7.5L2.09312 0Z"
                      fill="#ACACAC"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))
        );
    
}
export default FieldHistory;

