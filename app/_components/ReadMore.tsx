'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ReadMore = ({slug}: {slug: string}) => {
  const router = useRouter()

  const handleReadMore = () => {
    router.push(`/blog/${slug}`)
  }

  return (
    <div onClick={handleReadMore} className="underline-animated select-none cursor-pointer font-medium text-gray-800 hover:text-blue-800 dark:text-white hover:dark:text-blue-200">
      Read more
    </div>
  )
}

export default ReadMore