import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const DisplayMovie = () => {
  let [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((res) => {
        console.log(res)
        setMovieDetails(res.data)
      })
  }, [])

  let handleDelete = (id) => {
    let ans = window.confirm("Are you sure you want to delete a movie?")
    if (ans) {
      axios.delete(`http://localhost:3000/movies/${id}`)
      toast.success("Movie Deleted Successfully")
    }
  }
  return (
    <div style={{ padding: "10px" }}>
      <table border={2} cellPadding={20} cellSpacing={10}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Movie Name</td>
            <td>Genre</td>
            <td>Movie Duration</td>
            <td>Show Time</td>
            <td>Poster</td>
            <td>Action</td>
            <td>Action</td>
          </tr>

        </thead>
        <tbody>
          {
            movieDetails.map((movie) => {
              console.log(movie)
              return (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.movieName}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.movieDuration}</td>
                  <td>{movie.showTimings}</td>
                  <td>
                    <img src={movie.posterUrl} height={50} width={50} alt="" />
                  </td>
                  <td><button onClick={()=>{handleDelete(`${movie.id}`)}}>Delete Movie</button></td>
                  <td> <NavLink to={`/updateMovie/${movie.id}`}>Update Movie</NavLink></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayMovie
