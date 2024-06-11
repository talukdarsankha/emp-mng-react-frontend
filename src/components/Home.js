import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import empService from '../service/empService';
import { Link } from 'react-router-dom';

function Home() {
    const [msg,setMsg] = useState("");
    const[empList,setEmpList]=useState([]);
    useEffect(()=>{init()},[])

    const init = ()=>{
        empService.getAllEmp().then((res)=>{
            setEmpList(res.data);
          }).catch((error)=>{
            console.log(error);
          })
    }


    const deleteEmp = (id)=>{
        empService.deleteEmp(id).then((res)=>{
            setMsg("Emp Deleted Successfully...");
            init();
        }).catch((error)=>console.log(error));
    }

  return (


    <div>
     
      <h1>Home Page.</h1>
      {msg && <p className='text-center text-success'>{msg}</p>}
      <div className='container'>
         
      <table class="table">
  <thead>
  <tr>
      <th scope="row">sl No</th>
      <td>First Name</td>
      <td>Last Name</td>
      <td>@Email</td>
      <td>Address</td>
      <td>Salary</td>
      <td>Action</td>
    </tr>
  </thead>
  <tbody>
{empList.map((eo,i)=>(
    <tr>
      <th scope="row">{i+1}</th>
      <td>{eo.firstName}</td>
      <td>{eo.lastName}</td>
      <td>{eo.email}</td>
      <td>{eo.address}</td>
      <td>{eo.salary}</td>
      <td> <Link  className='btn btn-success' to={"/editEmp/"+eo.id}>Edit</Link>
           <a  className="btn btn-danger" onClick={()=>deleteEmp(eo.id)} >Delete</a> </td>
    </tr>
))}
   
  </tbody>
</table>

      </div>
    </div>
  )
}

export default Home
