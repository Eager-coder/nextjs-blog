import Client from '../../prismicClient'
import Prismic from 'prismic-javascript'
import ArticleLink from '../../components/ArticleLink'
import '../../styles/css/Category.css'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import Head from 'next/head'
function Category({ posts, category }) {
	const route = useRouter()
	return (
		<Layout>
			<Head>
				<title>{category} | EduPro</title>
				<meta property='og:url' content={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`} />
				<meta property='og:type' content='website' />
			</Head>
			<section className='category'>
				<h1>Category: {category}</h1>
				<div className='category-container'>
					{posts.map((e, index) => (
						<ArticleLink key={index} e={e} />
					))}
				</div>
			</section>
		</Layout>
	)
}

export default Category

export async function getServerSideProps({ query }) {
	const { results } = await Client.query(Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[document.first_publication_date desc]' })
	const posts = results.filter(e => e.data.category === query.category)
	return { props: { posts, category: query.category } }
}
// 'fulltext search'
// const res = await Client.query(
//     Prismic.Predicates.fulltext('document', 'hello')
// )
