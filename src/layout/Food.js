

import React from "react";
const Food = (props) => {
  return (
    <>
      <label>
        <input type="checkbox" name="check1" checked={props.isChecked} onChange={props.handleCheckbox} />
        <span>True</span><br />
      </label>
      <label>
        <input type="checkbox" name="check2"
          checked={!props.isChecked} onChange={props.handleCheckbox} />
        <span>False</span><br />
      </label>
    </>
  )

}
export default Food;