import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {UserRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Userlist() {
    const [data,setData] = useState(UserRows);
    const handelDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'userName', headerName: ' User', width: 200 ,  renderCell:(params) => {return(
            <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        )
            
        }},
        { field: 'email', headerName: 'email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transcation',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell:(params) =>{
                return(
                   <> 
                   <Link to={"/Users/"+params.row.id}>
                   <button className="userListEdit">Edit</button>
                   </Link>
                   <DeleteOutline className="userListDelete" onClick={()=>handelDelete(params.row.id)}/>
                   </>
                );

            }

        },
      ];
      
      
    return (
        <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
            
        </div>
    )
}
