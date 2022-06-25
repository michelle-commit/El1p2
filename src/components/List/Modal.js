import './Modal.css';
import { useRef } from "react";
import axios from "axios";

const Modal = ({close})=>{
    const ref = useRef(null);
    const NameRef = useRef(null);
    const UsernameRef = useRef(null);
    const EmailRef = useRef(null);
    const AddressRef = useRef(null);
    const PhoneRef = useRef(null);
    const WebsiteRef = useRef(null);
    const CompanyRef = useRef(null);

    const sendData = ()=>{
        ref.current.style.display= "none";
        const promise = axios.post("https://jsonplaceholder.typicode.com/users",{        
                name: "Lory LOUD",
                username: "Bret",
                email: "lory@gmail.com",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 665",
                    city: "royal woods",
                    zipcode: "325714-3874",
                geo:{
                    "lat": "-37.3159",
                    "lng": "81.1496"
                    }
                }
        })
        promise.then((response)=>{console.log(response.data);})
        .catch((err)=>{console.log(err);})

    }
    return( 
       
            <div className="Modal">
             <div>
                <button onClick={()=>{close(false)}} className="bouto">X</button>
                 <label className="label">Name:</label><br/>
                <input ref={NameRef} className="in" type="text" placeholder="Name">
                </input> <br/>
                <label className="label">Username:</label><br/>                
                <input ref={UsernameRef} className="in" type="text" placeholder="Username">
                </input> <br/><br/>
                <label className="label">Email:</label><br/>                  
                <input ref={EmailRef} className="in" type="text" placeholder="Email">
                </input> <br/> <br/>
                <label className="label">Address:</label><br/>                
                 <input ref={AddressRef} className="in" type="text" placeholder="Address">
                </input> <br/> <br/>
                <label className="label">Phone:</label><br/>   
                <input ref={PhoneRef} className="in" type="text" placeholder=" Phone number">
                </input> <br/> <br/>
                <label className="label">website:</label><br/>                
                <input ref={WebsiteRef} className="in" type="text" placeholder="Website"></input> 
                                                  
             </div>
            <div>
                <button className="bouto1" onClick={()=>{close(false)}} >cancel</button>
                <button className="bouto2" >add</button>
            </div>

            </div>
        
    )
}
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


export default Modal;   
 
