import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "nghilt",
      userImg: "/logo.png",
      img: "https://images.unsplash.com/photo-1652904337552-a7d8ca893ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      caption: "Thanks for night city",
    },
    {
      id: "2",
      username: "ltnghi",
      userImg: "/logo.png",
      img: "https://images.unsplash.com/photo-1652904272897-17a86e191902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Sahara",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
