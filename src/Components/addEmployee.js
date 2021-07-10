//import React,{useState} from "react";
import {useForm} from "react-hook-form";
import * as React from 'react';




/* type FormValues = {
	name: string;
	id: Number;
	post: string;
  };
 */

const AddEmployee = ({SetEmpDetails}) =>{

	const {register, handleSubmit} = useForm();


	var [show, setShow]=React.useState(false);
	//var [EmpDetails, NewEmp]=useState("");

	const addEmp = (mode) =>{
		console.log(mode);
		SetEmpDetails(mode);
		
	}

	const OnSubmit = (data) =>{
		alert();
		console.log(data);
		
	}



		return(

<>
			<input type="button" style={{margin :"20px"}} class=" waves-light btn-large" value="Add Employees" onClick={()=>setShow(true)} /> 

			{show ?
				<form onsubmit={handleSubmit(OnSubmit)}>
					<div class="row" style={{margin :"20px"}}>
					<div class="col s12 m6">
					<div class="card blue-grey darken-1">
						<div class="card-content white-text">
						<span class="card-title">Add Employee Details</span>
						<p>Name:</p>
						<input type="text" {...register("name", { required: true })} id='name'/>
						<p>ID:</p>
						<input type="text" {...register("id", { required: true })} id="id"/>
						<p>Post:</p>
						<input type="text" {...register("post", { required: true })} id="post"/>
						</div>
						<div class="card-action">
						<input type="button" style={{margin :"5px"}} value="Cancel" class="waves-effect waves-light btn-small" onClick={()=>{setShow(false);}} />
						<input type="submit" style={{margin :"5px"}} value="Add Employee" class="waves-effect waves-light btn-small" 
						onClick={()=>{
							setShow(false);
							var data={
								
									Name: document.getElementById("name").value,
									ID: document.getElementById("id").value,
									Post:document.getElementById("post").value
								  
							};
							addEmp(data);
							;
							}}/>
						
						</div>
					</div>
					</div>
				</div>
				</form>



			:null }
			</>
		);

};




export default AddEmployee; 

