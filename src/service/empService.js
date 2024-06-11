import axios from "axios";


const BASE_API_URL="http://localhost:8080/api/v1"

class EmpService {

    save(Emp){
       return axios.post(BASE_API_URL+"/save",Emp);
    }

    getAllEmp(){
        return axios.get(BASE_API_URL+"/");
    }

    getEmpById(id){
        return axios.get(BASE_API_URL+"/"+id);
    }

    deleteEmp(id){ 
        return axios.delete(BASE_API_URL+"/delete/"+id); 
    }

    updateEmp(id,Emp){
        return axios.put(BASE_API_URL+"/update/"+id,Emp);
    }

}

export default new EmpService();