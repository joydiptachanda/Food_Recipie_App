import React, { useState, useEffect } from 'react'

function MealCategories({categoryIndex}) {
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    const [category, setCategory] = useState([])
    var num = 0
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategory(data.meals)

            })
    }, [url])

    return (
        <>
            {
                category.map(item => {
                    return (
                        <div className="categoryBox" key={num++} onClick={()=> categoryIndex(item.strCategory)}>
                            <h3>{item.strCategory}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MealCategories