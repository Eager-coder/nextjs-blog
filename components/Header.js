import Link from 'next/link'
// import { useEffect, useState } from 'react'
import NavLink from './NavLink'
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
				<span>
					<Link href='/'>
						<a>Edu</a>
					</Link>
				</span>
				<nav className='nav-desktop'>
					<ul>
						<NavLink href='/' text='Home' />
						<li className='posts'>
							<span id='toggle-post-list' onClick={handleClick}>
								Posts <img className='chevron' src='/images/chevron-down-solid.svg' alt='' />
							</span>
							<ul className='posts-list'>
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
						</li>
						<NavLink href='/[about]' as='/about' text='About' />
						<NavLink href='/[contacts]' as='/contacts' text='Contacts' />
						<NavLink href='/[products]' as='/products' text='Products' />
					</ul>
				</nav>
				<div className='burger-btn' onClick={toggleMenu}>
					<img src='/images/burger.svg' alt='' />
				</div>
			</div>
			<nav className='nav-mobile'>
				<ul className='nav-links'>
					<NavLink href='/' />
					<NavLink href='/category/[category]' as='/category/education' text='Education' />
					<NavLink href='/category/[category]' as='/category/hobby' text='Hobby' />
					<NavLink href='/category/[category]' as='/category/entertainment' text='Entertainment' />
					<NavLink href='/category/[category]' as='/category/lifestyle' text='Lifestyle' />
					<NavLink href='/category/[category]' as='/category/business' text='Business' />
					<NavLink href='/category/[category]' as='/category/tech' text='Tech' />
					<NavLink href='/[about]' as='/about' text='About' />
					<NavLink href='/[contacts]' as='/contacts' text='Contacts' />
					<NavLink href='/[products]' as='/products' text='Products' />
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
