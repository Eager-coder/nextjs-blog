import { useRouter } from 'next/router'
import Link from 'next/link'
import moment from 'moment'
import Client from '../../prismicClient'
import '../../styles/css/Post.css'
import SliceZone from '../../components/SliceZone'
import Layout from '../../components/Layout'
import { FacebookShareButton, VKShareButton, TwitterShareButton } from 'react-share'
import { FacebookProvider, Comments } from 'react-facebook'
import Head from 'next/head'
const Post = ({ postData }) => {
	const route = useRouter()
	return (
		<Layout>
			<Head>
				<title>{postData.data.title[0].text} | EduPro</title>
				<meta property='og:url' content={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`} />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={postData.data.title[0].text} />
				<meta property='og:description' content={postData.data.description} />
				<meta property='og:image' content={postData.data.image.url} />
				<meta name='twitter:title' content={postData.data.title[0].text}></meta>
				<meta name='twitter:image' content={postData.data.image.url}></meta>
			</Head>
			<article className='post'>
				<div className='post-container'>
					<div className='hero'>
						<Link href={`/category/[category]`} as={`/category/${postData.data.category}`}>
							<a className='category'>{postData.data.category}</a>
						</Link>
						<h1>{postData.data.title[0].text}</h1>
						<p className='desc'>{postData.data.description}</p>
						<hr />
						<div className='date-and-author'>
							<span>
								By {postData.data.author} | {moment(postData.data.first_publication_date).format('LL')}
							</span>
						</div>
						<img src={postData.data.image.url} alt='' />
					</div>
					<SliceZone content={postData ? postData.data.body : ''} />
					<section className='share'>
						<h4>Share the article</h4>
						<div className='share-links'>
							<a className='share-facebook' href={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`} target='_blank'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://twitter.com/share?ref_src=twsrc%5Etfw'
								// className='twitter-share-button'
								// data-size='large'
								data-url={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`}
								data-show-count='false'>
								<i className='fab fa-twitter'></i>
							</a>
							<a className='share-vk' href={`https://vk.com/share.php?url=https://nextjs-blog-eta-nine.vercel.app${route.asPath}`} target='_blank'>
								<i className='fab fa-vk'></i>
							</a>
							<FacebookShareButton url={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`}>Hefew</FacebookShareButton>
							<VKShareButton url={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`}>Sharevk</VKShareButton>
							<TwitterShareButton url={`https://nextjs-blog-eta-nine.vercel.app/${route.asPath}`}>Tweet</TwitterShareButton>
						</div>
					</section>
					<section className='comments'>
						<h4 className='comment-title'>Leave a comment</h4>
						<div className='comments-container'>
							<FacebookProvider appId='749408989149871'>
								<Comments width='100%' href={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`} />
							</FacebookProvider>
						</div>
					</section>
				</div>
			</article>
		</Layout>
	)
}

export default Post

export async function getServerSideProps({ query }) {
	const postData = await Client.getByUID('blog_post', query.slug)
	return { props: { postData } }
}
