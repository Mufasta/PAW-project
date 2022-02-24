import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `https://api.thecatapi.com/v1/breeds`,
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
        
    }
    render() {
      return (
          <header>
              
              {this.state.breeds.map(breeds => 
                
                <h2 key = {breeds.id}>
                    
                        <ul>
                            <div>{breeds.name}</div>
                            <div>{breeds.description}</div>
                            <div>{breeds.temperament}</div>
                            <div>Average Life Span: {breeds.life_span}</div>
                            <div>Adaptability: {breeds.adaptability}</div>
                            <div>Affection Level: {breeds.affection_level}</div>
                        </ul>
                    
                </h2>)}
          </header>
      )
    }
}

export default CatAPI