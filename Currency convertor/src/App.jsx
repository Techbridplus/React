import { useState } from 'react'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import bgi from './23604708_sl_121021_47240_20.jpg'
function App() {

 const [amount, setAmount] = useState(0.0)
 const [From , setfrom] = useState("usd")
 const [To , setTo] = useState("inr")
 const [result, setResult] = useState(0.0)
 const currencyInfo = useCurrencyInfo(From)

  //const currencyInfo=[]
  const options = Object.keys(currencyInfo)
  const swap = () => {
    const temp = From
    setfrom(To)
    setTo(temp)
    const tempAmount = amount
    setAmount(result)
    setResult(tempAmount)
  }
  const convert=()=>{
    setResult(amount * currencyInfo[To])
  }
  return (
   <div className='h-screen w-screen bg-slate-900 flex justify-center items-center'
   style={{
    backgroundImage: `url(${bgi})`, // Use the imported image here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
   >
     <div className='md:h-3/6 md:w-1/2 w-5/6 h-3/6 bg-slate-100/40 rounded-2xl p-4 border-white border-2'>
      <form 
        onSubmit={(e) => {
        e.preventDefault();
       
    }}
      >
     <InputBox
      Mycss='drop-shadow-lg shadow-blue-500/50'
      where={'From'}
      currencyType={From}
      CurrencyOption={options}
      ammount={amount}
      onCurrencyChange={(currency) => setfrom(currency)}
      onChangeAmmount={(ammount) => setAmount(ammount)}
      />
      <div className='flex justify-center'>
        <button className='bg-blue-600 rounded-2xl border-white border-4 w-32 h-16 -m-4 z-10 text-white'
        onClick={swap}
        >swap</button>
      </div>
      <InputBox
      Mycss='drop-shadow-lg shadow-blue-500/50'
      where={'To'}
      currencyType={To}
      CurrencyOption={options}
      ammount={result}
      onCurrencyChange={(currency) => setTo(currency)}
      onChangeAmmount={(ammount) =>( null)  }
      />
      <button
        className='bg-blue-600 rounded-2xl border-white border-2  w-full h-16 mt-4 text-white '
      onClick={() => {
        convert()
      }}
      >Convert {From.toUpperCase()} to {To.toUpperCase()}</button>
      </form>
     </div>
   </div>
);
}

export default App