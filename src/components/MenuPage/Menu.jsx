import { useState } from 'react'


import './Menu.css'
import NavMenu from './NavMenu'
import courses from './menuList.js'


function Menu() {

	function Basket() {
		[Basket, setBasket] = useState([])
	}

	function addToBasket() {
		const addToBasket = (course) => {
			setBasket((prevBasket) => {

				if (!prevBasket.includes(course)) {

					return [...prevBasket, course]
				}

				return prevBasket
			})

		}
	}

	return (

		<>
			<NavMenu />



			<section className='gallerySection'>

				<div className='gallery'>

					{courses.map((course, index) => (

						<div className='menu-container' key={course.id}>
							<img className="image" src={course.image} alt={course.title} />
							<div className="overlay">
								<div className='menu-info'>
									<h2 className='menu-title'>{course.title}</h2>
									<p>{course.description}</p>
									<p>{course.contains} </p>
									<p>Contains: {course.contains}</p>

									<div className='button-row'>
										<h4>{course.price}</h4>
										<button onClick={addToBasket}>Add</button>
									</div>
								</div>
							</div>
						</div>
					))}

				</div>
			</section>

		</>
	)
}

export default Menu
