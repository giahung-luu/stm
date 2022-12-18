import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getPostById } from "../../services/postService";

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState({});
  useEffect(() => {
    getPostById(id)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(post)
  return (
    <>
            <h1 className="tw-text-4xl tw-font-bold tw-mb-2">
              {post.topic}
            </h1>
            <ul className="tw-ml-6 tw-mb-4">
              {post?.content?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="tw-text-gray-300 tw-list-disc tw-mb-1"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
    </>
  )
}
export default Post
Post.layout = "default";
