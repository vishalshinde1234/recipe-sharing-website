"use client"

import { useState, useEffect } from "react"
import RecipeCard from "./recipe-card"

interface Recipe {
  id: number
  title: string
  ingredients: string[]
  instructions: string
  prepTime: string
  servings: number
  cuisine: string
}

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const sampleRecipes: Recipe[] = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
        instructions: "Cook pasta. Mix eggs and cheese. Fry guanciale. Combine all ingredients.",
        prepTime: "20 mins",
        servings: 4,
        cuisine: "Italian",
      },
      {
        id: 2,
        title: "Chicken Stir Fry",
        ingredients: ["chicken breast", "bell peppers", "onion", "soy sauce", "vegetable oil"],
        instructions: "Cut chicken and vegetables. Stir fry chicken. Add vegetables and sauce. Cook until done.",
        prepTime: "30 mins",
        servings: 3,
        cuisine: "Asian",
      },
      {
        id: 3,
        title: "Vegetarian Tacos",
        ingredients: ["corn tortillas", "black beans", "avocado", "tomatoes", "lettuce", "cheese", "sour cream"],
        instructions: "Heat beans. Warm tortillas. Assemble tacos with all ingredients.",
        prepTime: "15 mins",
        servings: 4,
        cuisine: "Mexican",
      },
      {
        id: 4,
        title: "Greek Salad",
        ingredients: [
          "cucumber",
          "tomatoes",
          "red onion",
          "feta cheese",
          "kalamata olives",
          "olive oil",
          "lemon juice",
        ],
        instructions: "Chop vegetables. Mix with olives and cheese. Dress with oil and lemon juice.",
        prepTime: "10 mins",
        servings: 2,
        cuisine: "Greek",
      },
      {
        id: 5,
        title: "Beef Bourguignon",
        ingredients: ["beef chuck", "red wine", "bacon", "mushrooms", "pearl onions", "carrots", "beef broth"],
        instructions: "Brown beef and bacon. Add vegetables and wine. Simmer until beef is tender.",
        prepTime: "3 hours",
        servings: 6,
        cuisine: "French",
      },
      {
        id: 6,
        title: "Sushi Rolls",
        ingredients: ["sushi rice", "nori sheets", "cucumber", "avocado", "imitation crab", "sesame seeds"],
        instructions: "Prepare sushi rice. Lay out nori. Add ingredients. Roll and cut into pieces.",
        prepTime: "45 mins",
        servings: 4,
        cuisine: "Japanese",
      },
      {
        id: 7,
        title: "Butter Chicken",
        ingredients: [
          "chicken thighs",
          "yogurt",
          "tomato sauce",
          "cream",
          "garam masala",
          "butter",
          "garlic",
          "ginger",
        ],
        instructions: "Marinate chicken. Cook in tomato sauce with spices. Add cream and butter.",
        prepTime: "1 hour",
        servings: 4,
        cuisine: "Indian",
      },
      {
        id: 8,
        title: "Quinoa Salad",
        ingredients: ["quinoa", "cucumber", "cherry tomatoes", "feta cheese", "red onion", "lemon juice", "olive oil"],
        instructions: "Cook quinoa. Chop vegetables. Mix all ingredients with dressing.",
        prepTime: "25 mins",
        servings: 4,
        cuisine: "Mediterranean",
      },
    ]
    setRecipes(sampleRecipes)
  }, [])

  return (
    <div className="space-y-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

