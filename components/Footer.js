import NavLink from './NavLink'
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
						<ul className='link-column'>
							<span className='column-name'>Articles</span>
							<NavLink href='/category/[category]' as='/category/education' text='Education' />
							<NavLink href='/category/[category]' as='/category/hobby' text='Hobby' />
							<NavLink
								href='/category/[category]'
								as='/category/entertainment'
								text='Entertainment'
							/>
							<NavLink href='/category/[category]' as='/category/lifestyle' text='Lifestyle' />
							<NavLink href='/category/[category]' as='/category/business' text='Business' />
							<NavLink href='/category/[category]' as='/category/tech' text='Tech' />
						</ul>
						<ul className='link-column'>
							<span className='column-name'>WE ARE</span>
							<NavLink href='/about' text='About' passHref />
							<NavLink href='/about' text='Our team' passHref />
							<NavLink href='/about' text='Support us' passHref />
						</ul>
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
