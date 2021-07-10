import AddEmployee from './Components/AddEmployee';
import EmployeesList from './Components/EmployeesList';
//import FormTest from './Components/FormTest';
import './App.css';
import React, {useState} from 'react';




function App() {

	const [EmpDetails,SetEmpDetails]=useState("");
  return (
	<>
	  <AddEmployee SetEmpDetails={SetEmpDetails}/>
	  <EmployeesList EmpDetails={EmpDetails}/>
	 
	  
	 </>
  );
}

export default App;
