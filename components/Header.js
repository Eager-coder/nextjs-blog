import Link from 'next/link'
import { useEffect, useState } from 'react'
import '../styles/css/Header.css'
const Header = () => {
	const [isListShown, setIsShown] = useState(false)
	useEffect(() => {
		document.addEventListener('click', e => {
			const postsList = document.querySelector('.posts-list')
			if (e.target.id === 'toggle-post-list' || e.target.parentElement.id === 'toggle-post-list') {
				console.log('efwef')
				postsList.classList.toggle('posts-list-active')
			} else {
				postsList.classList.remove('posts-list-active')
			}
		})
	})

	const toggleMenu = () => {
		const menu = document.querySelector('.nav-mobile')
		menu.classList.toggle('menu-active')
	}
	return (
		<header>
			<div className='header-container'>
				<h1>
					<Link href='/'>
						<a>Edu</a>
					</Link>
				</h1>
				<nav className='nav-desktop'>
					<ul>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li className='posts'>
							<span id='toggle-post-list'>
								Posts <img className='chevron' src='/images/chevron-down-solid.svg' alt='' />
							</span>
							<ul className='posts-list'>
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
							</ul>
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
					<a className='link' target='_blank' href='www.instagram.com'>
						<img src='/images/instagram-brands.svg' alt='' />
					</a>
					<a className='link' target='_blank' href='www.twitter.com'>
						<img src='/images/twitter-brands.svg' alt='' />
					</a>
					<a className='link' target='_blank' href='https://facebook.com'>
						<img src='/images/facebook-f-brands.svg' alt='' />
					</a>
				</ul>
			</nav>
		</header>
	)
}

export default Header
