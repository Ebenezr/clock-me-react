import React from "react";

function AddNew() {
  return (
    <form className="addnew">
      <label>
        Name
        <input type="text" className="inputs" />
      </label>
      <label>
        Avatar
        <input type="text" className="inputs" />
      </label>
      <label>
        Password
        <input type="text" className="inputs" />
      </label>
      <label>
        Cornfirm Password
        <input type="text" className="inputs" />
      </label>
      <label>
        Department
        <select className="inputs">
          <option value="">Sales</option>
        </select>
      </label>

      <label>
        Staff-ID
        <input type="text" disabled className="inputs" />
      </label>
      <span className="checkbox">
        Admin ?
        <input type="checkbox" />
      </span>
      <button className="btn-submit">Create new</button>
    </form>
  );
}

export default AddNew;
