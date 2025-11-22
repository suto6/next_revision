import Link from 'next/link';
import { Suspense } from 'react';
import Posts from './components/posts';
export default async function BlogPage() {

    // const data = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    // const post = await data.json();
    // const posts = [
    //     { id: "1", title: "Post One", body: "This is the body of post one." },
    //     { id: "2", title: "Post Two", body: "This is the body of post two." },
    //     { id: "3", title: "Post Three", body: "This is the body of post three." }
    // ]
    const post = fetch("https://jsonplaceholder.typicode.com/postss").then(res=>res.json());
    return <div>
        <h1>Blog Page</h1>
        {/* <div  className='flex justify-center items-center flex-col gap-5'>
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
        </div> */}
        <Suspense fallback={<div>Loading...</div>}>
        <Posts post={post}/>
        </Suspense>
    </div>;
}