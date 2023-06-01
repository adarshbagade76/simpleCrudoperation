import React, { useState } from 'react'

function P1Todo() {
  const [inputItem, setinputItem] = useState({ Name: "", Last: "", EMP_ID: "", id: '' })
  // console.log(inputItem)
  const [AddItem, setAddItem] = useState([])
  // console.log('additem',AddItem)
  const [edit, setedit] = useState()
  const [Toggle, setToggle] = useState(true)

  // const [Update, setupdate] = useState()

  const additems = () => {
    if (inputItem == "") {
      alert('Enter the Field')
    } else {
      const id = Math.random().toString(16).substring(1);
      setAddItem([...AddItem, inputItem])

    }

    setinputItem({ Name: "", Last: "", EMP_ID: "" })
  }
  const onedit = (elem, ind) => {
    // debugger
    setinputItem(elem)
    setedit(ind)
    setToggle(false)
  }
  const onUpdate = () => {
    setToggle(true)
    // debugger
    let arr = AddItem.map((elem, ind) => ind == edit ? inputItem : elem)
    setAddItem(arr)
    setinputItem({ Name: "", Last: "", EMP_ID: "" })
  }

  const ondelete = (ID) => {
    // debugger
    const result = AddItem.filter((ind) => {
      debugger
      return ind !== ID

    })
    setAddItem(result)
  }


  return (

    <>
      <center style={{ marginTop: "3rem" }}>


        <label> Name:
          <input type="text" placeholder='enter your name' value={inputItem.Name} onChange={(e) => setinputItem({ ...inputItem, Name: e.target.value })} />
        </label>
        <label>Last Name:
          <input type="text" value={inputItem.Last} onChange={(e) => setinputItem({ ...inputItem, Last: e.target.value })} />
        </label>
        <label> EMP ID:
          <input type="text" value={inputItem.EMP_ID} onChange={(e) => setinputItem({ ...inputItem, EMP_ID: e.target.value })} />
        </label>
        {Toggle ? <button className='btn1' onClick={() => { additems() }}>Add Item</button> : <button className='btn1' onClick={() => onUpdate()}>Update</button>}
        <table className='table' style={{ textAlign: "center", width: "50%", marginTop: "50px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last</th>
              <th>EMP_ID</th>
            </tr>
          </thead>
          <tbody>
            {
              AddItem.map((elem, ind) => {

                debugger
                return (
                  <tr key={ind}>
                    <td>{elem.Name}</td>
                    <td>{elem.Last}</td>
                    <td>{elem.EMP_ID}</td>
                    <td><button className='btn2' onClick={() => { onedit(elem, ind) }}>Edit</button></td>
                    <td><button className='btn2' onClick={() => { ondelete(ind) }}>Delete</button></td>
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

export default P1Todo