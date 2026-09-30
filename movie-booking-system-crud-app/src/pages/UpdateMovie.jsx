import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateMovie = () => {

    let [movie,setMovie]=useState({
        movieName:"",
        genre:"",
        movieDuration:"",
        showTimings:"",
        posterUrl:""
    })

    let {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/movies/${id}`,movie)
        .then((res)=>{
            console.log(res.data)
            setMovie(res.data)
        })
    },[id])

    let naviagate=useNavigate()

     let handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

        axios.patch(`http://localhost:3000/movies/${id}`,movie)
        toast.success("Movie Updated Successfully")
        handleReset()
        setTimeout(()=>{
            naviagate('/displayMovie')
        },2000)

    }

    let handleReset = () => {
        setMovie({
            movieName: "",
            genre: "",
            movieDuration: "",
            showTimings: "",
            posterUrl: ""
        })
    }
  return (
       <section className="addMovieContainer">
            <form  onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Update Movie</legend>
                    <label htmlFor="movieName">Enter Movie Name:</label>
                    <input type="text" id='movieName' placeholder='Enter Movie Name' value={movie.movieName} onChange={handleChange}  name='movieName' />
                    <br /><br />
                    <label htmlFor="genre">Enter Gener:</label>
                    <input type="text" id='genre' placeholder='Enter Genre' value={movie.genre} onChange={handleChange} name='genre' />
                    <br /><br />
                    <label htmlFor="duration">Movie Duration:</label>
                    <input type="text" id='duration' placeholder='Movie Duration' value={movie.movieDuration} onChange={handleChange}  name='movieDuration' />
                    <br /><br />
                    <label htmlFor="showTimings"> Enter Show Timings:</label>
                    <input type="time" id='showTimings' placeholder='Enter Show Timings' value={movie.showTimings} onChange={handleChange}  name='showTimings' />
                    <br /><br />
                    <label htmlFor="posterUrl">Enter Movie Poster URL:</label>
                    <input type="url" id='posterUrl' placeholder='Enter Movie Poster URL' value={movie.posterUrl} onChange={handleChange} name='posterUrl' />
                    <br /><br />

                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </fieldset>
            </form>
        </section>
  )
}

export default UpdateMovie
