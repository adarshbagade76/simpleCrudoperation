import React, { useState } from 'react'

const P3Todo = () => {
    const [inputData, setInputData] = useState({ Name: "", LastName: "", EmailID: "" })
    const [AddItem, setAddItem] = useState([])
    const [Toggle,setToggle]=useState(true)
    const [onEdit,setonEdit]=useState()

    const ADD = () => {
        setAddItem([...AddItem, inputData])
        setInputData({ Name: "", LastName: "", EmailID: "" })
    }

    const onDelete=(id)=>{
        // debugger
       const deleteData=AddItem.filter((item,i)=>{
       return i !== id
       })
       setAddItem(deleteData)
    }
    const onedit =(elem,id)=>{
        setInputData(elem)
        setToggle(false)
        setonEdit(id)
    }

    const UpdatedData =()=>{
        debugger
        setToggle(true)
        const update=AddItem.map((elem,ind) => ind === onEdit?inputData :elem)
        setAddItem(update)
    }
    return (
        <>
            <center>
                <input type='text' placeholder='Name' value={inputData.Name} onChange={(e) => setInputData({ ...inputData, Name: e.target.value })} />
                <input type='text' placeholder='LastName' value={inputData.LastName} onChange={(e) => setInputData({ ...inputData, LastName: e.target.value })} />
                <input type='text' placeholder='EmailID' value={inputData.EmailID} onChange={(e) => setInputData({ ...inputData, EmailID: e.target.value })} />
                {Toggle ?<button onClick={() => ADD()}>ADD Data</button>:<button onClick={() => UpdatedData()}>Update Data</button>}

                <table className='table' style={{ textAlign: "center", width: "50%", marginTop: "50px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>EMPID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AddItem?.map((elem,id) => {
                                //  debugger
                                return (
                                    <tr>
                                        <td>{elem.Name}</td>
                                        <td>{elem.LastName}</td>
                                        <td>{elem.EmailID}</td>
                                        <td><button onClick={() => onedit(elem,id)}>Edit</button></td>
                                        <td><button onClick={() => onDelete(id)}>Delete</button></td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </center>
        </>
    )
}

export default P3Todo