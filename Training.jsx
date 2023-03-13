import React from 'react'

const Training = (props) =>{ 
    if(props.Details.Availability===true)
    {
  return (
    <>
    <h1>{props.Details.Name}</h1>
    <h2>{props.Details.Duration}</h2>
    <button style={{color:"green"}}>available</button>
    </>
  )
   }
else{
    return(
        <>
        <h1>{props.Details.Name}</h1>
    <h2>{props.Details.Duration}</h2>
    <button style={{color:"red"}}>Not available</button>
        </>
    )
}
}


export default Training;