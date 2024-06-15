import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TredingSlider";
import { useParams } from "react-router-dom";

const RecipeId = () => {
  const { idMeal } = useParams();

  const [data, setData] = useState([]);
  const [active, setActive] = useState("ingredient");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      setData(data.meals[0]);
    };

    fetchData();
  }, [idMeal]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
          {data.strMeal}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="img" style={{ width: "40%", marginTop: "2rem" }}>
            <img src={data.strMealThumb} alt="" style={{ width: "100%" }} />
          </div>

          <div className="content" style={{ width: "60%" }}>
            <button
              className="btn"
              onClick={() => setActive("ingredient")}
              style={{
                cursor: "pointer",
                borderRadius: "7px",
                marginRight: "5px",
              }}
            >
              Ingredient
            </button>
            <button
              className="btn"
              onClick={() => setActive("instruction")}
              style={{
                cursor: "pointer",
                borderRadius: "7px",
                background: "Crimson",
                marginLeft: "5px",
              }}
            >
              Instruction
            </button>

            {active === "ingredient" ? (
              <table
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  borderCollapse: "collapse",
                  fontSize: "1rem",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "4px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Ingredient
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "4px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Measure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getIngredients().map((item, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          border: "1px solid #ddd",
                          padding: "4px",
                          fontSize: "1rem",
                        }}
                      >
                        {item.ingredient}
                      </td>
                      <td
                        style={{
                          border: "1px solid #ddd",
                          padding: "4px",
                          fontSize: "1rem",
                        }}
                      >
                        {item.measure}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ fontSize: "1rem" }}>{data.strInstructions}</p>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <TrendingSlider />
      </div>
    </>
  );
};

export default RecipeId;
