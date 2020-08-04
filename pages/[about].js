import Layout from '../components/Layout'
import Head from 'next/head'
const about = () => {
	return (
		<Layout>
			<Head>
				<title>About | EduPro</title>
				<meta
					name='description'
					content='This page is about the team behind the media resource EduPro'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='About EduPro' />
				<meta
					property='og:description'
					content='This page is about the team behind the media resource EduPro'
				/>
				<meta name='twitter:title' content={`About EduPro`}></meta>
				<meta
					name='twitter:description'
					content='This page is about the team behind the media resource EduPro'
				/>
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<h1>About us</h1>
		</Layout>
	)
}

export default about
