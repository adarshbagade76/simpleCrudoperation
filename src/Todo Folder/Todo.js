import React, { useState } from 'react'




const Todo=()=> {
  const[InpItem, setInpItem]=useState({name: "", number: ""})
  const [AddItem, setAddItem] = useState([]);
  const[Toggle,setToggle]=useState(true)
  const[isedit,setIsEdit]=useState()

  

   const submitval = (e) => {
     e.preventDefault();      
     setAddItem([...AddItem,InpItem]) 
     
     
    }

  const UpdateItem=(e)=>{
    e.preventDefault();
      setToggle(true)
      let arr=AddItem.map((elem,i)=>i==isedit?InpItem:elem)
        setAddItem(arr);
        setInpItem({name:"",number:""});
        
    }
  
  const deleteItem=(id)=>{
   let a=AddItem.filter((elem,ind)=>{
     return ind !==id
  }
  )
  setAddItem(a)
}
  
  const edit=(elem,ind)=>{
   
    setInpItem(elem)
    setToggle(false)
    setIsEdit(ind)
}

  return (
    <>
   <center>
    <form>
    <input type='text' placeholder='enter the name' value={InpItem.FirstName} onChange={(e) => setInpItem({...InpItem, name: e.target.value })}/> &nbsp;
    <input type='number' placeholder='enter the number'value={InpItem.LastName} onChange={(e) => setInpItem({ ...InpItem, number: e.target.value })} />
    {Toggle?<button onClick={submitval}>Submit</button>:<button onClick={UpdateItem}>Update</button>}
    </form>
   <table className='table' style={{textAlign:"center",width:"50%",marginTop:"50px"}}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Number</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
  AddItem.map((elem,ind)=>{
    return(
      <tr>
      <td>{elem.name}</td>
      <td>{elem.number}</td>
      <td><button onClick={()=>edit(elem,ind)}>Edit</button> 
      <td></td><button onClick={()=>deleteItem(ind)}>Delete</button></td>
    </tr>)
  
  })
}
</tbody>
</table>


</center>
</>
 )
}
export default Todo