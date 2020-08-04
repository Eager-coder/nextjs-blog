import Link from 'next/link'
import { useEffect, useState } from 'react'
import '../styles/css/Header.css'
const Header = () => {
	const handleClick = e => {
		const postList = document.querySelector('.posts-list')
		postList.classList.toggle('posts-list-active')
	}

	const toggleMenu = () => {
		const menu = document.querySelector('.nav-mobile')
		menu.classList.toggle('menu-active')
	}
	if (typeof window !== 'undefined') {
		window.addEventListener('click', e => {
			if (e.target.id !== 'toggle-post-list') {
				document.querySelector('.posts-list').classList.remove('posts-list-active')
			}
			if (e.target.className === 'link') {
				document.querySelector('.nav-mobile').classList.remove('menu-active')
			}
		})
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
							<span id='toggle-post-list' onClick={handleClick}>
								Posts <img className='chevron' src='/images/chevron-down-solid.svg' alt='' />
							</span>
							<ul className='posts-list'>
								<li>
									<Link href='/category/[category]' as='/category/education'>
										<a>Education</a>
									</Link>
								</li>
								<li>
									<Link href='/category/[category]' as='/category/hobby'>
										<a>Hobby</a>
									</Link>
								</li>
								<li>
									<Link href='/category/[category]' as='/category/entertainment'>
										<a>Entertainment</a>
									</Link>
								</li>
								<li>
									<Link href='/category/[category]' as='/category/lifestyle'>
										<a>Lifestyle</a>
									</Link>
								</li>
								<li>
									<Link href='/category/[category]' as='/category/business'>
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
						<Link href='/category/[category]' as='/category/education' passHref>
							<a className='link'>Education</a>
						</Link>
					</li>
					<li>
						<Link href='/category/[category]' as='/category/hobby' passHref>
							<a className='link'>Hobby</a>
						</Link>
					</li>
					<li>
						<Link href='/category/[category]' as='/category/entertainment' passHref>
							<a className='link'>Entertainment</a>
						</Link>
					</li>
					<li>
						<Link href='/category/[category]' as='/category/lifestyle' passHref>
							<a className='link'>Lifestyle</a>
						</Link>
					</li>
					<li>
						<Link href='/category/[category]' as='/category/business' passHref>
							<a className='link'>Business</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className='link'>About</a>
						</Link>
					</li>
					<li>
						<Link href='/contacts'>
							<a className='link'>Contacts</a>
						</Link>
					</li>
					<li>
						<Link href='/products'>
							<a className='link'>Products</a>
						</Link>
					</li>
				</ul>
				<ul className='media-links'>
					<a className='link' target='_blank' href='https://instagram.com'>
						<img src='/images/instagram-brands.svg' alt='' />
					</a>
					<a className='link' target='_blank' href='https://twitter.com'>
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
