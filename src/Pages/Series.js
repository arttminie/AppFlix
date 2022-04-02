import React from 'react';
import axios from 'axios';

const ApiSeries = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=fe42e420553913e8632f6d385a44c597&language=en-US&page=1"
})

export default class Series extends React.Component{

state = {
    seriesList:[]
}


async componentDidMount(){
    const responseTv = await ApiSeries.get()
       console.log(responseTv.data.results)   

    const series = responseTv.data.results.map((item) => { 
        return{
            ...item,
            poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
    })

    this.setState({
        seriesList: series
    })
}


  render(){
      return(
        <div>
          <h2>Series</h2>
             {this.state.seriesList.map((item) => (
            <div>
                <h3>{item.name}</h3>
                <div>
                   <img src = {item.poster_path} alt = "poster série"/>
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