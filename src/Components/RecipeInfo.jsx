import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function RecipeInfo() {
    const [item, setItem] = useState();
    const { MealId } = useParams();
    var id="";
    const getMealData = async () => {
        try {
            if (MealId != "") {
                await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                    .then(res => res.json())
                    .then(data => {
                        setItem(data.meals[0]);
                        console.log(data.meals[0]);
                    })
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getMealData()
    }, [])

    if (item) {
        const strYoutube = item.strYoutube;
        const str = strYoutube.split("=");
        id = str[str.length - 1];
    }

    return (
        <>
            {
                (!item) ? "" : (
                    <>
                        <div className="content">
                            <img src={item.strMealThumb} alt="IMG" />
                            <div className="inner-content">
                                <h1>{item.strMeal}</h1>
                                <h2>{item.strArea} Food</h2>
                                <h3>Category: {item.strCategory}</h3>
                            </div>
                        </div>
                        <div className="recipe-details">
                            <div className="ingredients">
                                <h2>Ingredients</h2><br />
                                <ol>
                                    {Object.keys(item).map(key => {
                                        // Check if the property key starts with 'strIngredient'
                                        if (key.startsWith('strIngredient')) {
                                            // Extract the index from the property key
                                            const index = parseInt(key.slice(13));

                                            // Check if the corresponding measure property exists
                                            if (item['strMeasure' + index] && item[key]!="") {
                                                return (
                                                    <li key={key}>
                                                        {item[key]}: {item['strMeasure' + index]}
                                                    </li>
                                                );
                                            }
                                        }
                                        return null;
                                    })}
                                </ol>
                            </div>
                            <div className="instructions">
                                <h2>Instructions</h2><br />
                                <h4>{item.strInstructions}</h4>
                            </div>
                        </div>
                        <div className="video">
                                <iframe width="100%" height="515" title="recipeVideo"
                                    src={`https://www.youtube.com/embed/${id}`}>
                                </iframe>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default RecipeInfo