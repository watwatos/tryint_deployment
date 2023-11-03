'use client'
import React from 'react'



const Delete = ({id}) => {
  

    const deletePost=async()=>{
        const res =  await fetch(`/api/topics?id=${id}`,{method:'DELETE'})
        if(res.ok){
            window.location.reload()
        }
    }
  return (
    <div>
      <button className='text-red-500 ' type='button' onClick={deletePost}>delete</button>
    </div>
  )
}

export default Delete
