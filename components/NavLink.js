import Link from 'next/link'

const NavLink = ({ href, as, text }) => {
	return (
		<li>
			<Link href={href} as={as} passHref>
				<a>{text}</a>
			</Link>
		</li>
	)
}

export default NavLink
