import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Globe } from "lucide-react"

interface Recipe {
  id: number
  title: string
  ingredients: string[]
  instructions: string
  prepTime: string
  servings: number
  cuisine: string
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription className="text-primary-foreground/80">A delicious {recipe.cuisine} recipe</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {recipe.prepTime}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            Serves {recipe.servings}
          </div>
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-1" />
            {recipe.cuisine}
          </div>
        </div>
        <h3 className="font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <p className="text-sm">{recipe.instructions}</p>
      </CardContent>
    </Card>
  )
}

