'use client'
import React, { useState } from 'react'

const Create = () => {

    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')


    const create=async()=>{
        const res =  await fetch(`/api/topics`,{method:'POST',body:JSON.stringify({title:title,description:desc}),headers:{'content-type':'application/json'}
    
    })
        
    }

  return (
    <div className='flex gap-5'>

        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" onChange={(e)=>setDesc(e.target.value)}/>
      <button className='text-green-600' type='button' onClick={create}>create post</button>
    </div>
  )
}

export default Create
