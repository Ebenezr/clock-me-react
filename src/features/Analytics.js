import React,{useRef} from "react";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";
import Employeecard from "../components/cards/Employeecard";

const Analytics = ({ searchTerm, employee, handleSearch, filterUsers,accName }) => {
const inputEl=useRef();
  const handleFilter=()=>{
    filterUsers(inputEl.current.value);

  }
  return (
    <section className="analytics__view">
      <article className="left">
        <Welcomeinfo accName={accName}/>
        <Starts employees={employee} />
        <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="users-list">
          <div className="user-title">
            <h3>Employees </h3>
            <select
              type="option"
              ref={inputEl}
              onChange={handleFilter}
            >
              <option value="all">Filter</option>
              <option value="System Design">System Design</option>
              <option value="sales">Sales</option>
              <option value="hospitality">Hospitality</option>
            </select>
          </div>
        </div>
      </article>
      <article className="right">
        {/* {employees.map((employee) => (
          <Employeecard
            key={employee.id}
            avatar={employee.avatar}
            admin={employee.admin}
            staffid={employee.staffid}
            department={employee.department}
            usrname={employee.name}
          />
        ))} */}
        {employee.map((employee) => (
          <Employeecard
          key={employee.id}
        
            avatar={employee.avatar}
            usrname={employee.name}
            staffid={employee.staffid}
            department={employee.department}
          />
        ))}
      </article>
    </section>
  );
};

export default Analytics;
