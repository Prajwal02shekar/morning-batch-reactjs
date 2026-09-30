import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddMovie = () => {

    let [movie, setMovie] = useState({
        movieName: "",
        genre: "",
        movieDuration: "",
        showTimings: "",
        posterUrl: ""
    })

    let handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }
    let naviagte=useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")

        try {
            axios.post("http://localhost:3000/movies", movie)
            toast.success("Movie Added Successfully");
            handleReset()

            setTimeout(()=>{
                naviagte('/displayMovie')
            },2000)



        } catch {
            toast.error("Something went wrong")
        }
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
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add Movie</legend>
                    <label htmlFor="movieName">Enter Movie Name:</label>
                    <input type="text" id='movieName' placeholder='Enter Movie Name' onChange={handleChange} name='movieName' />
                    <br /><br />
                    <label htmlFor="genre">Enter Gener:</label>
                    <input type="text" id='genre' placeholder='Enter Genre' onChange={handleChange} name='genre' />
                    <br /><br />
                    <label htmlFor="duration">Movie Duration:</label>
                    <input type="text" id='duration' placeholder='Movie Duration' onChange={handleChange} name='movieDuration' />
                    <br /><br />
                    <label htmlFor="showTimings"> Enter Show Timings:</label>
                    <input type="time" id='showTimings' placeholder='Enter Show Timings' onChange={handleChange} name='showTimings' />
                    <br /><br />
                    <label htmlFor="posterUrl">Enter Movie Poster URL:</label>
                    <input type="url" id='posterUrl' placeholder='Enter Movie Poster URL' onChange={handleChange} name='posterUrl' />
                    <br /><br />

                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </fieldset>
            </form>
        </section>
    )
}

export default AddMovie
