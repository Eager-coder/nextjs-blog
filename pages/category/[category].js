import Link from 'next/link'
import Client from '../../prismicClient'
import Prismic from 'prismic-javascript'
import moment from 'moment'
import ArticleLink from '../../components/ArticleLink'
import '../../styles/css/Category.css'
import Layout from '../../components/Layout'
function Category({ posts, category }) {
	console.log(posts)
	return (
		<Layout>
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
	console.log(query)
	const posts = results.filter(e => e.data.category === query.category)
	console.log(posts)
	return { props: { posts, category: query.category } }
}
// 'fulltext search'
// const res = await Client.query(
//     Prismic.Predicates.fulltext('document', 'hello')
// )
