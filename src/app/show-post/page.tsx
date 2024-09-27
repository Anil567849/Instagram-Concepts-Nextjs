'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { convertToWebp, resizeImage } from './utils/imageOptimization';

const SRC = 'https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';






















function Instagram() {

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            convertToWebp(file);
            resizeImage(file);
        }
    }

  return (
    <div>
        {/* Upload Image  */}
        <Input 
            type="file"
            placeholder='Choose Image'
            onChange={handleImage}
        />

        {/* Show Post  */}
        <Image 
            src={SRC}
            alt='Instagram Post'
            height={1080}
            width={1080}
            priority
        />
    </div>
  )
}

export default Instagram