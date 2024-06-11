import React, { useEffect, useState } from 'react';
import empService from '../service/empService';
import { useNavigate, useParams } from 'react-router-dom';


function EditEmp() {


    const data= useParams();
    console.log(data);
    console.log(data.id);

    useEffect(()=>{
        empService.getEmpById(data.id).then((res)=>{
            setEmp(res.data)
        }).catch()
    },[])

    const navigate= useNavigate();

    const [emp,setEmp] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        salary:""
    })

    const handelChange=(e)=>{
      const value = e.target.value;
      setEmp({...emp,[e.target.name]:value})
    }

    const [msg,setMsg] = useState("");

    const updateEmp = (e)=>{
        e.preventDefault();

        empService.updateEmp(emp.id,emp).then((res)=>{
          setMsg("Emp updated Successfully...");
            setEmp({
                firstName:"",
                lastName:"",
                email:"",
                address:"",
                salary:""
            })
            navigate("/")
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>

<div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Edit Employee</div>

                   {msg && <p className='text-center text-success'>{msg}</p>}

                    <div className="card-body">
                        <form onSubmit={(e)=>updateEmp(e)}>
                            <div className="mb-3">
                                <label htmlFor="">First Name</label>
                                <input type="text" className='form-control' name='firstName' value={emp.firstName} onChange={(e)=>handelChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className='form-control' name='lastName' value={emp.lastName} onChange={(e)=>handelChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <input type="text" className='form-control'  name='email' value={emp.email}
                                onChange={(e)=>handelChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">Address</label>
                                <input type="text" className='form-control' name='address' value={emp.address} onChange={(e)=>handelChange(e)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">Salary</label>
                                <input type="text" className='form-control' name='salary' value={emp.salary}
                                onChange={(e)=>handelChange(e)}/>
                            </div>

                            <div className="text-center">
                                <button type='submit' className='btn btn-success'>Update</button>
                                <input type="reset" className="btn btn-danger" value="Reset"/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default EditEmp
