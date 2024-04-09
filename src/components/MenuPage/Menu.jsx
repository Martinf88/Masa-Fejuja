import { navStore } from './navStore';
import './Menu.css'
import NavMenu from './NavMenu'
import courses from './menuList.js'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';


function Menu( ) {

	const shoppingCart = navStore(state => state.shoppingCart)

	function addToBasket(course) {

		navStore.setState((state) => ({
			...state,
			shoppingCart: [...state.shoppingCart, course],
			selectedCourses: state.selectedCourses + 1
		}));
	} 

	function removeFromBasket(index) {
		
		navStore.setState((state) => ({
                ...state,
                shoppingCart: [
					...state.shoppingCart.slice(0, index),
					...state.shoppingCart.slice(index + 1),
				],
                selectedCourses: state.selectedCourses > 0 ? state.selectedCourses - 1 : 0

		}));
		
	}

		

	return (

		<>
		<NavMenu/>

			<section className='gallerySection'>

				<div className='gallery'>

					{courses.map((course, index) => (

					<div className='menu-container' key={course.id}>
							<img className="image" src={course.image} alt={course.title}/>
							<div className="overlay">
							<div className='menu-info'>
							<h2 className='menu-title'>{course.title}</h2>
							<p>{course.description}</p>
							<p>{course.contains} </p>
							<p>Contains: {course.contains}</p>

							<div className='button-row'>
							<h4>${course.price}</h4>
							<button onClick={() => addToBasket(course)}>Add</button>
							{/* <button onClick={removeFromBasket}>Remove</button> */}
							</div>
							</div>
						</div>
					</div>
					))}

			</div>
			</section>

			<ShoppingCart shoppingCart={shoppingCart} removeFromBasket={removeFromBasket}/>

		</>
	)
}

export default Menu
