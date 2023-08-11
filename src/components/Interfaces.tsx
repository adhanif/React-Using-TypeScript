import React from 'react'
interface UserMessage {
    name:string;
    message?: string;
}

export default function Interfaces(prop:UserMessage) {
  return (
    <><h1>Interfaces</h1>
    <p>{prop.name}, {prop.message}</p>
    
    </>
  )
}
