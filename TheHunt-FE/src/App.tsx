import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import Store from './Store';
import { Provider } from 'react-redux';
import AppRoutes from './Pages/AppRoutes';

function App() {

	const theme = createTheme({

		focusRing: "auto",

		primaryColor: 'bright-sun',
		primaryShade: 4,

		colors: {

			'congress-blue': ['#f1f7fe', '#e2effc', '#bedef9', '#85c3f4', '#44a6ec', '#1b8adc', '#0e6cbb', '#0d5697', '#0f4c81', '#123e68', '#0c2745'],

			'bright-sun': ['#fefcec', '#fcf6c9', '#f9ec8e', '#f5dd54', '#f4d03f', '#ecad14', '#d1860e', '#ae610f', '#8d4b13', '#743e13', '#432005']
		},

		fontFamily: "poppins, sans-serif"
	})

	return (
		<>

			<Provider store={Store}>

				<MantineProvider defaultColorScheme='dark' theme={theme}>

					<Notifications
						className='[&>div>div]:bg-congress-blue-900 [&_div]:rounded-lg'
						position="top-right" zIndex={1000} />

					<AppRoutes/>


				</MantineProvider>

			</Provider>

		</>
	)
}

export default App
