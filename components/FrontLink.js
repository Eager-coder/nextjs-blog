import Link from 'next/link'
import '../styles/css/Front_link.css'
const FrontLink = ({ link, className }) => {
	return (
		<div className={className}>
			<Link href={`/post/[slug]`} as={`/post/${link.uid}`} passHref>
				<a>
					<img src={link.image} alt='' />
				</a>
			</Link>
			<div className='textbox'>
				<Link href='/category/[category]' as={`/category/${link.category}`} passHref>
					<a className='category'>{link.category}</a>
				</Link>
				<Link href={`/post/[slug]`} as={`/post/${link.uid}`} passHref>
					<a>
						<h2 className='title'>{link.title}</h2>
					</a>
				</Link>
				<p>{link.description}...</p>
				<div className='meta'>
					{/* <span className='date'>{link.date}</span> */}
					<span className='author'>{link.author}</span>
				</div>
			</div>
		</div>
	)
}

export default FrontLink
