import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import ApplyJobPage from "./ApplyJobPage"
import CompanyPage from "./CompanyPage"
import FindJobs from "./FindJobs"
import FindTalentPage from "./FindTalentPage"
import HomePage from "./HomePage"
import JobDescPage from "./JobDescPage"
import JobHistoryPage from "./JobHistoryPage"
import PostedJobPage from "./PostedJobPage"
import PostJobPage from "./PostJobPage"
import ProfilePage from "./ProfilePage"
import SignUpPage from "./SignUpPage"
import TalentProfilePage from "./TalentProfilePage"
import { useSelector } from "react-redux"

const AppRoutes = () => {

	const user = useSelector((state : any) => state.user);

	return <BrowserRouter>

		<div className='relative'>

			<Header />

			<Routes>

				<Route path='/find-jobs' element={<FindJobs />} />
				<Route path='/find-talent' element={<FindTalentPage />} />
				<Route path='/jobs/:id' element={<JobDescPage />} />
				<Route path='/apply-job/:id' element={<ApplyJobPage />} />
				<Route path='/company/:name' element={<CompanyPage />} />
				{/* <Route path='/posted-job' element={<PostedJobPage />} /> */}
				<Route path='/posted-job/:id' element={<PostedJobPage />} />
				<Route path='/job-history' element={<JobHistoryPage />} />
				<Route path='/talent-profile/:id' element={<TalentProfilePage />} />
				{/* <Route path='/post-job' element={<PostJobPage />} /> */}
				<Route path='/post-job/:id' element={<PostJobPage />} />
				<Route path='/signup' element={user ? <Navigate to="/"/> : <SignUpPage />} />
				<Route path='/login' element={user ? <Navigate to="/"/> : <SignUpPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='*' element={<HomePage />} />

			</Routes>

			<Footer />

		</div>

	</BrowserRouter>

}

export default AppRoutes;