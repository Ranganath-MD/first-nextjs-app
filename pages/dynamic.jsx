import Layout from '../component/Layout'
import Seo from '../component/Seo'
import Link from 'next/link'
import Styles from "../styles/index.module.css"

const articles = [
    { id: `article-1`, title: `🎉Learning Next Js`, desc: "Next js is React framework for almost everything" },
    { id: `article-2`, title: `🚀Learning Next Routing`, desc: "Next js routing makes easy to navigate between the pages" },
    { id: `article-3`, title: `✨Learning Next Styles`, desc: "Styles in next js using css, scss, styled jsx" },
    { id: `article-4`, title: `🔌Learning Next Data Fetcing`, desc: "How to fetch the data in Next js" },
]

const Dynamic = () => {
    return (
        <Layout>
            <Seo title="Dynamic Routing" />
            <h1 className={Styles.heading}>Dynamic Routing</h1>
            {
                articles.map((item, i)=> {
                    return (
                        <div key={i}>
                            <h1 className={Styles.link}>
                                <Link href={`/post?title=${item.title}`}><a>{item.title}</a></Link>
                            </h1>
                            <p className={Styles.desc}>{item.desc}</p>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export default Dynamic
