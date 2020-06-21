import Layout from "../component/Layout"
import Link from "next/link"
import Seo from "../component/Seo"
import Styles from "../styles/index.module.css"

const Home = () => {
  return (
    <Layout>
      <Seo
        title="My First NextJS App"
        description="Index page to of my app"
      />
      <div>
        <div className={Styles.container}>
          <div className={Styles.image}>
              <img src="assets/Coding.png" alt="forest" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home