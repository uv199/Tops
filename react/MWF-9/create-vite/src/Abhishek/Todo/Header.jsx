import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'

function Header() {
    const [data, setData]= useState([]);
    const [newdata, setNewData]=useState('')

    const handleSubmit =()=>
    {
        setData([...data, newdata])
        setNewData('')
    }

  return (

      <div className='header'>
          <h1>TODO-LIST</h1>
         <div className='d-flex'>
          <Input className=' border border-black' placeholder='text here.....' value={newdata} onChange={(e)=>setNewData(e.target.value)}/>
          <Button color='danger' onClick={handleSubmit}>Add</Button>
      </div>
      <div className="container">
        <Table className="mt-4 border border-dark">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Task</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </Table>
      </div>
      </div> 
  )
}

export default Header
