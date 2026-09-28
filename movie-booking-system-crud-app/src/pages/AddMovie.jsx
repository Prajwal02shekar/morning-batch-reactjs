import React from 'react'

const AddMovie = () => {
    return (
        <section className="addMovieContainer">
            <form>
                <fieldset>
                    <legend>Add Movie</legend>
                    <label htmlFor="movieName">Enter Movie Name:</label>
                    <input type="text" id='movieName' placeholder='Enter Movie Name' name='movieName' />
                    <br /><br />
                    <label htmlFor="genre">Enter Gener:</label>
                    <input type="text" id='genre' placeholder='Enter Genre' name='genre' />
                    <br /><br />
                    <label htmlFor="duration">Movie Duration:</label>
                    <input type="text" id='duration' placeholder='Movie Duration' name='movieDuration' />
                    <br /><br />
                    <label htmlFor="showTimings"> Enter Show Timings:</label>
                    <input type="time" id='showTimings' placeholder='Enter Show Timings' name='showTimings' />
                    <br /><br />
                    <label htmlFor="posterUrl">Enter Movie Poster URL:</label>
                    <input type="url" id='posterUrl' placeholder='Enter Movie Poster URL' name='posterUrl' />
                    <br /><br />

                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </fieldset>
            </form>
        </section>
    )
}

export default AddMovie
