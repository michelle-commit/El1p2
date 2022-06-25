import React from "react";


function Input(){
    return(
        <>       
            <label className="label">Name:</label><br/>
            <input  type="text" className="input" placeholder="  name" ></input><br/>

            <label className="label">Position:</label><br/>
            <input type="text" className="input" placeholder=" position"></input><br/>

            <label className="label">Office:</label><br/>
            <input type="text" className="input" placeholder=" office"></input><br/>

            <label className="label">Age:</label><br/>
            <input type="text" className="input" placeholder=" age"></input><br/>

            <label className="label">Start Date:</label><br/>
            <input type="text" className="input" placeholder=" start date"></input><br/>

            <lable className="label">Salary:</lable><br/>
            <input type="text" className="input" placeholder=" salary"></input><br/>
        </>
        

    )
}
//export default Input;