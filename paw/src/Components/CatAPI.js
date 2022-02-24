import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `https://api.thecatapi.com/v1/breeds`,
    headers: {
        'x-api-key': `70333dc8-3e31-4380-b622-48fdc97947cb`        
    }
})
const apiImages = axios.create({
    baseURL: `https://api.thecatapi.com/v1/images/search`,
    headers: {
        'x-api-key': `70333dc8-3e31-4380-b622-48fdc97947cb`        
    }
})

class CatAPI extends React.Component {
    state = {
        breeds: [],
        breedImage: []
    }

    componentDidMount() { 
        this.mounted = true; 
    }
    

    constructor(){
        super();
        api.get('/').then(res =>{
            if(this.mounted){
                this.setState({breeds: res.data})
            }
            
        })
        {/*Cant figure out images yet */}
        apiImages.get('/').then(res =>{
            if(this.mounted){
                this.setState({breedImage: res.data})
            }
        })
    }
    render() {
      return (
          <header>
              
              {this.state.breeds.map(breeds => 
                
                <h2 key = {breeds.id}>
                    <div>
                        <ul>
                            <div>{breeds.name}</div>
                            <div>{breeds.temperament}</div>
                            <div>{breeds.life_span}</div>
                            <div><h2>Adaptability: {breeds.adaptability}</h2></div>
                            <div><h2>Affection Level: {breeds.affection_level}</h2></div>
                        </ul>
                    </div>
                </h2>)}
          </header>
      )
    }
}

export default CatAPI