import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns,userRows } from '../datatables';
import {Link} from 'react-router-dom'

const DataBase = () => {
  
  const actionCell = [{field: 'action',headerName:'Action', width: 200 , renderCell:()=>{
    return(
      <div className='CellAction'>
      <Link to='/users/test' style={{textDecoration:'none'}}><div className='viewbutton'>View</div></Link>
        <div className='deletebutton'>Delete</div>
      </div>
    )
  }}]
  return (
    <div>
      <div className='Datatitle'>
        Add New user 
        <Link to='/users/new' className='link'>Add New</Link>
      </div>
         <DataGrid style={{color:'gray'}}
        rows={userRows}
        columns={userColumns.concat(actionCell)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
       />
    </div>
  )
}

export default DataBase
