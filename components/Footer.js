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
							<Link href='/category/education'>
								<a className='link'>Education</a>
							</Link>
							<Link href='/category/hobby'>
								<a className='link'>Hobby</a>
							</Link>
							<Link href='/category/entertainment'>
								<a className='link'>Entertainment</a>
							</Link>
							<Link href='/category/business'>
								<a className='link'>Business</a>
							</Link>
							<Link href='/category/lifestyle'>
								<a className='link'>Lifestyle</a>
							</Link>
							<Link href='/category/tech'>
								<a className='link'>Tech</a>
							</Link>
						</div>
						<div className='link-column'>
							<span className='column-name'>WE ARE</span>
							<Link href='/' passHref>
								<a className='link'>About</a>
							</Link>
							<Link href='/' passHref>
								<a className='link'>Jobs</a>
							</Link>
							<Link href='/' passHref>
								<a className='link'>Record</a>
							</Link>
						</div>
					</div>
					<div className='social-media'>
						<span className='column-name'>Follow us</span>
						<div className='meida-links'>
							<div>
								<i className='fab fa-instagram'></i>
							</div>
							<div>
								<i className='fab fa-twitter'></i>
							</div>
							<div>
								<i className='fab fa-facebook-f'></i>
							</div>
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
