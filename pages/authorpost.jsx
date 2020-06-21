import React from 'react'
import Layout from '../component/Layout'
import Seo from '../component/Seo'
import Axios from 'axios'
import Styles from "../styles/index.module.css"

const AuthorPost = ({ post, author }) => {
    return (
        <Layout>
            <Seo title="Post description" />
            <div className={Styles.post}>
                <div className={Styles.author}>
                    <div className={Styles.avatar}></div>
                    <div>
                        <p className={Styles.author_name}>{author.name}</p>
                        <p className={Styles.author_email}>{author.email}</p>
                    </div>
                </div>
                <h1>{post.title}</h1>
                <div className={Styles.postImage}>
                    <img src='/assets/nextjs.svg' alt="dummy-alt" />
                </div>
                <p className={Styles.body}>{post.body}</p>
            </div>
        </Layout>
    )
}


AuthorPost.getInitialProps = async (context) => {
    const postId = context.query.id
    const response = await Axios.get(`http://jsonplaceholder.typicode.com/posts?id=${postId}`)
    const result = await Axios.get(`http://jsonplaceholder.typicode.com/users?id=${response.data[0].userId}`)
    return {
        post: response.data[0],
        author: result.data[0]
    }
}

export default AuthorPost
