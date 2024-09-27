'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HeartIcon, MessageCircleIcon, SendIcon, BookmarkIcon } from "lucide-react"

export default function InstagramPost() {
  const [isLiked, setIsLiked] = useState(false)
  const [showHeart, setShowHeart] = useState(false)

  let timer: NodeJS.Timeout | null = null;
  useEffect(() => {
    if (showHeart && !timer) {
      timer = setTimeout(() => {
        setShowHeart(false);
        timer = null;
      }, 1000)
    }
    return () => {
        if(timer) clearTimeout(timer)
    }
  }, [showHeart])

  const handleDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true)
    }
    if(!showHeart){
        setShowHeart(true);
    }
  }


  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center space-x-4 p-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">New York, USA</p>
        </div>
      </CardHeader>
     
      <CardContent className="p-0 relative">
        <div 
          className="relative aspect-square"
          onDoubleClick={handleDoubleClick}
        >


          <img
            src="https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?t=st=1727421832~exp=1727425432~hmac=0c65b00808cebbdb0d6fea010d8bc7f7112ffa9ff181a19b39124ab1753b6470&w=360"
            alt="Instagram post image"
            className="w-full h-full object-cover"
          />
          {showHeart && (
            <div className="absolute inset-0 flex items-center justify-center">
              <HeartIcon className="w-24 h-24 animate-ping text-red-500 fill-red-500" />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 p-4">
        <div className="flex justify-between w-full">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleLike}>
              <HeartIcon className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-red-500' : ''}`} />
              <span className="sr-only">{isLiked ? 'Unlike' : 'Like'}</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircleIcon className="w-6 h-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon">
              <SendIcon className="w-6 h-6" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <BookmarkIcon className="w-6 h-6" />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div className="text-sm text-start w-full">
          <span className="font-bold">1,234 likes</span>
        </div>
        <div className="text-sm">
          <span className="font-bold">John Doe</span> Beautiful sunset view from my balcony! #sunset #views
        </div>
      </CardFooter>
    </Card>
  )
}