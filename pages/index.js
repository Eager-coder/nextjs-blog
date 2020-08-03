import Client from '../prismicClient'
import Prismic from 'prismic-javascript'
import FrontLink from '../components/FrontLink'
import Layout from '../components/Layout'
import ArticleLink from '../components/ArticleLink'
import Head from 'next/head'
import '../styles/css/Home.css'
const Home = ({ results, links }) => {
	return (
		<Layout>
			<Head>
				<title>EduPro</title>
				<meta name='description' content='Education Progress - quality of education that you deserve	' />
				<meta name='twitter:card' value='summary' />
				<meta property='og:title' content='Education Progress' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://nextjs-blog-eta-nine.vercel.app/' />
				<meta
					property='og:image'
					content='https://images.prismic.io/gatsby-and-prismic-website/47149ecf-207c-4b2f-b411-ef55afe803e0_man.webp?auto=compress,format&amp;rect=0,0,600,400&amp;w=1500&amp;h=1000'
				/>
				<meta property='og:description' content='Education Progress - quality of education that you deserve' />
			</Head>
			<div className='home-container'>
				<section className='front-grid'>
					<FrontLink link={links.leftLink} className='front-left' />
					<FrontLink link={links.topLink} className='front-small top' />
					<FrontLink link={links.bottomLink} className='front-small bottom' />
				</section>
				<hr />
				<section className='latests'>
					<h2 className='latests-header'>Latests</h2>
					<div className='latests-container'>
						{results.map((e, index) => (
							<ArticleLink e={e} key={index} />
						))}
					</div>
				</section>
			</div>
		</Layout>
	)
}
export default Home

export async function getServerSideProps() {
	const {
		data: {
			body: [
				{
					primary: { left_link, top_link, bottom_link },
				},
			],
		},
	} = await Client.getSingle('home_page')
	const { results } = await Client.query(Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[document.first_publication_date desc]' })
	console.log(left_link)
	let links = {}
	results.forEach(e => {
		if (e.uid === left_link.uid)
			links.leftLink = {
				uid: e.uid,
				image: e.data.image.url,
				title: e.data.title[0].text,
				category: e.data.category,
				date: e.data.publication_date,
				author: e.data.author,
			}
		if (e.uid === top_link.uid)
			links.topLink = {
				uid: e.uid,
				image: e.data.image.url,
				title: e.data.title[0].text,
				category: e.data.category,
				date: e.data.publication_date,
				author: e.data.author,
			}
		if (e.uid === bottom_link.uid)
			links.bottomLink = {
				uid: e.uid,
				image: e.data.image.url,
				title: e.data.title[0].text,
				category: e.data.category,
				date: e.data.publication_date,
				author: e.data.author,
			}
	})
	return {
		props: { results, links },
	}
}
