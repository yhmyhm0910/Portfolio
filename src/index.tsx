import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layouts';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<Router history={history}>
			<Switch>
				<Route path="*">
					<Layout/>
				</Route>
			</Switch>
		</Router>
	</ChakraProvider>,
	document.getElementById('root')
);
