import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';

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

			<MantineProvider defaultColorScheme='dark' theme={theme}>

				<BrowserRouter>

					<div className='relative'>

						<Header />



						<Routes>

							<Route path='/find-jobs' element={<FindJobs />} />
							<Route path='/find-talent' element={<FindTalentPage />} />
							<Route path='/jobs' element={<JobDescPage />} />
							<Route path='/apply-job' element={<ApplyJobPage />} />
							<Route path='/talent-profile' element={<TalentProfilePage />} />
							<Route path='/post-job' element={<PostJobPage />} />
							<Route path='*' element={<HomePage />} />

						</Routes>

						<Footer />

					</div>

				</BrowserRouter>


			</MantineProvider>

		</>
	)
}

export default App
