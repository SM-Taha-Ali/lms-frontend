import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Batch from './components/User/Batch'
import Course from './components/User/Courses'
import Admin from './components/Admin/Admin'
import Management from './components/Admin/Management/Management'
import Domain from './components/Admin/Domain/Domain'
import Country from './components/Admin/Domain/Country'
import Religion from './components/Admin/Domain/Religion'
import General from './components/Admin/Domain/General';
import StudentDomain from "./components/Admin/Domain/StudentDomain"
import DClass from "./components/Admin/Domain/StudentDomain/DClass"
import DGroup from "./components/Admin/Domain/StudentDomain/DGroup"
import DSection from "./components/Admin/Domain/StudentDomain/DSection"
import DSubgroup from "./components/Admin/Domain/StudentDomain/DSubgroup"
import FeeDomain from './components/Admin/Domain/FeeDomain';
import ExamDomain from './components/Admin/Domain/ExamDomain';
import Dashboard from './components/Admin/Management/Dashboard';
import Registration from './components/Admin/Management/Registration';
import Revenue from './components/Admin/Management/Revenue';
import AdBatch from './components/Admin/Management/AdBatch';
import AdExam from './components/Admin/Management/AdExam';
import AdProfile from './components/Admin/Management/AdProfile';
import StdReg from './components/Admin/Management/Registration/StdReg';
import EmpReg from './components/Admin/Management/Registration/EmpReg';
import StdProf from './components/Admin/Management/Profiles/StdProf';
import EmpProf from './components/Admin/Management/Profiles/EmpProf';
import CountryState from './context/domain/CountryState';
import ReligionState from './context/domain/ReligionState';
import StdregState from './context/registration/StdregState';
import EmpregState from './context/registration/EmpregState';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <EmpregState>
        <StdregState>
          <ReligionState>
            <CountryState>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/batch" element={<Batch />} />
                  <Route path="/course" element={<Course />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />}>
                    <Route path="management" element={<Management />} >
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="adbatch" element={<AdBatch />} />
                      <Route path="adexam" element={<AdExam />} />
                      <Route path="revenue" element={<Revenue />} />
                      <Route path="registration" element={<Registration />} >
                        <Route path="stdreg" element={<StdReg />} />
                        <Route path="empreg" element={<EmpReg />} />
                      </Route>
                      <Route path="adprofile" element={<AdProfile />} >
                        <Route path="stdprof" element={<StdProf />} />
                        <Route path="empprof" element={<EmpProf />} />
                      </Route>
                    </Route>
                    <Route path="domain" element={<Domain />}>
                      <Route path="general" element={<General />} >
                        <Route path="country" element={<Country />} />
                        <Route path="religion" element={<Religion />} />
                      </Route>
                      <Route path="studentdomain" element={<StudentDomain />} >
                        <Route path="group" element={<DGroup />} />
                        <Route path="subgroup" element={<DSubgroup />} />
                        <Route path="class" element={<DClass />} />
                        <Route path="section" element={<DSection />} />
                      </Route>
                      <Route path="feedomain" element={<FeeDomain />} />
                      <Route path="examdomain" element={<ExamDomain />} />
                    </Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </CountryState>
          </ReligionState>
        </StdregState>
      </EmpregState>
    </>
  );
}

export default App;
