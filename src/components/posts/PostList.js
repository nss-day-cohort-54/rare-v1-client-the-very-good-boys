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
                                    <p>{post.user.first_name} {post.user.last_name}</p>
                                    <p>{post.category.label}</p>

                               </div>
                               </>
                    }
                )
            }
        </article>
    )
}