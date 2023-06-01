// import React, { useState } from "react";
// //import todo from './images.png';

// const Update=()=>{
// const [inputdata,setinputdata]=useState("");
// const [item,setitems]=useState([]);
// const [toggle,settoggle]=useState(true)
// const [isEdit,setisEdit]=useState();
// const additem=()=>{
//     if(!inputdata)
//     {}  //empty string is storing in array instead can add this if no value
//    else{
       
//        setitems([...item,inputdata]);
//         setinputdata("");  //because previous input appears as it is 
// }


// }
// const deleteItem=(id)=>{
//     const del=item.filter((elem,ind)=>{
//         return ind!== id
//     })
    
//     setitems(del);
// }

// const EditItem=(elem,ind)=>{
//      setinputdata(elem)
//     settoggle(false);
//     setisEdit(ind);
//     }

// const updateitem=()=>{
// settoggle(true);
// var arr=item.map((elem,i)=>i==isEdit?inputdata:elem)
// setitems(arr);
// }


//     return (
//         <>
// {/*<img src={todo} alt='todo image' />*/}
//     <div className="main-div">
//     <center>
//     <p>Todo</p>
//     <input type="text" placeholder="write your input here" onChange={(e)=>setinputdata(e.target.value)} value={inputdata}/>
//     {
//         toggle?<button onClick={additem}>Add Item</button>:<button onClick={updateitem}>Update</button>
//     }
    
//      { item.map((elem,ind)=>{


//             return( 
//                 <>
//                 <div key={ind}>
//                 <h1>{elem}</h1>
//                 <button onClick={()=>deleteItem(ind)}>delete item</button>
//                 <button onClick={()=>EditItem(elem,ind)}>Edit item</button>
//             </div>
//                 </>
            
//             )
//             }
            
//      )
//      }
     
//      </center> 
//      </div>

//    </>
//     );
// }
// export default Update;
