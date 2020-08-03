import '../styles/css/Article_link.css'
import moment from 'moment'
import Link from 'next/link'
function ArticleLink({ e }) {
	return (
		<div className='article'>
			<Link href={`/post/[slug]`} as={`/post/${e.uid}`} passHref>
				<a className='image-link'>
					<img src={e.data.image.url} alt='' />
				</a>
			</Link>
			<div className='textbox'>
				<Link href='/category/category/' as={`/category/${e.data.category}`} passHref>
					<a className='category'>{e.data.category}</a>
				</Link>
				<Link href={`/post/[slug]`} as={`/post/${e.uid}`} passHref>
					<a>
						<h2 className='title'>{e.data.title[0].text}</h2>
						<p className='desc'>{e.data.description}</p>
					</a>
				</Link>
				<div className='meta'>
					<span className='author'>{e.data.author}</span>
					<span className='date'>{moment(e.first_publication_date).format('LL')}</span>
				</div>
			</div>
		</div>
	)
}

export default ArticleLink
