import Head from 'next/head'

const Seo = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width"></meta>
            <meta name="descrption" content={description}></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo
