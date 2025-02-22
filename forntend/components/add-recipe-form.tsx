"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddRecipeForm() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  const [prepTime, setPrepTime] = useState("")
  const [servings, setServings] = useState("")
  const [cuisine, setCuisine] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this data to an API
    console.log({
      title,
      ingredients: ingredients.split(","),
      instructions,
      prepTime,
      servings: Number.parseInt(servings),
      cuisine,
    })
    // Reset form
    setTitle("")
    setIngredients("")
    setInstructions("")
    setPrepTime("")
    setServings("")
    setCuisine("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a New Recipe</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Recipe Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              required
            />
          </div>
          <div>
            <Label htmlFor="ingredients">Ingredients (comma-separated)</Label>
            <Textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients, separated by commas"
              required
            />
          </div>
          <div>
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter cooking instructions"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="prepTime">Preparation Time</Label>
              <Input
                id="prepTime"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                placeholder="e.g., 30 mins"
                required
              />
            </div>
            <div>
              <Label htmlFor="servings">Servings</Label>
              <Input
                id="servings"
                type="number"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                placeholder="e.g., 4"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="cuisine">Cuisine</Label>
            <Input
              id="cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              placeholder="e.g., Italian, Mexican, Asian"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Add Recipe
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

