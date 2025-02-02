import React, { useContext } from 'react';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatcharts from './Heatcharts';
import RadialBar from './RadialBar';
import RadialBar2 from './RadialBar2';
import RadialBar3 from './RadialBar3';
import UserContext from './userContext';

const Main = () => {
	const { userID } = useContext(UserContext);

	return (
		<div className='main'>
			<h1 className='title'>Dashboard</h1>
			<ReactCalendar />
			<div className='heatchart'>
				<Heatcharts />
				<div className='dashboardButtons'>
					<span>
						<a href='/report'>
							<button>Progress Breakdown</button>
						</a>
					</span>
					<span>
						<a href='/add-goals'>
							<button>Set Goals</button>
						</a>
					</span>
				</div>
			</div>
			<div className='radialBar'>
				<RadialBar userID={userID} />
				<RadialBar2 />
				<RadialBar3 />
			</div>
		</div>
	);
};

export default Main;
