import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GitUsers = () => {
  let [users, setUsers] = useState([])


  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
  }, [])
  return (
    <div className='container'>
      {
        users.map((item) => {
          console.log(item)
          return (
            <section key={item.id}>
              <h1>{item.login}</h1>
              <img src={item.avatar_url} height={50} width={50} alt="" />
            </section>
          )
        })
      }
    </div>
  )
}

export default GitUsers
