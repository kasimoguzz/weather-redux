import { stateList } from "../../helpers/stateList";
import { useDispatch } from "react-redux";
import { getAllAsync } from "../../redux/App/AppSlice";
import { useEffect } from "react";

function InputChoose() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAsync("adana"));
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(getAllAsync(e.target.value));
  };

  return (
    <div className="input-box">
      <select className="comboBox" onChange={handleChange}>
        {stateList.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputChoose;
