import React from 'react'
import { useNavigate } from 'react-router-dom';

function MealItem({ data }) {
    console.log(data);
    let navigate = useNavigate();
    return (
        <>
            {
                (!data) ? "Not Found" : data.map(item => {
                    return (
                        // <div className="card"
                        //      key={item.idMeal}
                        //      onClick={()=>{navigate(`/${item.idMeal}`)}}>
                        //     <img src={item.strMealThumb} alt="IMG" />
                        //     <h3>{item.strMeal}</h3>
                        // </div>
                        <div className="card"
                            key={item.idMeal}
                            onClick={() => { navigate(`/${item.idMeal}`) }}>
                            <div className="card-image">
                                <img src={item.strMealThumb} alt="IMG" />
                            </div>
                            <p className="card-title">{item.strMeal}</p>
                            <p className="card-body">
                                Country: {item.strArea} <br/>
                                Category: {item.strCategory}
                            </p>
                            <p className="footer">Meal Id: <span className="by-name">{item.idMeal}</span></p>
                        </div>
                    )
                })
            }

        </>
    )
}

export default MealItem