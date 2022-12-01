const Post = (props) => {
  const { post } = props;
  return ( 
    <div className="bg-slate-300 m-[20px]">
      <div className="p-[15px]">
        <h1 className="font-[600] text-[20px]">{post.title}</h1>
        <p className="">{post.description}</p>
        <p className="text-[9px] text-end">@{post.username}</p>
      </div>
    </div>
  );
}

export default Post;