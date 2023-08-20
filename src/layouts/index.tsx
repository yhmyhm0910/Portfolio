// Chakra imports
import { Box } from '@chakra-ui/react';
import Footer from 'components/footer/FooterAdmin';
// Layout components
import Sidebar from 'components/sidebar/Sidebar';
import { SidebarContext } from 'contexts/SidebarContext';
import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes';

// Custom Chakra theme
export default function Dashboard() {
	// states and functions
	//const [ fixed ] = useState(false);
	const [ toggleSidebar, setToggleSidebar ] = useState(false);
	// functions for changing the states from components

	/*const getActiveRoute = (routes: RoutesType[]): string => {
		let activeRoute = 'Default Brand Text';
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return activeRoute;
	};
	const getActiveNavbar = (routes: RoutesType[]): boolean => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].secondary;
			}
		}
		return activeNavbar;
	};
	const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return activeNavbar;
	};*/
	const getRoutes = (routes: RoutesType[]): any => {
		return routes.map((route: RoutesType, key: any) => {
			return <Route path={route.path} component={route.component} key={key} />;
		});
	};
	//const { onOpen } = useDisclosure();


	return (
		<Box>
			<SidebarContext.Provider
				value={{
					toggleSidebar,
					setToggleSidebar
				}}>
				<Sidebar/>
				<Box
					float='right'
					minHeight='100vh'
					height='100%'
					position='relative'
					maxHeight='100%'
					w={{ base: '100%', xl: '70%' }}
					maxWidth={{ base: '100%', xl: '70%' }}
					transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
					transitionDuration='.2s, .2s, .35s'
					transitionProperty='top, bottom, width'
					transitionTimingFunction='linear, linear, ease'>

						<Box mx='auto' padding='30px' paddingBottom='0px' pe='20px' minH='100vh'>
							<Switch>
								{getRoutes(routes)}	
							</Switch>
						</Box>
					<Box>
						<Footer />
					</Box>
				</Box>
			</SidebarContext.Provider>
		</Box>
	);
}
