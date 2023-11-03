import React from 'react'
import Put from '../../components/Put'


const page = async({params}) => {
  

  const {id}=params;
  const getData=async()=>{
    const res=await fetch(`${process.env.API_URL}/api/topics/${id}`,{cache:'no-store'})
  
    if(!res.ok){
      throw new Error('failed')
    }
    return res.json()
  
  }

  const data = await getData()
  

  return (
    <div>
      {data.topic.title}
      <br/>
      {data.topic.description}

      <Put id={id}/>
    </div>
  )
}

export default page
