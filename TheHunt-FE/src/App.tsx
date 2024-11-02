import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';

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
							<Route path='/company' element={<CompanyPage />} />
							<Route path='/posted-job' element={<PostedJobPage />} />
							<Route path='/job-history' element={<JobHistoryPage />} />
							<Route path='/talent-profile' element={<TalentProfilePage />} />
							<Route path='/post-job' element={<PostJobPage />} />
							<Route path='/signup' element={<SignUpPage />} />
							<Route path='/login' element={<SignUpPage />} />
							<Route path='/profile' element={<ProfilePage />} />
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
