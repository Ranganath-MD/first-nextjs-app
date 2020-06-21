import Layout from '../component/Layout'
import Link from "next/link"
import { withRouter } from "next/router"
import Seo from '../component/Seo'

const Post = (props) => {
    const { title } = props.router.query
    return (
        <Layout>
            <Seo title={title ? title : `Template page`} />
            <p><Link href='dynamic'><a>{`<< Go Back`}</a></Link></p>
            <h1>{title? title: ""}</h1>
        </Layout>
    )
}

export default withRouter(Post)
