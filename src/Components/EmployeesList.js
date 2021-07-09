import React from "react";
import { Table } from "reactstrap";

const EmployeesList = () =>{
  const employees = [
    {
      Name: "Sebatian",
      ID: 1,
	  Post:"Engineer"
    },
	{
      Name: "Lewis",
      ID: 2,
	  Post:"Supervisor"
    },
	{
      Name: "Lance",
      ID: 3,
	  Post:"Engineer"
    },
	{
      Name: "Max",
      ID: 4,
	  Post:"Project Manager"
    },
	{
      Name: "Lando Norris",
      ID: 5,
	  Post:"Driver"
    }
	
  ];

  return (

          <Table>
            <thead>
              <tr>
				
                <th>Name</th>
                <th>ID</th>
				<th>Post</th>
				<th></th>
				<th></th>
              </tr>
            </thead>
            <tbody>
              
			  {employees.map(emps =>{
				  
				  return(<tr><td>{emps.Name}</td>
						<td>{emps.ID}</td>
						<td>{emps.Post}</td>
						<td><input type="submit" value="Edit" /> </td>
						<td><input type="submit" value="Delete" /> </td>
						</tr>);
			  })}
                
                
             
            </tbody>
          </Table>
       
     );

  
}

export default EmployeesList;