"use client";
import React from 'react'

const AddLead = (cb) => {
    const handleClick = async (e) => {
        await fetch('/api/leads', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({email: "abc123@gmail.com"})
        })
      }
  return (
    <div>
        <button onClick={handleClick} className="bg-green-400">Press Me</button>
    </div>
  )
}

export default AddLead