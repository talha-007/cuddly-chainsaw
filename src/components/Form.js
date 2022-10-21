import React, {useState} from 'react'
import './Form.css'


export const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const  [allValues, setAllValues] = useState([])


    const formSubmit = (e)=>{
        e.preventDefault();
        const newValue = {id: new Date().getTime().toString() ,email, password}; 
        setAllValues(...allValues, newValue);
        console.log(allValues);
        setEmail("");
        setPassword("");
    }


    return (
    <main>
    <form action="" onSubmit={formSubmit}>
        <div className='email'>
            <label> Email</label>
            <input type="text" name='email'  onChange={(e)=>{setEmail(e.target.value)}} value={email} />
        </div>
        <div className='pass'>
            <label> password</label>
            <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        </div>
        <button type='submit'>Login</button>
    </form>
    <div>
        {
            allValues && allValues.map((curElem)=>{
                const {id, email, password} = curElem;
                return(
                    <div key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                     </div>

                )
            })
        }
    </div>
    </main>
  )
}
