import React from 'react';
import axios from 'axios';


const ApiFilmes = axios.create ({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=fe42e420553913e8632f6d385a44c597&language=en-US&page=1"
})


export default class Movies extends React.Component { 

state =  {
    movies: []
}


  async componentDidMount(){
    const response = await ApiFilmes.get()
       console.log(response.data.results)   

    const filmes = response.data.results.map((item) => { 
        return{
            ...item,
            poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
    })

    this.setState({
        movies: filmes
    })
}

   render(){
       return(
           <div>
               <h2>Movies</h2>
               {this.state.movies.map((item) => (
                   <div>
                       <h3>{item.title}</h3>
                       <div>
                          <img src ={item.poster_path} alt= "poster filme" />
                          <div>
                              <p>{item.overview}</p>
                          </div>
                       </div>
                   </div>
               ))}
           </div>
       )
   }
} 