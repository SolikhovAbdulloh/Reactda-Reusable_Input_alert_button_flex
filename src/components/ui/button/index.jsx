import React from "react";

function Button({ children, type }) {
  console.log(type);

  return (
    <button
      className={`w-[100px]  flex cursor-pointer border-[1px]   border-[solid] border-[${
        type === "danger" ? "none" : "green"
      }] justify-center  items-center h-[40px] bg-[${
        type === "danger" || type === "Danger" ? "red" : "grey"
      }] hover:bg-[green]  font-bold p-4 rounded-xl text-white `}
    >
      {children}
    </button>
  );
}

export default Button;
