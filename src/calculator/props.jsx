import React from 'react'

const Footer = (props) => {
        console.log(props)
return(

        <div>
        <img src={props.img}  alt="" />
         <h1> {props.names} </h1>
         <h3>{props.full}</h3>
         </div>
)
    
    

    
      

   
  
}

export default Footer
