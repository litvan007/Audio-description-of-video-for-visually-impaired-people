import React from "react";
import logo from './logo.svg';
import './App.css';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <Grid container spacing={3} style={{marginTop: '20px'}} >
          {this.props.movies?.map((movie, i) => (
            <Grid item xs={2}>
              <MovieCard 
                movie={movie}
                goToMovie={this.props.goToMovie}
                i={i}
              />
            </Grid>
          ))}
          
      </Grid>
    )
  }
}

export default Movies;