import { useRouter } from 'next/router'
const p = 
  {
    imgLink: "#",
    topic : "Topic"
  };
const Post = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id);
  return (
    <>
      <div class={"post" + id}>
        <div class="post-img">
          <img src={p.imgLink}></img>
        </div>
        <div class='down-post'>
          <h4>{p.topic + ""}</h4>
          <span>  </span>
          <p>Nội dung</p>
        </div>
      </div>
    </>
  )
}

export default Post
Post.layout = "default";
