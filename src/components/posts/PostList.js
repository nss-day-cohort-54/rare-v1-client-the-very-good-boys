import { Link } from "react-router-dom"


export const PostList = ({posts}) => {


    return (
        <article className="postListContainer">
            <h1 className="postListHeader">Posts</h1>
            {
                posts.map(
                    post => {
                        return <>
                              <div>

                                    <Link  to={`/posts/${post.id}`}>{post.title}</Link>

                               </div>
                               </>
                    }
                )
            }
        </article>
    )
}