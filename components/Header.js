import Link from 'next/link'
import '../styles/css/Header.css'
const Header = () => {
	const toggleMenu = () => {
		const menu = document.querySelector('.nav-mobile')
		menu.classList.toggle('menu-active')
		console.log('hello')
	}
	return (
		<header>
			<div className='header-container'>
				<h1>
					<Link href='/'>
						<a>Edu</a>
					</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/all-posts'>
								<a>Posts</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/contacts'>
								<a>Contacts</a>
							</Link>
						</li>
						<li>
							<Link href='/products'>
								<a>Products</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div className='burger-btn' onClick={toggleMenu}>
					<img src='/images/burger.svg' alt='' />
				</div>
			</div>
			<nav className='nav-mobile'>
				<ul className='nav-links'>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/category/education'>
							<a>Education</a>
						</Link>
					</li>
					<li>
						<Link href='/category/hobby'>
							<a>Hobby</a>
						</Link>
					</li>
					<li>
						<Link href='/category/entertainment'>
							<a>Entertainment</a>
						</Link>
					</li>
					<li>
						<Link href='/category/lifestyle'>
							<a>Lifestyle</a>
						</Link>
					</li>
					<li>
						<Link href='/category/business'>
							<a>Business</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href='/contacts'>
							<a>Contacts</a>
						</Link>
					</li>
					<li>
						<Link href='/products'>
							<a>Products</a>
						</Link>
					</li>
				</ul>
				<ul className='media-links'>
					<a href='www.instagram.com'>
						<i className='fab fa-instagram'></i>
					</a>
					<a href='www.twitter.com'>
						<i className='fab fa-twitter'></i>
					</a>
					<a href='www.facebook.com'>
						<i aria-hidden='false' className='fab fa-facebook-f'></i>
					</a>
				</ul>
			</nav>
		</header>
	)
}

export default Header
