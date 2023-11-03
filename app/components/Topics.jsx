
import Link from 'next/link'
import React from 'react'
import Delete from './Delete'
import Create from './Create'
const getData = async()=>{

    try {
      const res= await fetch(`${process.env.API_URL}/api/topics`,{cache:'no-store'})
      if(!res.ok){
        throw new Error('faled')
      }
      
     return  res.json()
  
      } catch (error) {
        console.log(error)
      }
      
   
   
  }

 


const Topics =async () => {
    const data = await getData()
    
  return (
    <div className='text-white flex flex-col gap-5 items-center justify-center h-screen'>

        {data.topics.map(t=>
            <div key={t._id} className='flex flex-col gap '>
                <h1>{t.title}</h1>
                <Link href={`/topics/${t._id}`}>{t.description}</Link>
                <Create/>
                <Delete id={t._id}/>
            </div>
            )}

      
    </div>
  )
}

export default Topics
