import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useState} from 'react'
import jwt from 'jsonwebtoken'




export default function Home() {

const [username, setUsername] = useState <string> ('')
const [password, setPassword] = useState <string> ('')
const [message, setMessage]= useState <string> ('you are not logged in')



  async function submitForm() {
    const res = await fetch('api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
        

      },
      body:JSON.stringify({username,password})
    }).then((t)=>t.json())

    const token= res.token

    if(token){
      const json= jwt.decode(token) as {[key:string]: string}
      setMessage( `welcome ${json.username} and your are ${json.admin ? 'an admin!': 'you are not an admin!'}`)

    }
    else{
      setMessage('oops somthing is not right')
    }

    
    
  }
  
  return (
    <div>
    <h1>{message} </h1>
      <form>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}>
        </input>
         <br/>
       <input type="password" value={password} onChange={e => setPassword(e.target.value)} >
        </input> 
        <br/>
       <input type="button" value="Login" onClick={submitForm} >
        </input> 
      </form>
    </div>
      
  )
}
