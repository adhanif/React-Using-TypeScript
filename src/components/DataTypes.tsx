import React from 'react'

export default function DataTypes() {
    // let firstValue: string= "MAnny"
  // let firstValue: number= 34
  // let firstValue: boolean= true
  // let firstValue: number[]=[2,3,255]      //Object
  // let firstValue: Array<string>=["2","3","Manny"] 

  //tuple
  let aTuple: [string, number]=["manni", 34]
  //enum
  enum Codes {first=1, second=2};
  //any
  let firstName: any=3;
  //void
  const warning=(): void=>{
    console.log("warning")
  }
//   warning()
  return (
    <>
    <h1>Data Types</h1>
        <p>
            {/* The value {firstValue} is of {typeof firstValue} type!  */}
            {/* The value {aTuple[0]} is of {typeof aTuple[0]} type!  */}
            The value {firstName} is of {typeof firstName} type! 
        </p>
    </>
  )
}
