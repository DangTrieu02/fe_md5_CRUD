import React from 'react'
import './css/side.css';
import { useSelector } from 'react-redux';
export default function Sidebar() {
	const user = useSelector(({user})=>{
		return user.user
	})
	return (
		<>
			<div id="sidebar-main" class="sidebar sidebar-default sidebar-separate sidebar-fixed">
				<div class="sidebar-content">
					<div class="sidebar-category sidebar-default">
						<div class="sidebar-user">
							<div class="category-content">
								<h6>user: { user && user.username}</h6>
								<small>Admin</small>
							</div>
						</div>
					</div>

					<div class="sidebar-category sidebar-default">
						<div class="category-title">
							<span>Fruits</span>
						</div>
						<div class="category-content">
							<ul id="fruits-nav" class="nav flex-column">
								<li class="nav-item">
									<a href="#" class="nav-link">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										Apple
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										Banana
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link active">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										Pear
									</a>
								</li>
								<li class="nav-item">
									<a href="#other-fruits" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="other-fruits">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										Others
									</a>
									<ul id="other-fruits" class="flex-column collapse">
										<li class="nav-item">
											<a href="#" class="nav-link">
												<i class="fa fa-pencil" aria-hidden="true"></i>
												Orange
											</a>
										</li>
										<li class="nav-item ">
											<a href="#" class="nav-link">
												<i class="fa fa-pencil" aria-hidden="true"></i>
												Kiwi
											</a>
										</li>
									</ul>

								</li>
							</ul>

						</div>

					</div>

					<div class="sidebar-category sidebar-default">
						<div class="category-title">
							<span>Contenu éditable</span>
						</div>
						<div class="category-content">
							<ul id="sidebar-editable-nav" class="nav flex-column">
								<li class="nav-item">
									<a href="/admin/customers" class="nav-link">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										customers
									</a>
								</li>
								<li class="nav-item">
									<a href="/admin/resettest" class="nav-link">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										reset test
									</a>
								</li>
								<li class="nav-item">
									<a href="/admin/usersprofiles" class="nav-link">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										users profiles
									</a>
								</li>
								<li class="nav-item">
									<a href="/admin/users" class="nav-link active">
										<i class="fa fa-pencil" aria-hidden="true"></i>
										users
									</a>
								</li>
							</ul>

						</div>

					</div>

				</div>
			</div>

			<div class="content-wrapper">

			</div>

		</>
	)
}
