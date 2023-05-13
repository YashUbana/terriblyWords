import React from 'react'
import { useNavigate } from "react-router-dom"

function Button() {

  let navigate = useNavigate();
  const fetchDataPage = () =>{
    navigate('/Fetch')
  }
  return (
    <div>
        
        <button type="button" 
        className="btn btn-outline-success waves-effect" 
        onClick={fetchDataPage} 
        style={{width : '100px', height: '100px', position: 'absolute',
        top: '0', bottom:'0', left:'0',right:'0', margin: 'auto'}}>FETCH</button>
    </div>
  )
}

export default Button
