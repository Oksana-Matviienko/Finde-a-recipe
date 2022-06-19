function MyRecipesComponent({label, image, calories, cuisineType, ingredientLines, url}){

   return(
      <div className="elements">
<h2>{label}</h2>
<img src={image}/>
<h4>{calories.toFixed()} calories</h4>
<h3>Cuisine Type: {cuisineType}</h3>
<ul className="list">
   {ingredientLines.map(ingredient=>(
      <li>{ingredient}</li>
   ))}
    <h2><a href={url} target="_blank">Click to see the recipe</a></h2>
</ul>
      </div>
   );
};

export default MyRecipesComponent;