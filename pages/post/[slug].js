import { useRouter } from 'next/router'
import Link from 'next/link'
import moment from 'moment'
import Client from '../../prismicClient'
import Prismic from 'prismic-javascript'
import '../../styles/css/Post.css'
import SliceZone from '../../components/SliceZone'
import Layout from '../../components/Layout'
import { FacebookShareButton, VKShareButton, TwitterShareButton } from 'react-share'
import { FacebookProvider, Comments, ShareButton } from 'react-facebook'
const Post = ({ postData }) => {
	const route = useRouter()
	console.log(route)
	return (
		<Layout>
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
							<a className='share-facebook' href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/${route.asPath}`} target='_blank'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://twitter.com/share?ref_src=twsrc%5Etfw'
								// className='twitter-share-button'
								// data-size='large'
								data-url={`http://localhost:3000/${route.asPath}`}
								data-show-count='false'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a className='share-vk' href={`https://vk.com/share.php?url=http://localhost:3000/${route.asPath}`} target='_blank'>
								<i className='fab fa-vk'></i>
							</a>
							<FacebookShareButton url={`http://localhost:3000/${route.asPath}`}>Hefew</FacebookShareButton>
							<VKShareButton url={`http://localhost:3000/${route.asPath}`}>Sharevk</VKShareButton>
							<TwitterShareButton url={`http://localhost:3000/${route.asPath}`}>Tweet</TwitterShareButton>
						</div>
					</section>
					<section className='comments'>
						<h4 className='comment-title'>Leave a comment</h4>
						<div className='comments-container'>
							<FacebookProvider appId='749408989149871'>
								<Comments width='100%' href={'https://edupro.netlify.app/post/how-i-learned-handstand1'} />
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
