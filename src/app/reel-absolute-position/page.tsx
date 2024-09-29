'use client'

import { useState, useRef, useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"
import styles from './style.module.css'

// Mock data for reels
const reels = [
  { id: 1, user: 'user1', video: 'https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5382.jpg?t=st=1727441227~exp=1727444827~hmac=f941231399b8e841182c6eb80dd7de3a066798bd2e4614db19ba723fcf949a0e&w=360', likes: 1234, comments: 56 },
  { id: 2, user: 'user2', video: 'https://img.freepik.com/free-photo/girls-winter_1157-4297.jpg?t=st=1727441228~exp=1727444828~hmac=9429684728d6bb8ec7eab1d0d43102a0fb8083bbbc00a56345b1453ff5adccda&w=360', likes: 5678, comments: 90 },
  { id: 3, user: 'user3', video: 'https://img.freepik.com/free-photo/young-bosnian-woman-with-red-lipstick-hat-smiling_181624-51062.jpg?t=st=1727441230~exp=1727444830~hmac=93af763f2225c3f094b4b30365d605bd976d3443a8013ebd775493943b0cbf27&w=360', likes: 9012, comments: 34 },
  // Add more mock reels as needed
]

const Reel = ({ reel, isActive }: {reel: any, isActive: boolean}) => {
  return (
    <div className="relative w-full h-[90vh] bg-black flex items-center justify-center">
      <video
        src={reel.video}
        className="w-full h-full object-cover"
      />
      
      {/* Action buttons */}
      <div className="flex flex-col space-y-4 absolute right-2 bottom-20">
        <Button variant="ghost" size="icon" className="text-white">
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Send className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Bookmark className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}  

export default function InstagramReels() {
  const [activeReel, setActiveReel] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollTop
        const reelHeight = window.innerHeight
        const newActiveReel = Math.round(scrollPosition / reelHeight)
        setActiveReel(newActiveReel)
      }
    }

    const scrollArea = scrollRef.current
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])



  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <ScrollArea ref={scrollRef} className="w-[30vw] h-[90vh]">
        {reels.map((reel, index) => (
          <Reel key={reel.id} reel={reel} isActive={index === activeReel} />
        ))}
      </ScrollArea>
    </div>
  );
}