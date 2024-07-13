import React from 'react';
//import styles from './module.module.css'; // Adjust the path as necessary

function InputBox({
    Mycss = "",
    ammount,
    CurrencyOption = [],
    where,
    currencyType,
    onCurrencyChange,
    onChangeAmmount,
}) {
    const handleInvalid = (event) => {
        event.preventDefault(); // Prevent the default validity message
    };

    return (
        <div className={`bg-slate-100 ${Mycss} rounded-2xl flex justify-between p-3 flex-wrap`}>
            <div className='flex flex-col justify-around m-3 overflow-hidden'>
                <label className='text-lg text-gray-400 mb-3'>{where}</label>
                <input
                    type="number"
                    value={ammount}
                    min={0}
                    step="0.1"
                    onChange={(e) => onChangeAmmount(e.target.value)}
                    onInvalid={handleInvalid}
                    className={`rounded-lg px-1 py-1 bg-slate-100 outline-none text-lg font-bold `}
                />
            </div>
            <div className='flex flex-col justify-around overflow-hidden m-3'>
                <p className='text-lg text-gray-400 mb-3'>Currency Type </p>
                <select
                    value={currencyType}
                    className="rounded-lg px-1 py-1 bg-gray-400 cursor-pointer outline-none"
                    disabled={false}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {CurrencyOption.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;
