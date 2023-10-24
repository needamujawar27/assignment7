import React,{useState}from "react";
import"./components/common.css"

function App() {
  const[iphone,setIphone]=useState("");
  const[model,SetModel]=useState("");
  const[color,setColor]=useState("");
  const[price,SetPrice]=useState("")
  return(
    <div className="main">
      
      <table>
        <tr>
          <td> <input type="text" placeholder="Iphone" onChange={(e)=>setIphone(e.target.value)}/>
          </td>
            <td>{iphone}</td>
        </tr>
          <tr>
          <td>{model}</td>
            <td><input type="text" placeholder="Enter Model Name" onChange={(e)=>SetModel(e.target.value)} /></td>
            </tr>
            <tr>
          <td>
            <input type="text" placeholder="Color Name" onChange={(e)=>setColor(e.target.value)}/> </td>
            <td>{color}</td>
        </tr>
        <tr>
        <td>Rs.{price}</td>
          <td><input type="text"  placeholder="Enter Price" onChange={(e)=>SetPrice(e.target.value)}/></td>
        </tr>
      </table>    
    </div>
    
  )

}

export default App;
