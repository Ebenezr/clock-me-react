import React from 'react'

const UserList=({employees,renderUser})=> {
  return (
    <div className="results">
    {employees.map((users) => (
      <span
        key={users.id}
        onClick={() => {
          renderUser(users.id);
        }}
      >
        <h4>{users.name}</h4>
        <small>{users.department}</small>
      </span>
    ))}
  </div>
  )
}

export default UserList