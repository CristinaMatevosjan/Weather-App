import React, { useContext} from "react";
import classes from './FormSearch.module.css';
import Context from "../../Context";

const FormSearch = () => {
  const value = useContext(Context);

  return (
    <div className="div">
      <form
        className={classes.searchField}
        onSubmit={value.getCity}
      >
        <input className={classes.searchInput} type="search" name="city" />
        <svg
          className={classes.searchIcon}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2916 15.8816L11.7316 10.3216C12.8616 8.77163 13.3616 6.74163 12.7116 4.58163C12.0316 2.35163 10.1416 0.601626 7.86163 0.141626C6.80059 -0.0833671 5.70015 -0.0397302 4.66026 0.268573C3.62037 0.576877 2.67398 1.14008 1.90703 1.90703C1.14008 2.67398 0.576877 3.62037 0.268573 4.66026C-0.0397302 5.70015 -0.0833671 6.80059 0.141626 7.86163C0.601626 10.1516 2.35163 12.0416 4.58163 12.7116C6.74163 13.3616 8.77163 12.8616 10.3216 11.7316L15.8816 17.2916C16.0686 17.4786 16.3222 17.5836 16.5866 17.5836C16.8511 17.5836 17.1046 17.4786 17.2916 17.2916C17.4786 17.1046 17.5836 16.8511 17.5836 16.5866C17.5836 16.3222 17.4786 16.0686 17.2916 15.8816ZM2.00163 6.50163C2.00163 4.01163 4.01163 2.00163 6.50163 2.00163C8.99163 2.00163 11.0016 4.01163 11.0016 6.50163C11.0016 8.99163 8.99163 11.0016 6.50163 11.0016C4.01163 11.0016 2.00163 8.99163 2.00163 6.50163Z"
            fill="#ACACAC"
          />
        </svg>
        <button className={classes.searchBtn}>Найти</button>
      </form>
      {value.citySearch.err && (
        <p className={classes.error}>{value.citySearch.err}</p>
      )}
    </div>
  );
};
export default FormSearch;