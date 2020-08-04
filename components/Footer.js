import Link from 'next/link'
import '../styles/css/Footer.css'
function Footer() {
	return (
		<footer>
			<div className='footer-container'>
				<div className='flex-container'>
					<div className='logo'>
						<span>EduPro</span>
					</div>
					<div className='links'>
						<div className='link-column'>
							<span className='column-name'>Articles</span>
							<Link href='/category/[category]' as='/category/education' passHref>
								<a className='link'>Education</a>
							</Link>
							<Link href='/category/[category]' as='/category/hobby' passHref>
								<a className='link'>Hobby</a>
							</Link>
							<Link href='/category/[category]' as='/category/entertainment' passHref>
								<a className='link'>Entertainment</a>
							</Link>
							<Link href='/category/[category]' as='/category/business' passHref>
								<a className='link'>Business</a>
							</Link>
							<Link href='/category/[category]' as='/category/lifestyle' passHref>
								<a className='link'>Lifestyle</a>
							</Link>
							<Link href='/category/[category]' as='/category/tech' passHref>
								<a className='link'>Tech</a>
							</Link>
						</div>
						<div className='link-column'>
							<span className='column-name'>WE ARE</span>
							<Link href='/about' passHref>
								<a className='link'>About</a>
							</Link>
							<Link href='/about' passHref>
								<a className='link'>Our team</a>
							</Link>
							<Link href='/about' passHref>
								<a className='link'>Support us</a>
							</Link>
						</div>
					</div>
					<div className='social-media'>
						<span className='column-name'>Follow us</span>
						<div className='meida-links'>
							<a className='link' target='_blank' href='https://instagram.com'>
								<img src='/images/instagram-brands.svg' alt='' />
							</a>
							<a className='link' target='_blank' href='https://twitter.com'>
								<img src='/images/twitter-brands.svg' alt='' />
							</a>
							<a className='link' target='_blank' href='https://facebook.com'>
								<img src='/images/facebook-f-brands.svg' alt='' />
							</a>
						</div>
					</div>
				</div>

				<div className='bottom-items'>
					<span>© 2020 Education Progress</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
