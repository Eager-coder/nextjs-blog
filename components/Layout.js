import Header from './Header'
import Footer from './Footer'
import '../styles/css/App.css'
import Head from 'next/head'
const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/images/icon.png' type='image/x-icon' />
				<script src='https://kit.fontawesome.com/86ec0857fc.js' crossorigin='anonymous'></script>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
export default Layout
