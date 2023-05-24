import React, { useEffect } from 'react'
import '../pageCss/listCss.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../services/productService'


export default function List() {
	const dispatch = useDispatch()
	const products = useSelector(({ products }) => {
		console.log(products)
		return products
	})
	useEffect(() => {
		dispatch(getProducts())
	}, [])

	return (
		<>


			<div class="wrapper">

				<h2><strong>All Games<span>( 4 )</span></strong></h2>

				<div class="cards">

					<figure class="card">

						<img src="https://www.linkpicture.com/q/1_1484.jpg" />

						<figcaption>Dota 2</figcaption>

					</figure>

					<figure class="card">

						<img src="https://www.linkpicture.com/q/2_965.jpg" />

						<figcaption>Stick Fight</figcaption>

					</figure>

					<figure class="card">

						<img src="https://www.linkpicture.com/q/3_695.jpg" />

						<figcaption>Minion Masters</figcaption>

					</figure>

					<figure class="card">

						<img src="https://www.linkpicture.com/q/4_543.jpg" />

						<figcaption>KoseBoz!</figcaption>

					</figure>
					{products.list.map(product => (
						<figure class="card">
							<img src={product.image} />
							<div>
								<figcaption>
									<p>{product.name}!</p>
									<p>{product.price}!</p>
									<p>{product.quantity}!</p>
								</figcaption>
							</div>
						</figure>
					))}


				</div>

				<h2><strong>What's new?</strong></h2>

				<div class="news">

					<figure class="article">

						<img src="https://www.linkpicture.com/q/news1_1.jpg" />

						<figcaption>

							<h3>New Item</h3>

							<p>

								In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

							</p>

						</figcaption>

					</figure>

					<figure class="article">

						<img src="https://www.linkpicture.com/q/news2.png" />

						<figcaption>

							<h3>Update</h3>

							<p>

								Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

							</p>

						</figcaption>

					</figure>

				</div>

			</div>


		</>
	)
}
