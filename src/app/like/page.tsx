"use client"

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const LikeComponent = () => (
    <Button 
      variant="ghost" 
      className="flex items-center space-x-2 text-red-500 hover:text-red-600 hover:bg-red-50" 
      onClick={toggleLike}
    >
      <Heart size={72} fill="currentColor" />
      <span>Liked</span>
    </Button>
  )

  const NotLikeComponent = () => (
    <Button 
      variant="ghost" 
      className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50" 
      onClick={toggleLike}
    >
      <Heart size={72} />
      <span>Like</span>
    </Button>
  ) 


  return (
    <div className="flex justify-start items-center h-screen flex-col mt-10">
        <h1 className="text-5xl text-center mb-10 font-bold">Instagram Pro</h1>

        {
            isLiked ? <LikeComponent /> : <NotLikeComponent />
        }

    </div>
  )
}