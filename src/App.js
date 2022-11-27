import {useEffect, useState} from 'react'
import video from "./food.mp4"
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "1b13d104";
  const MY_KEY ="a4bf7d64eb3be93270f7f461f8afb74b";
const [mySearch, setMySearch] = useState("");
const [myRecepie, setMyRecepie] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("")

  useEffect(()=>{
    async function recepieAPI(){
      const responce = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      setMyRecepie(data.hits);
      console.log(data.hits)
    }
    recepieAPI();
  }, [wordSubmitted]);

  const myRecepieSearch = (e)=>{
setMySearch(e.target.value)
  }

  const findSearch =(e) =>{
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className='app'>
<div className='container'>
<video loop autoPlay muted>
  <source src={video} type="video/mp4"/>
</video>
</div>
<div className='container'>
<h1>Find a recipe</h1>
</div>
<div className='container'>
<form onSubmit={findSearch}>
  <input className='search' placeholder="Enter ingredient name here" onChange={myRecepieSearch} value={mySearch}/>
  <button onClick={()=>setWordSubmitted(mySearch)}>SEARCH</button>
</form>
</div>
<div className='row'>
{myRecepie.map(element=>(
<MyRecipesComponent 
label={element.recipe.label} 
image={element.recipe.image}
calories={element.recipe.calories} 
cuisineType={element.recipe.cuisineType}
ingredientLines={element.recipe.ingredientLines}
url ={element.recipe.url}/>
))}
</div>
    </div>
  );
}

export default App;
