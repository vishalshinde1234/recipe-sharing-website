import RecipeList from "@/components/recipe-list"
import AddRecipeForm from "@/components/add-recipe-form"
import { UtensilsCrossed } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <UtensilsCrossed className="mr-4" size={48} />
            Recipe Sharing Platform
          </h1>
          <p className="text-xl md:text-2xl">Discover and share delicious recipes from around the world</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Welcome to our Recipe Community!</h2>
          <p className="text-lg text-gray-600">
            Explore a variety of mouthwatering recipes or share your own culinary creations with fellow food
            enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
            <RecipeList />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Share Your Recipe</h2>
            <AddRecipeForm />
          </div>
        </div>
      </main>
    </div>
  )
}

