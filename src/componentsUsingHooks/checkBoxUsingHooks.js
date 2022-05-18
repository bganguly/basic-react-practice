import { useState} from "react";

const CheckBoxUsingHooks = () => {
  let [checked, setChecked] = useState(false);

  let handleChange = () => {
      setChecked( () => !checked)
  }

  return <>
    <input  
      type="checkbox"
      value={checked}
      onChange={handleChange}
    />
    <p>the value of checkbox is {checked ? "checked" : "not checked"}</p>
  </>
  

}

export default CheckBoxUsingHooks;