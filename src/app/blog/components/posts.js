"use client"
import Link from 'next/link'
export const Posts = (post) => {

  return (
    <div  className='flex justify-center items-center flex-col gap-5'>
            {post.map((post) => {
                return (
                    <div key={post.id} className='border p-5'>
                        <Link href={`/blog/${post.id}`}  className='bold text-xl underline justify-center flex items-center flex-col gap-5 capitalize indigo-800 hover:text-indigo-900 transition-all duration-700 ease-in-out'>
                            <h2 className='indigo-600 '>{post.title}</h2>
                        </Link>
                        <p className='text-sm font-italic'>{post.body}</p>
                    </div>
                )
            })}
        </div>
  )
}
