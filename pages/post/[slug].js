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
				<meta
					property='og:url'
					content={`https://nextjs-blog-eta-nine.vercel.app${route.asPath}`}
				/>
				<meta name='description' content={postData.data.description} />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={postData.data.title[0].text} />
				<meta property='og:description' content={postData.data.description} />
				<meta property='og:image' content={postData.data.image.url} />
				<meta name='twitter:title' content={postData.data.title[0].text}></meta>
				<meta name='twitter:image' content={postData.data.image.url}></meta>
				<meta name='twitter:description' content={postData.data.description} />
				<meta name='twitter:image' content={postData.data.image.url} />
				<meta name='twitter:card' content='summary_large_image' />
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
								By {postData.data.author} |{' '}
								{moment(postData.data.first_publication_date).format('LL')}
							</span>
						</div>
						<img src={postData.data.image.url} alt='' />
					</div>
					<SliceZone content={postData ? postData.data.body : ''} />
					<section className='share'>
						<h4>Share the article</h4>
						<div className='share-links'>
							<FacebookShareButton url={`https://edupro.cf${route.asPath}`}>
								<div className='share-facebook'>
									<img src='/images/facebook-f-brands.svg' alt='' />
								</div>
							</FacebookShareButton>

							<TwitterShareButton url={`https://edupro.cf${route.asPath}`}>
								<div className='share-twitter'>
									<img src='/images/twitter-brands.svg' alt='' />
								</div>
							</TwitterShareButton>
							<VKShareButton url={`https://edupro.cf${route.asPath}`}>
								<div className='share-vk'>
									<img src='/images/vk-brands.svg' alt='' />
								</div>
							</VKShareButton>
						</div>
					</section>
					<section className='comments'>
						<h4 className='comment-title'>Leave a comment</h4>
						<div className='comments-container'>
							<FacebookProvider appId='749408989149871'>
								<Comments width='100%' data-mobile href={`https://edupro.cf${route.asPath}`} />
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
