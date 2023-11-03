'use client'
import React, { useState } from 'react'

const Put = ({id}) => {

    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')


    const update=async()=>{
        const res =  await fetch(`${process.env.API_URL}/api/topics/${id}`,{method:'PUT',body:JSON.stringify({newTitle:title,newDescription:desc}),headers:{'content-type':'application/json'}
    
    })
        
    }

  return (
    <div className='flex gap-5'>

        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" onChange={(e)=>setDesc(e.target.value)}/>
      <button className='text-green-600' type='button' onClick={update}>create post</button>
    </div>
  )
}

export default Put
