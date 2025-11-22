export default function BlogPage() {
    const posts = [
      { id: "1", title: "Post One", body: "This is the body of post one." },
      { id: "2", title: "Post Two", body: "This is the body of post two." },
      { id: "3", title: "Post Three", body: "This is the body of post three." }
    ]
  return <div>
    <h1>Blog Page</h1>
    <div>
        {posts.map((post)=>{
            return (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            )
        })}
    </div>
  </div>;
}