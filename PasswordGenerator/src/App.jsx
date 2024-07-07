import { useRef, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [includeNumbers, setNumbers] = useState(false)
  const [includeCharacters, setCharacters] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  //let password=""
  console.log("render")
  const generatePassword =()=>{
      let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let numbers='0123456789'
      let special='!@#$%^&*-_+=[]{}~`'
      if(includeNumbers){
        str+=numbers
      }
      if(includeCharacters){
        str+=special
      }
      let pass=""
      for(let i=0;i<length;i++){
        pass += str.charAt(Math.floor(Math.random()*str.length))
      }
      console.log("password : "+pass)
      setPassword(pass)
  }
  const copypasswordToclipboard =()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password) //window.navigator.clipboard.writeText( ) ye clipboard me text ko copy karne ke liye use hota hai
  }

 
  //generatePassword(); maine yaha par call laga di jiske vajhe se state change hui or component re-render hua
  // isliye ye infinite loop ban gaya to hum isko yaha par call nahi laga sakte isko hum button triggered bhi bana sakte hai lekin hum chahte hai ki ye khud generate ho jaye.
  //,ya fir hum isko tabhi call lagaye jab koi state change ho ## useEffect ka use karna padega
  useEffect(()=>{ 
    console.log("useEffect call")
    generatePassword()
  },[length,includeNumbers,includeCharacters])
 
  return (
     <div className='bg-slate-900 w-screen h-screen'>
      <h1 className='text-white text-center p-4'>Password Generator</h1>
      <div className=' flex justify-center'>
        <div className=' w-1/2 flex rounded-lg overflow-hidden m-10 max-w-6xl'>
          <input type="text" value={password} placeholder='password' className='rounded-lg outline-none w-full py-1 px-3 mr-2' ref={passwordRef} />
          <button className='bg-blue-600 text-white' onClick={copypasswordToclipboard}>copy</button>
        </div>
      </div>
      <div className='flex justify-center h-8 items-center overflow-hidden'>
        <div className='mx-2 h-8 flex justify-center items-center'>
          <input 
          type="range" 
          min={6}
          max={50} 
      
          value={length} 
          className='cursor-pointer mr-2'
          onChange={(e)=>{setLength(e.target.value)}}
           />
          <label className='text-green-500'>Length : {length}</label>
        </div>
        <div className='mx-2 h-8 flex justify-center items-center'>
          <input 
          type="checkbox" 
    
           className='cursor-pointer mr-2 '
            defaultChecked={includeNumbers}
            onChange={()=>{setNumbers(includeNumbers=>!includeNumbers)}}
            />
          <label className='text-green-500'>numbers</label>
        </div>
        <div className='mx-2 h-8 flex justify-center items-center'>
          <input 
           type="checkbox"
      
           defaultChecked={includeCharacters}
           className='cursor-pointer mr-2'
           onChange={()=>{setCharacters(includeCharacters=>!includeCharacters)}}
           />
          <label className='text-green-500'>characters</label>
        </div>

      </div>
      
     </div>
  );
}


export default App
