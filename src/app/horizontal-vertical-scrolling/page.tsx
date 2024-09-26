import { Bell, Heart, MessageCircle, PlusSquare, Search, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function InstagramClone() {
  return (
    <div className="min-w-screen min-h-screen mx-auto bg-white flex justify-center">
        <div className="max-w-[50vw] max-h-[98vh] border-2 border-gray-950 p-2 rounded-2xl overflow-y-auto">
            <Header />
            <Stories />
            <Feed />
        </div>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="text-xl font-semibold">Instagram</div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <PlusSquare className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Send className="w-6 h-6" />
        </Button>
      </div>
    </header>
  )
}

function Stories() {
  const stories = [
    { name: "Your Story", image: "/placeholder.svg?height=128&width=128" },
    { name: "John", image: "/placeholder.svg?height=128&width=128" },
    { name: "Sarah", image: "/placeholder.svg?height=128&width=128" },
    { name: "Mike", image: "/placeholder.svg?height=128&width=128" },
    { name: "Emily", image: "/placeholder.svg?height=128&width=128" },
    { name: "Alex", image: "/placeholder.svg?height=128&width=128" },
    { name: "Lisa", image: "/placeholder.svg?height=128&width=128" },
    { name: "Tom", image: "/placeholder.svg?height=128&width=128" },
    { name: "John", image: "/placeholder.svg?height=128&width=128" },
    { name: "Sarah", image: "/placeholder.svg?height=128&width=128" },
    { name: "Mike", image: "/placeholder.svg?height=128&width=128" },
    { name: "Emily", image: "/placeholder.svg?height=128&width=128" },
    { name: "Alex", image: "/placeholder.svg?height=128&width=128" },
    { name: "Lisa", image: "/placeholder.svg?height=128&width=128" },
    { name: "Tom", image: "/placeholder.svg?height=128&width=128" },
  ]

  return (
    <div className="w-full py-4 overflow-x-auto">
      <div className="flex space-x-4 pb-4">
        {stories.map((story, index) => (
          <Story key={index} name={story.name} image={story.image} />
        ))}
      </div>
    </div>
  )
}

function Story({ name, image }: {name: string, image: any}) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="p-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
        <Avatar className="w-14 h-14 border-2 border-white">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-xs">{name}</span>
    </div>
  )
}

function Feed() {
  const posts = [
    {
      user: "John",
      avatar: "/placeholder.svg?height=32&width=32",
      image: "https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 1234,
      caption: "Beautiful day at the beach! 🏖️",
      comments: 56,
      time: "2 HOURS AGO",
    },
    {
      user: "Sarah",
      avatar: "/placeholder.svg?height=32&width=32",
      image: "https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 987,
      caption: "Just finished a great workout 💪",
      comments: 23,
      time: "5 HOURS AGO",
    },
  ]

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  )
}

function Post({ user, avatar, image, likes, caption, comments, time }: 
    { user: any, avatar: any, image: any, likes: any, caption: any, comments: any, time: any }
) {
  return (
    <div className="border-b pb-4">
      <div className="flex items-center space-x-2 p-4">
        <Avatar className="w-8 h-8">
          <AvatarImage src={avatar} alt={user} />
          <AvatarFallback>{user[0]}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{user}</span>
      </div>
      <img src={image} alt="Post" className="w-full" />
      <div className="p-4 space-y-2">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Send className="w-6 h-6" />
          </Button>
        </div>
        <div className="font-semibold">{likes.toLocaleString()} likes</div>
        <div>
          <span className="font-semibold">{user}</span> {caption}
        </div>
        <div className="text-sm text-gray-500">
          View all {comments} comments
        </div>
        <div className="text-xs text-gray-400">{time}</div>
      </div>
      <div className="px-4 flex items-center space-x-2">
        <Input className="flex-grow" placeholder="Add a comment..." />
        <Button variant="ghost" className="text-blue-500 font-semibold">
          Post
        </Button>
      </div>
    </div>
  )
}