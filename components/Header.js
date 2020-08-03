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
					<img src='/assets/burger.svg' alt='' />
				</div>
			</div>
			<nav className='nav-mobile'>
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
		</header>
	)
}

export default Header
