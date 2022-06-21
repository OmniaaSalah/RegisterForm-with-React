
import {useState,useEffect } from 'react'
export default function RegForm(){


    const [user,setuser]=useState({name:"",email:"",username:"",password:"",confirmpassword:""})
    const [errors,seterrors]=useState({nameerr:"",emailerr:"",usernameerr:"",passworderr:"",confirmpassworderr:""})
  
    const handlechange=(ev)=>{
        if(ev.target.name=="name")
        {setuser({...user,name:ev.target.value});
        seterrors({...errors,nameerr:(ev.target.value.length==0)?"Name is required":null})}
        else if(ev.target.name=="email")
        {setuser({...user,email:ev.target.value});
         seterrors({...errors,emailerr:(ev.target.value.length==0)?"Email is required":(!ev.target.value.match('[a-zA-Z_.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}'))?"Must be Valid Email":null})}
        else if(ev.target.name=="username")
        {setuser({...user,username:ev.target.value});
        seterrors({...errors,usernameerr:(ev.target.value.length==0)?"UserName is required":(ev.target.value.indexOf(' ')>0)?"UserName should contain no spaces":null})}
        else if(ev.target.name=="password")
        {setuser({...user,password:ev.target.value});
        seterrors({...errors,passworderr:(ev.target.value.length==0)?"Password is required":(!ev.target.value.match('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'))?"Password should more than 8 and contain one uppercase and one digit and one special character at least":null})}
        else if(ev.target.name=="confirmpassword")
        {setuser({...user,confirmpassword:ev.target.value});
        seterrors({...errors,confirmpassworderr:(ev.target.value.length==0)?"ConfirmPassword is required":(ev.target.value!=user.password)?"Not match previous Password":null})
        }
        
        
        
    }

    const handleblur=(ev)=>{
        if(ev.target.name=="email"){
            seterrors({...errors,emailerr:(ev.target.value.length==0)?"Email is required":null})
        }
        else if(ev.target.name=="name"){
            seterrors({...errors,nameerr:(ev.target.value.length==0)?"Name is required":null})
        }
        else if(ev.target.name=="password"){
            seterrors({...errors,passworderr:(ev.target.value.length==0)?"Password is required":null})
        }
        else if(ev.target.name=="username"){
            seterrors({...errors,usernameerr:(ev.target.value.length==0)?"UserName is required":null})
        }
        else if(ev.target.name=="confirmpassword"){
            seterrors({...errors,confirmpassworderr:(ev.target.value.length==0)?"ConfirmPassword is required":null})
        }

    }

    return(
        <>
        <form className="m-5">
                <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                      <input placeholder='Enter Your Name' type="text" value={user.name} name="name"  onFocus={(ev)=>{handleblur(ev)}} className="form-control" onChange={(ev)=>{handlechange(ev)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <small className="text-danger">{errors.nameerr}</small>
                </div>

                <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" placeholder='Enter Your Email' value={user.email} name="email" onFocus={(ev)=>{handleblur(ev)}} className="form-control" onChange={(ev)=>{handlechange(ev)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <small className="text-danger">{errors.emailerr}</small>
                  </div>

                   
                  <div className="mb-3">
                      <label htmlFor="exampleInputUserName" className="form-label">User Name</label>
                      <input placeholder='Enter Your UserName' type="text" value={user.username} onFocus={(ev)=>{handleblur(ev)}} name="username" className="form-control" onChange={(ev)=>{handlechange(ev)}} id="exampleInputUserName"/>
                      <small  className="text-danger">{errors.usernameerr}</small>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input placeholder='Enter Your Password' type="password" value={user.password} onFocus={(ev)=>{handleblur(ev)}} name="password" className="form-control" onChange={(ev)=>{handlechange(ev)}} id="exampleInputPassword1"/>
                      <small  className="text-danger">{errors.passworderr}</small>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                      <input placeholder='Enter Your ConfirmPassword' type="password" value={user.confirmpassword} onFocus={(ev)=>{handleblur(ev)}} name="confirmpassword" className="form-control" onChange={(ev)=>{handlechange(ev)}} id="exampleInputConfirmPassword1"/>
                      <small  className="text-danger">{errors.confirmpassworderr}</small>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Submit</button>
       </form>
        </>
    )


}