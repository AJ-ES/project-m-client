import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing CSS for styling
import './Admindashboard.css';
// Importing custom hook for admin authentication
import { useAdminAuth } from './AdminAuth';
// Importing image for the admin icon
import mu from '../images/mu.png';

// Component for the admin accordion
const AdminAccordion = () => {
	// Using the custom hook for admin authentication
	const auth = useAdminAuth();
	// State to manage the accordion open/close status
	const [isAccordionOpen, setAccordionOpen] = useState(false);

	// Function to toggle the accordion open/close status
	const toggleAccordion = () => {
		setAccordionOpen(!isAccordionOpen);
	};

	// Function to handle admin logout
	const handleLogout = () => {
		auth.adminlogout();
	};

	return (
		<div>
			<div>
				{/* Button to toggle the accordion */}
				<button onClick={toggleAccordion} className='admin-logout-button-value'>
					{/* Displaying admin name */}
					{auth.admin.adminname}
					{/* Admin icon */}
					<img className='admin-logout-icon' src={mu} alt='icon' />
					{/* Conditional rendering of accordion content */}
					{isAccordionOpen && (
						<div className='accordion-popover-adm'>
							<div className='modal-btn-div-pdf-inv-adm'>
								{/* Button to change password */}
								<button type='button' className='modal-btn-inv-adm'>
									<Link
										style={{ textDecoration: 'none', color: 'black' }}
										to='/adminpasswordchange'
									>
										Change Password
									</Link>
								</button>
								{/* Button to logout */}
								<button className='modal-btn-inv-adm' onClick={handleLogout}>
									Logout
								</button>
							</div>
						</div>
					)}
				</button>
			</div>
		</div>
	);
};

export default AdminAccordion;
