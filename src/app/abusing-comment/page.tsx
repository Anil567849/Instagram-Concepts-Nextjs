"use client"

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
function isValid(c: string){
    return true;
}
export default function Component() {
    const [comment, setComment] = useState("");
    const [valid, setValid] = useState(true);




    const handleComment = () => {
        if(isValid(comment)){
            setValid(true);
        }else{
            setValid(false);
        }
    }





  return (
    <div className="flex justify-start items-center h-screen flex-col mt-10">
        <input 
        className='border-2 p-2' 
        type="text" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        name="comment" 
        placeholder='Comment'/>
        <button onClick={handleComment}>Submit</button>
    </div>
  )
}