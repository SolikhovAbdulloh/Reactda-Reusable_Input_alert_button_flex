import React from 'react'

function Input({type,placeholder}) {
console.log(type);

  return (
    <input
      type={`${type}`} placeholder={`${placeholder}`}
      className={`text-white   ${
        type === "password" &&
        
        "p-[5px] rounded-[10px] border-[1px] h-40px border-[solid] border-[#ccc] bg-[#5f5f7e]  text-[16px] w-[200px] outline-[none]"
      }`   }
    />
    
);
}

export default Input