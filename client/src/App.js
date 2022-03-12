import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Batch from './components/User/Batch'
import Course from './components/User/Courses'
import Admin from './components/Admin/Admin'
import Management from './components/Admin/Management/Management'
import Domain from './components/Admin/Domain/Domain'
import Country from './components/Admin/Domain/General/Country'
import Religion from './components/Admin/Domain/General/Religion'
import City from './components/Admin/Domain/General/City';
import District from './components/Admin/Domain/General/District';
import Area from './components/Admin/Domain/General/Area'
import Province from './components/Admin/Domain/General/Province'
import Mother_tng from './components/Admin/Domain/General/Mothertng'
import Bloodgroup from './components/Admin/Domain/General/Bloodgroup'
import General from './components/Admin/Domain/General';
import StudentDomain from "./components/Admin/Domain/StudentDomain"
import DClass from "./components/Admin/Domain/StudentDomain/DClass"
import DGroup from "./components/Admin/Domain/StudentDomain/DGroup"
import DSection from "./components/Admin/Domain/StudentDomain/DSection"
import DSubgroup from "./components/Admin/Domain/StudentDomain/DSubgroup"
import DSubject from "./components/Admin/Domain/StudentDomain/DSubject"
import SubBind from "./components/Admin/Domain/StudentDomain/SubBind"
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
import ProfileDesc from './components/Admin/Management/Profiles/ProfileDesc';
import ProfileDescStd from './components/Admin/Management/Profiles/ProfileDescStudent';
import ClassManage from './components/Admin/Management/Class_Manager/ClassManage';
import ClassManHome from './components/Admin/Management/Class_Manager/ClassManHome';
import BatchDesc from './components/Admin/Management/Class_Manager/BatchDesc';
import CountryState from './context/domain/general/CountryState';
import ReligionState from './context/domain/general/ReligionState';
import AreaState from './context/domain/general/AreaState';
import CityState from './context/domain/general/CityState';
import ProvinceState from './context/domain/general/ProvinceState';
import DistrictState from './context/domain/general/DistrictState';
import BloodgrpState from './context/domain/general/BloodgrpState';
import MothertngState from './context/domain/general/MothertngState';
import ClassState from './context/domain/student/ClassState';
import GroupState from './context/domain/student/GroupState';
import SectionState from './context/domain/student/SectionState';
import SubgroupState from './context/domain/student/SubgroupState';
import SubjectState from './context/domain/student/SubjectState';
import SubBindState from './context/domain/student/SubBindState';
import BatchState from './context/management/batches/BatchState';
import FeeState from './context/domain/fee/FeeState';
import ExamState from './context/domain/exam/ExamState';
import StdregState from './context/registration/StdregState';
import EmpregState from './context/registration/EmpregState';
import LoginState from './context/login/LoginState';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <BatchState>
        <SubBindState>
          <ExamState>
            <FeeState>
              <SubgroupState>
                <SectionState>
                  <GroupState>
                    <SubjectState>
                      <ClassState>
                        <MothertngState>
                          <BloodgrpState>
                            <DistrictState>
                              <ProvinceState>
                                <CityState>
                                  <AreaState>
                                    <LoginState>
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
                                                  <Route path="/login" element={<Login />} />
                                                  <Route path="/admin" element={<Admin />}>
                                                    <Route path="management" element={<Management />} >
                                                      <Route path="dashboard" element={<Dashboard />} />
                                                      <Route path="adbatch" element={<AdBatch />} >
                                                        <Route path="classmanage" element={<ClassManage />} />
                                                        <Route path="classmanhome" element={<ClassManHome />} />
                                                        <Route path="batchdesc" element={<BatchDesc />} />
                                                      </Route>
                                                      <Route path="adexam" element={<AdExam />} />
                                                      <Route path="revenue" element={<Revenue />} />
                                                      <Route path="registration" element={<Registration />} >
                                                        <Route path="stdreg" element={<StdReg />} />
                                                        <Route path="empreg" element={<EmpReg />} />
                                                      </Route>
                                                      <Route path="adprofile" element={<AdProfile />} >
                                                        <Route path="stdprof" element={<StdProf />} />
                                                        <Route path="empprof" element={<EmpProf />} />
                                                        <Route path="profiledesc" element={<ProfileDesc />} />
                                                        <Route path="profiledescstd" element={<ProfileDescStd />} />
                                                      </Route>
                                                    </Route>
                                                    <Route path="domain" element={<Domain />}>
                                                      <Route path="general" element={<General />} >
                                                        <Route path="country" element={<Country />} />
                                                        <Route path="religion" element={<Religion />} />
                                                        <Route path="city" element={<City />} />
                                                        <Route path="province" element={<Province />} />
                                                        <Route path="district" element={<District />} />
                                                        <Route path="mothertng" element={<Mother_tng />} />
                                                        <Route path="bloodgrp" element={<Bloodgroup />} />
                                                        <Route path="area" element={<Area />} />
                                                      </Route>
                                                      <Route path="studentdomain" element={<StudentDomain />} >
                                                        <Route path="group" element={<DGroup />} />
                                                        <Route path="subgroup" element={<DSubgroup />} />
                                                        <Route path="class" element={<DClass />} />
                                                        <Route path="section" element={<DSection />} />
                                                        <Route path="subject" element={<DSubject />} />
                                                        <Route path="subbind" element={<SubBind />} />
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
                                    </LoginState>
                                  </AreaState>
                                </CityState>
                              </ProvinceState>
                            </DistrictState>
                          </BloodgrpState>
                        </MothertngState>
                      </ClassState>
                    </SubjectState>
                  </GroupState>
                </SectionState>
              </SubgroupState>
            </FeeState>
          </ExamState>
        </SubBindState>
      </BatchState>
    </>
  );
}

export default App;
