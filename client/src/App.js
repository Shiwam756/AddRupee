import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Styles/App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PersoanlLoan from "./Pages/PersonalLoan";
import BusinessLoan from "./Pages/BusinessLoan";
import HomeLoan from "./Pages/HomeLoan";
import LoanAgainstProperty from "./Pages/LoanAgainstProperty";
import CreditCard from "./Pages/CreditCard";
import UsedCarLoan from "./Pages/UsedCarLoan";
import OdCcWorkingCapital from "./Pages/OD_CC_WorkingCapital";
import Blog from "./Pages/Blog";
import HealthInsurance from "./Pages/HealthInsurance";
import EmiCalculator from "./Pages/EmiCalculator";
import MutualFund from "./Pages/MutualFund";
import Cibil from "./Pages/Cibil";
import ApplyNow from "./Pages/ApplyNow";
import Contact from "./Pages/Contact";
import GeneralInsurance from "./Pages/GeneralInsurance";
import BecomePartner from "./Pages/BecomePartner";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Dashboardcode/Dashboard";
import ApprovedData from "./Dashboardcode/DashboardComponent/ApprovedData";
import PendingData from "./Dashboardcode/DashboardComponent/PendingData";
import RejectedData from "./Dashboardcode/DashboardComponent/RejectedData";
import AddleadForm from "./Dashboardcode/DashboardComponent/AddleadForm";
import UploadCSV from "./Dashboardcode/DashboardComponent/UploadCSV";
import CustomerSignIn from "./customerFolder/CustomerSignIn";
import CustomerSignUp from "./customerFolder/CustomerSignUp";
import CustomerLoanApply from "./customerFolder/CustomerLoanApply";
import CustomerCardApply from "./customerFolder/CustomerCardApply";
import CustomerApply from "./customerFolder/CustomerApply";
import CustomerDashboard from "./customerFolder/CustomerDashboard";
import CustomerCibilIssue from "./customerFolder/CustomerCibilIssue";
import TlDashboard from "./TlDashboard/TlDashboard";
import TlAddleadForm from "./TlDashboard/DashboardComponent/TlAddleadForm";
import TlApprovedData from "./TlDashboard/DashboardComponent/TlApprovedData";
import TlPendingData from "./TlDashboard/DashboardComponent/TlPendingData";
import TlRejectedData from "./TlDashboard/DashboardComponent/TlRejectedData";
import TlUploadCSV from "./TlDashboard/DashboardComponent/TlUploadCSV";
import TeamDetails from "./TlDashboard/DashboardComponent/TeamDetails";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminPendingData from "./AdminDashboard/AdminDashboardComponent/AdminPendingData";
import AdminApprovedData from "./AdminDashboard/AdminDashboardComponent/AdminApprovedData";
import AdminRejectedData from "./AdminDashboard/AdminDashboardComponent/AdminRejectedData";
import AdminLoginleads from "./AdminDashboard/AdminDashboardComponent/AdminLoginleads";
import AdminReports from "./AdminDashboard/AdminDashboardComponent/AdminReports";
import AdminTeamLeaderDashboard from "./AdminDashboard/AdminDashboardComponent/AdminTeamLeaderDashboard";
import AdminTeamLeaderLoginData from "./AdminDashboard/AdminDashboardComponent/AdminTeamLeaderPages/AdminTeamLeaderLoginData";
import AdminTeamLeaderPendingData from "./AdminDashboard/AdminDashboardComponent/AdminTeamLeaderPages/AdminTeamLeaderPendingData";
import AdminTeamLeaderApprovedData from "./AdminDashboard/AdminDashboardComponent/AdminTeamLeaderPages/AdminTeamLeaderApprovedData";
import AdminTeamLeaderRejectedData from "./AdminDashboard/AdminDashboardComponent/AdminTeamLeaderPages/AdminTeamLeaderRejectedData";
import EmailVerification from "./Components/EmailVerification";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import CustResetPassword from "./customerFolder/CustResetPassword";
import CustEmailVerification from "./customerFolder/CustEmailVerification";
import CustForgotPassword from "./customerFolder/CustForgotPassword";
import CustomerLoanData from "./AdminDashboard/AdminDashboardComponent/CustomerDataComp/CustomerLoanData";
import CustomerCardData from "./AdminDashboard/AdminDashboardComponent/CustomerDataComp/CustomerCardData";
import CustomerCibilData from "./AdminDashboard/AdminDashboardComponent/CustomerDataComp/CustomerCibilData";
import CardAddleadForm from "./Dashboardcode/DashboardComponent/CardComponents/CardAddLeadForm";
import CardApprovedData from "./Dashboardcode/DashboardComponent/CardComponents/CardApprovedData";
import CardPendingData from "./Dashboardcode/DashboardComponent/CardComponents/CardPendingData";
import CardRejectedData from "./Dashboardcode/DashboardComponent/CardComponents/CardRejectedData";
import TlCardAddLeadForm from "./TlDashboard/DashboardComponent/TlCardComponent/TlCardAddLeadForm";
import TlCardApprovedData from "./TlDashboard/DashboardComponent/TlCardComponent/TlCardApprovedData";
import TlCardPendingData from "./TlDashboard/DashboardComponent/TlCardComponent/TlCardPendingData";
import TlCardRejectedData from "./TlDashboard/DashboardComponent/TlCardComponent/TlCardRejectedData";
import AdminCardLoginleads from "./AdminDashboard/AdminDashboardComponent/AdminCardsComponents/AdminCardLoginleads";
import AdminCardPendingleads from "./AdminDashboard/AdminDashboardComponent/AdminCardsComponents/AdminCardPendingleads";
import AdminCardDisbursedleads from "./AdminDashboard/AdminDashboardComponent/AdminCardsComponents/AdminCardDisbursedleads";
import AdminCardRejectedleads from "./AdminDashboard/AdminDashboardComponent/AdminCardsComponents/AdminCardRejectedleads";
import CareerPage from "./Pages/CareerPage";
import PrivacyPolicy from "./Pages/privacyPoclicyPage/PrivacyPolicy";
import TermConditionPage from "./Pages/privacyPoclicyPage/TermConditionPage";
import PartnerRegisterform from "./Partner/PartnerRegisterform";
import TechnoSupport from "./Pages/PartnerBenefits/TechnoSupport";
import DataSupport from "./Pages/PartnerBenefits/DataSupport";
import RealTimeUpdates from "./Pages/PartnerBenefits/RealTimeUpdates";
import OnTimePayment from "./Pages/PartnerBenefits/OnTimePayment";
import BackendSupport from "./Pages/PartnerBenefits/BackendSupport";
import PaperlessProcess from "./Pages/PartnerBenefits/PaperlessProcess";
import PersonlizedCRM from "./Pages/PartnerBenefits/PersonlizedCRM";
import MarketingandBrandingSupport from "./Pages/PartnerBenefits/MarketingandBrandingSupport";
import HRSupportForHiringStaff from "./Pages/PartnerBenefits/HRSupportForHiringStaff";
import PartnerTermsAndConditions from "./Partner/PartnerTermsAndConditions";
import PartnerSignUp from "./Partner/PartnerSignUp";
import PartnerSignIn from "./Partner/PartnerSignIn";
import PartnerDashboard from "./Partner/PartnerDashboard";
import PartnerLoanLoginLeads from "./Partner/PartnerComponents/PartnerLoanComp/PartnerLoanLoginLeads";
import PartnerLoanPendingData from "./Partner/PartnerComponents/PartnerLoanComp/PartnerLoanPendingData";
import PartnerLoanApprovedData from "./Partner/PartnerComponents/PartnerLoanComp/PartnerLoanApprovedData";
import PartnerLoanRejectedData from "./Partner/PartnerComponents/PartnerLoanComp/PartnerLoanRejectedData";
import PartnerTlApprovedData from "./Partner/PartnerComponents/PartnerTlComp/PartnerTlApprovedData";
import PartnerTlLoginLeads from "./Partner/PartnerComponents/PartnerTlComp/PartnerTlLoginLeads";
import PartnerTlPendingData from "./Partner/PartnerComponents/PartnerTlComp/PartnerTlPendingData";
import PartnerTlRejectedData from "./Partner/PartnerComponents/PartnerTlComp/PartnerTlRejectedData";
import PartnerTlReports from "./Partner/PartnerComponents/PartnerTlReports";
import PartnerCardLoginLeads from "./Partner/PartnerComponents/PartnerCardComp/PartnerCardLoginLeads";
import PartnerCardPendingData from "./Partner/PartnerComponents/PartnerCardComp/PartnerCardPendingData";
import PartnerCardApprovedData from "./Partner/PartnerComponents/PartnerCardComp/PartnerCardApprovedData";
import PartnerCardRejectedData from "./Partner/PartnerComponents/PartnerCardComp/PartnerCardRejectedData";
import PartnerTlDashboard from "./Partner/PartnerComponents/PartnerTlComp/PartnerTlDashboard";
import PartnerEmployeeDashboard from "./Partner/PartnerEmployee/PartnerEmployeeDashboard";
import PartnerEmployeeAddLeadForm from "./Partner/PartnerEmployee/PartnerEmployeeLoanComp/PartnerEmployeeAddLeadForm";
import PartnerEmployeePendingData from "./Partner/PartnerEmployee/PartnerEmployeeLoanComp/PartnerEmployeePendingData";
import PartnerEmployeeApprovedData from "./Partner/PartnerEmployee/PartnerEmployeeLoanComp/PartnerEmployeeApprovedData";
import PartnerEmployeeRejectedData from "./Partner/PartnerEmployee/PartnerEmployeeLoanComp/PartnerEmployeeRejectedData";
import PartnerEmployeeUploadCSV from "./Partner/PartnerEmployee/PartnerEmployeeUploadCSV";
import PartnerEmployeeCardAddLeadForm from "./Partner/PartnerEmployee/PartnerEmployeeCardComp/PartnerEmployeeCardAddLeadForm";
import PartnerEmployeeCardPendingData from "./Partner/PartnerEmployee/PartnerEmployeeCardComp/PartnerEmployeeCardPendingData";
import PartnerEmployeeCardApprovedData from "./Partner/PartnerEmployee/PartnerEmployeeCardComp/PartnerEmployeeCardApprovedData";
import PartnerEmployeeCardRejectedData from "./Partner/PartnerEmployee/PartnerEmployeeCardComp/PartnerEmployeeCardRejectedData";
import PTlDashboard from "./Partner/PartnerTeamLeader/PartnerTlDashboard";
import PartnerTlEmployeeDetails from "./Partner/PartnerTeamLeader/PartnerTlEmployeeDetails";
import PartnerTlLoanAddLeadForm from "./Partner/PartnerTeamLeader/PartnerTlLoanComp/PartnerTlLoanAddLeadForm";
import PartnerTlLoanPendingData from "./Partner/PartnerTeamLeader/PartnerTlLoanComp/PartnerTlLoanPendingData";
import PartnerTlLoanApprovedData from "./Partner/PartnerTeamLeader/PartnerTlLoanComp/PartnerTlLoanApprovedData";
import PartnerTlLoanRejectedData from "./Partner/PartnerTeamLeader/PartnerTlLoanComp/PartnerTlLoanRejectedData";
import PartnerTlUploadCSV from "./Partner/PartnerTeamLeader/PartnerTlLoanComp/PartnerTlUploadCSV";
import PartnerTlCardAddLeadForm from "./Partner/PartnerTeamLeader/PartnerTlCardComp/PartnerTlCardAddLeadForm";
import PartnerTlCardPendingData from "./Partner/PartnerTeamLeader/PartnerTlCardComp/PartnerTlCardPendingData";
import PartnerTlCardApprovedData from "./Partner/PartnerTeamLeader/PartnerTlCardComp/PartnerTlCardApprovedData";
import PartnerTlCardRejectedData from "./Partner/PartnerTeamLeader/PartnerTlCardComp/PartnerTlCardRejectedData";
import PartnerEmailVerification from "./Partner/PartnerEmailVerification";
import PartnerForgotPassword from "./Partner/PartnerForgotPassword";
import PartnerResetPassword from "./Partner/PartnerResetPassword";
import PartnerRequest from "./AdminDashboard/PartnerComponent/PartnerRequest";
import PartnerReject from "./AdminDashboard/PartnerComponent/PartnerReject";
import PartnerApproved from "./AdminDashboard/PartnerComponent/PartnerApproved";
import PartnerReports from "./AdminDashboard/PartnerComponent/PartnerReports/PartnerReports";
import PartnerDashboardInAdmin from "./AdminDashboard/PartnerComponent/PartnerReports/PartnerDashboardInAdmin";
import PartnerRejectedInAdmin from "./AdminDashboard/PartnerComponent/PartnerReports/PartnerRejectedInAdmin";
import PartnerLoginLeadsInAdmin from "./AdminDashboard/PartnerComponent/PartnerReports/PartnerLoginLeadsInAdmin";
import PartnerPendingInAdmin from "./AdminDashboard/PartnerComponent/PartnerReports/PartnerPendingInAdmin";
import PartnerApprovedInAdmin from "./AdminDashboard/PartnerComponent/PartnerReports/PartnerApprovedInAdmin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {
            // Employee Paths
          }
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addlead" element={<AddleadForm />} />
          <Route exact path="/approved" element={<ApprovedData />}></Route>
          <Route path="/pending" element={<PendingData />}></Route>
          <Route path="/reject" element={<RejectedData />}></Route>
          <Route path="/uploadcsv" element={<UploadCSV />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/email-verification/:code"
            element={<EmailVerification />}
          />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/card_addlead" element={<CardAddleadForm />} />
          <Route path="/card_pending" element={<CardPendingData />} />
          <Route path="/card_approved" element={<CardApprovedData />} />
          <Route path="/card_reject" element={<CardRejectedData />} />

          {
            // Pages Paths
          }
          <Route path="/" element={<Home />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/personal-loan" element={<PersoanlLoan />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route
            path="/loan-against-property"
            element={<LoanAgainstProperty />}
          />
          <Route path="/car-loan" element={<UsedCarLoan />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/general-insurance" element={<GeneralInsurance />} />
          <Route path="/mutal-funds" element={<MutualFund />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/emi-calc" element={<EmiCalculator />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cibil-issue" element={<Cibil />} />

          <Route path="/apply-now" element={<ApplyNow />} />
          <Route
            path="/od-cc-workingCapital"
            element={<OdCcWorkingCapital />}
          />
          {
            // customer Paths
          }
          <Route path="/customer_signin" element={<CustomerSignIn />} />
          <Route path="/customer_signup" element={<CustomerSignUp />} />
          <Route path="/cust_loan_apply" element={<CustomerLoanApply />} />
          <Route path="/cust_card_apply" element={<CustomerCardApply />} />
          <Route path="/customer_apply" element={<CustomerApply />} />
          <Route path="/customer_dashboard" element={<CustomerDashboard />} />
          <Route path="/cust_cibil_issue" element={<CustomerCibilIssue />} />
          <Route
            path="/cust-email-verification/:code"
            element={<CustEmailVerification />}
          />
          <Route
            path="/cust_forgot_password"
            element={<CustForgotPassword />}
          />
          <Route
            path="/cust_reset_password/:id/:token"
            element={<CustResetPassword />}
          />

          {
            //Tl dashboard Paths
          }

          <Route path="/TL_Dashboard" element={<TlDashboard />} />
          <Route path="/tl_addlead" element={<TlAddleadForm />} />
          <Route path="/tl_pending" element={<TlPendingData />} />
          <Route exact path="/TL_Approved" element={<TlApprovedData />} />
          <Route path="/tl_reject" element={<TlRejectedData />} />
          <Route path="/tl_uploadcsv" element={<TlUploadCSV />} />
          <Route path="/team_details" element={<TeamDetails />} />
          <Route path="/tl_card_addlead" element={<TlCardAddLeadForm />} />
          <Route path="/tl_card_pending" element={<TlCardPendingData />} />
          <Route path="/tl_card_approved" element={<TlCardApprovedData />} />
          <Route path="/tl_card_reject" element={<TlCardRejectedData />} />

          {
            //Admin dashboard Paths
          }

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin_loginlead" element={<AdminLoginleads />} />
          <Route path="/admin_pending" element={<AdminPendingData />} />
          <Route exact path="/admin_approved" element={<AdminApprovedData />} />
          <Route path="/admin_reject" element={<AdminRejectedData />} />
          <Route path="/admin_reports" element={<AdminReports />} />
          <Route
            path="/details/:tlName"
            element={<AdminTeamLeaderDashboard />}
          />
          <Route
            path="/partner_details/:partnerName"
            element={<PartnerDashboardInAdmin />}
          />
          <Route
            path="/adminteamleaderlogindata"
            element={<AdminTeamLeaderLoginData />}
          />
          <Route
            path="/adminteamleaderpendingdata"
            element={<AdminTeamLeaderPendingData />}
          />
          <Route
            path="/adminteamleaderapproveddata"
            element={<AdminTeamLeaderApprovedData />}
          />
          <Route
            path="/adminteamleaderrejecteddata"
            element={<AdminTeamLeaderRejectedData />}
          />
          <Route
            path="/admin_partner_logindata"
            element={<PartnerLoginLeadsInAdmin />}
          />
          <Route
            path="/admin_partner_pendingdata"
            element={<PartnerPendingInAdmin />}
          />
          <Route
            path="/admin_partner_approveddata"
            element={<PartnerApprovedInAdmin />}
          />
          <Route
            path="/admin_partner_rejecteddata"
            element={<PartnerRejectedInAdmin />}
          />
          <Route path="/customer_loandata" element={<CustomerLoanData />} />
          <Route path="/customer_carddata" element={<CustomerCardData />} />
          <Route path="/customer_cibildata" element={<CustomerCibilData />} />

          {/* Career Page Routes  */}
          <Route path="/career_page" element={<CareerPage />} />

          {/* Privacy Policy Page Routes  */}
          <Route path="/policy_page" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermConditionPage />} />

          {/* Admin card Routes  */}

          <Route
            path="/admin_card_loginlead"
            element={<AdminCardLoginleads />}
          />
          <Route
            path="/admin_card_pending"
            element={<AdminCardPendingleads />}
          />
          <Route
            path="/admin_card_approved"
            element={<AdminCardDisbursedleads />}
          />
          <Route
            path="/admin_card_reject"
            element={<AdminCardRejectedleads />}
          />

          {/* Admin Partner Routes */}
          <Route path="/partner_request" element={<PartnerRequest />} />
          <Route path="/approved_partner" element={<PartnerApproved />} />
          <Route path="/rejected_partner" element={<PartnerReject />} />

          {/* Admin Partner Reports  */}
          <Route path="/partner_reports" element={<PartnerReports />} />

          {/* Partner Routes */}
          <Route path="/become_partner" element={<BecomePartner />} />
          <Route path="/techno_support" element={<TechnoSupport />} />
          <Route path="/data_support" element={<DataSupport />} />
          <Route path="/real_time_update" element={<RealTimeUpdates />} />
          <Route path="/on_time_payment" element={<OnTimePayment />} />
          <Route path="/backend_support" element={<BackendSupport />} />
          <Route path="/paperless_process" element={<PaperlessProcess />} />
          <Route path="/personlized_crm" element={<PersonlizedCRM />} />
          <Route
            path="/marketing_branding_support"
            element={<MarketingandBrandingSupport />}
          />
          <Route
            path="/hr_supprt_for_hiring_staff"
            element={<HRSupportForHiringStaff />}
          />
          <Route path="/partner_register" element={<PartnerRegisterform />} />
          <Route
            path="/partner_terms_conditions"
            element={<PartnerTermsAndConditions />}
          />
          <Route path="/partner_signup" element={<PartnerSignUp />} />
          <Route path="/partner_signin" element={<PartnerSignIn />} />
          <Route path="/partner_dashboard" element={<PartnerDashboard />} />
          <Route
            path="/partner_loan_loginleads"
            element={<PartnerLoanLoginLeads />}
          />
          <Route
            path="/partner_loan_pending"
            element={<PartnerLoanPendingData />}
          />
          <Route
            path="/partner_loan_approved"
            element={<PartnerLoanApprovedData />}
          />
          <Route
            path="/partner_loan_rejected"
            element={<PartnerLoanRejectedData />}
          />
          <Route path="/p_details/:tlName" element={<PartnerTlDashboard />} />
          <Route
            path="/partner_loan_tl_apporved"
            element={<PartnerTlApprovedData />}
          />
          <Route
            path="/partner_loan_tl_loginleads"
            element={<PartnerTlLoginLeads />}
          />
          <Route
            path="/partner_loan_tl_pending"
            element={<PartnerTlPendingData />}
          />
          <Route
            path="/partner_loan_tl_rejected"
            element={<PartnerTlRejectedData />}
          />
          <Route path="/partner_tl_reports" element={<PartnerTlReports />} />
          <Route
            path="/partner_card_loginleads"
            element={<PartnerCardLoginLeads />}
          />
          <Route
            path="/partner_card_pending"
            element={<PartnerCardPendingData />}
          />
          <Route
            path="/partner_card_approved"
            element={<PartnerCardApprovedData />}
          />
          <Route
            path="/partner_card_rejected"
            element={<PartnerCardRejectedData />}
          />
          <Route path="/partner_tl_dasboard" element={<PartnerTlDashboard />} />
          <Route
            path="/p-email-verification/:code"
            element={<PartnerEmailVerification />}
          />
          <Route
            path="/p_forgot_password"
            element={<PartnerForgotPassword />}
          />
          <Route
            path="/p_reset_password/:id/:token"
            element={<PartnerResetPassword />}
          />

          {/* Partner Team Leader Routes */}
          <Route path="/p_tl_dasboard" element={<PTlDashboard />} />
          <Route
            path="/p_tl_employee_details"
            element={<PartnerTlEmployeeDetails />}
          />
          <Route
            path="/p_tl_loan_addleadform"
            element={<PartnerTlLoanAddLeadForm />}
          />
          <Route
            path="/p_tl_loan_pending"
            element={<PartnerTlLoanPendingData />}
          />
          <Route
            path="/p_tl_loan_approved"
            element={<PartnerTlLoanApprovedData />}
          />
          <Route
            path="/p_tl_loan_rejected"
            element={<PartnerTlLoanRejectedData />}
          />
          <Route path="/p_tl_loan_uploadcsv" element={<PartnerTlUploadCSV />} />
          <Route
            path="/p_tl_card_addleadform"
            element={<PartnerTlCardAddLeadForm />}
          />
          <Route
            path="/p_tl_card_pending"
            element={<PartnerTlCardPendingData />}
          />
          <Route
            path="/p_tl_card_approved"
            element={<PartnerTlCardApprovedData />}
          />
          <Route
            path="/p_tl_card_rejected"
            element={<PartnerTlCardRejectedData />}
          />

          {/* Partner Employee Routes */}
          <Route
            path="/p_employee_dasboard"
            element={<PartnerEmployeeDashboard />}
          />
          <Route
            path="/p_employee_addleadform"
            element={<PartnerEmployeeAddLeadForm />}
          />
          <Route
            path="/p_employee_pending"
            element={<PartnerEmployeePendingData />}
          />
          <Route
            path="/p_employee_approved"
            element={<PartnerEmployeeApprovedData />}
          />
          <Route
            path="/p_employee_rejected"
            element={<PartnerEmployeeRejectedData />}
          />
          <Route
            path="/p_employee_uploadcsv"
            element={<PartnerEmployeeUploadCSV />}
          />
          <Route
            path="/p_employee_card_addleadform"
            element={<PartnerEmployeeCardAddLeadForm />}
          />
          <Route
            path="/p_employee_card_pending"
            element={<PartnerEmployeeCardPendingData />}
          />
          <Route
            path="/p_employee_card_approved"
            element={<PartnerEmployeeCardApprovedData />}
          />
          <Route
            path="/p_employee_card_rejected"
            element={<PartnerEmployeeCardRejectedData />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
