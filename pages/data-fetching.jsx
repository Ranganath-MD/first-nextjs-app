import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import Seo from '../component/Seo'
import Axios from 'axios'
import Styles from "../styles/index.module.css"
import Link from 'next/link'

const DataFetching = (props) => {
    // tried with the normal react

    /* const [posts, setPosts] = useState([])
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => setPosts(response.data))
            .catch(err => console.log(err))
    }, []) */

    return (
        <Layout>
            <Seo title="Fetch Data" />
            <div>
                <h1>Data fetching in Next js</h1>
                <div>
                    {
                        props.posts.map((post, i) => {
                            return (
                                <div key={i}>
                                    <h1 className={Styles.title}>
                                        <Link href={`/authorpost?id=${post.id}`}>
                                            <a> {post.title}</a>
                                        </Link>
                                    </h1>
                                    <p className={Styles.body}>{post.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

// Next js way of fetching the data
DataFetching.getInitialProps = async () => {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    return { posts: res.data }
}


export default DataFetching
