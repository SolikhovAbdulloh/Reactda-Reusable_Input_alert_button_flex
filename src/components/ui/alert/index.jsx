import React from 'react'

function Alert({type,massage}) {

    const AlertStyles = {
      info: {
        backgroundColor: "#d1ecf1",
        color: "#0c5460",
        padding: "10px",
        borderRadius: "20px",
        margin: "10px 0",
        width: "60vh",
        height: "60vh",
      },
      error: {
        backgroundColor: "red",
        color: "black",
        padding: "10px",
        borderRadius: "15px",
        margin: "10px 0",
        width: "100vh",
        height: "50vh",
      },
    };



  return <div style={AlertStyles[type]}>{massage}</div>
}

export default Alert