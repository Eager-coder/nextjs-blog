import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/css/About.css'
const About = () => {
	return (
		<Layout>
			<Head>
				<title>About | EduPro</title>
				<meta
					name='description'
					content='This page is about the team behind the media resource EduPro'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='About EduPro' />
				<meta
					property='og:description'
					content='This page is about the team behind the media resource EduPro'
				/>
				<meta name='twitter:title' content='About EduPro'></meta>
				<meta
					name='twitter:description'
					content='This page is about the team behind the media resource EduPro'
				/>
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<article>
				<div className='header'>
					<h1>About us</h1>
				</div>
				<section className='story'>
					<h2>Our story</h2>
					<hr />

					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptatem enim at sint
						laudantium quia obcaecati, voluptates excepturi mollitia quis necessitatibus.
					</p>
					<img src='/images/about.jpg' alt='' />
					<p>
						Magni omnis itaque eius error facere? Maiores repudiandae, suscipit ducimus temporibus
						nemo hic consequatur sit excepturi unde dolore vel. Doloremque adipisci commodi
						molestias fugit alias eveniet modi doloribus deserunt.
					</p>
				</section>
				<section className='mission'>
					<h2>Our mission</h2>
					<hr />
					<p>
						Maiores repudiandae, suscipit ducimus temporibus nemo hic consequatur sit excepturi unde
						dolore vel. Doloremque adipisci commodi molestias fugit alias eveniet modi doloribus
						deserunt.
					</p>
				</section>
				<section className='team'>
					<h2>Meet the team</h2>
					<div className='team-grid'>
						<div className='member'>
							<img src='/images/author-img-5.png' alt='' />
							<div className='textbox'>
								<span className='name'>John Doe</span>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-3.png' alt='' />
							<div className='textbox'>
								<span className='name'>John Doe</span>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-4.png' alt='' />
							<div className='textbox'>
								<span className='name'>John Doe</span>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-2.png' alt='' />
							<div className='textbox'>
								<span className='name'>Jane Doe</span>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-1.png' alt='' />
							<div className='textbox'>
								<span className='name'>John Doe</span>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-7.png' alt='' />
							<div className='textbox'>
								<span className='name'>John Doe</span>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-10.png' alt='' />
							<div className='textbox'>
								<b className='name'>John Doe</b>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natus
								</span>
							</div>
						</div>
						<div className='member'>
							<img src='/images/author-img-8.png' alt='' />
							<div className='textbox'>
								<b className='name'>John Doe</b>
								<span className='description'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dicta, quas
									non minus alias natuss
								</span>
							</div>
						</div>

						<img src='https://www.gettyimages.com/detail/985138634' alt='' />
					</div>
				</section>
			</article>
		</Layout>
	)
}

export default About
