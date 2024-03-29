import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminAuthProvider } from './components/Admin/AdminAuth';
import ReqAdminAuth from './components/Admin/AdminReqAuth';
import AdminLogin from './components/Admin/Adminlogin';
import AdminPasswordChange from './components/Admin/AdminPasswordChange';
import AdminDashboard from './components/Admin/Admindashboard';
import { StaffAuthProvider } from './components/Staff/StaffAuth';
import ReqStaffAuth from './components/Staff/StaffReqAuth';
import StaffLogin from './components/Staff/Stafflogin';
import StaffDashboardHO from './components/Staff/StaffdashboardHO';
import StaffDashboardGeneral from './components/Staff/StaffdashboardGeneral';
import StaffDashboard from './components/Staff/Staffdashboard';
import { UserAuthProvider } from './components/User/UserAuth';
import ReqUserAuth from './components/User/UserReqAuth';
import UserLogin from './components/User/Userlogin';
import UserDashboard from './components/User/Userdashboard';
import UserDashboardHO from './components/User/UserdashboardHO';
import UserDashboardGeneral from './components/User/UserdashboardGeneral';
import AdminBuyerManage from './components/Admin/AdminBuyerManage';
import AdminSellerManage from './components/Admin/AdminSellerManage';
import AdminCompanyManage from './components/Admin/AdminCompanyManage';
import AdminConsignmentManage from './components/Admin/AdminConsignmnetManage';
import AdminStaffManage from './components/Admin/AdminStaffManage';
import AdminUserManage from './components/Admin/AdminUserManage';
import StaffBuyerManage from './components/Staff/StaffBuyerManage';
import StaffSellerManage from './components/Staff/StaffSellerManage';
import StaffCompanyManage from './components/Staff/StaffCompanyManage';
import StaffConsignmentManage from './components/Staff/StaffConsignmentManage';
import StaffLoadingManage from './components/Staff/StaffVechicleManage';
import UserBuyerManage from './components/User/UserBuyerManage';
import UserSellerManage from './components/User/UserSellerManage';
import UserCompanyManage from './components/User/UserCompanyManage';
import UserConsignmentManage from './components/User/UserConsignmentManage';
import UserVechicleManage from './components/User/UserVechicleManage';
import AdminVechicleManage from './components/Admin/AdminVechicleManage';
import AdminReports from './components/Admin/AdminReport';
import AdminInvoiceManagement from './components/Admin/AdminInvoiceManager';
import AdminCreateInvoice from './components/Admin/AdminCreateInvoice';
import AdminInvoiceDashboard from './components/Admin/AdminInvoiceDashboard';
import StaffReports from './components/Staff/StaffReport';
import StaffCreateInvoice from './components/Staff/StaffCreateInvoice';
import StaffInvoiceManagement from './components/Staff/StaffInvoiceManage';
import StaffInvoiceDashboard from './components/Staff/StaffInvoiceDashboard';
import UserInvoiceDashboard from './components/User/UserInvoiceDashboard';
import UserInvoiceManagement from './components/User/UserInvoiceManage';
import UserReports from './components/User/UserReport';
import UserCreateInvoice from './components/User/UserCreateInvoice';
import AdminPdfViewer from './components/Admin/AdminPdfViewer';
import PdfViewer from './components/Admin/PdfViewer';
import PdfViewer2 from './components/Admin/PdfViewer2';
import StaffPdfViewer from './components/Staff/StaffInvoiceView';
import UserPdfViewer from './components/User/UserInvoiceView';
import StaffPasswordChange from './components/Staff/StaffPasswordChange';
import UserPasswordChange from './components/User/UserPasswordChange';
import UserEditInvoice from './components/User/UserEditInvoice';
import AdminEditInvoice from './components/Admin/AdminEditInvoice';
import StaffEditInvoice from './components/Staff/StaffEditInvoice';
function App() {
	return (
		<Router>
			<div>
				{/* Admin Routes */}
				<AdminAuthProvider>
					<Routes>
						<Route path='/' element={<AdminLogin />} />
						{/* Route for admin password change */}
						<Route
							path='/adminpasswordchange'
							element={
								<ReqAdminAuth>
									<AdminPasswordChange />
								</ReqAdminAuth>
							}
						/>
						{/* Route for editing admin invoice */}
						<Route
							path='/admineditinv/:id'
							element={
								<ReqAdminAuth>
									<AdminEditInvoice />
								</ReqAdminAuth>
							}
						/>
						{/* Route for admin dashboard */}
						<Route
							path='/admindashboard'
							element={
								<ReqAdminAuth>
									<AdminDashboard />
								</ReqAdminAuth>
							}
						/>
						{/* Route for viewing PDFs in admin panel */}
						<Route
							path='/pdf/:selectedInvoiceId'
							element={<AdminPdfViewer />}
						/>
						{/* Route for admin invoice dashboard */}
						<Route
							path='/admininvdash'
							element={
								<ReqAdminAuth>
									<AdminInvoiceDashboard />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing buyers in admin panel */}
						<Route
							path='/adminbuyman'
							element={
								<ReqAdminAuth>
									<AdminBuyerManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing sellers in admin panel */}
						<Route
							path='/adminsellman'
							element={
								<ReqAdminAuth>
									<AdminSellerManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing companies in admin panel */}
						<Route
							path='/admincomman'
							element={
								<ReqAdminAuth>
									<AdminCompanyManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing consignments in admin panel */}
						<Route
							path='/adminconman'
							element={
								<ReqAdminAuth>
									<AdminConsignmentManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing staff members in admin panel */}
						<Route
							path='/adminstaffman'
							element={
								<ReqAdminAuth>
									<AdminStaffManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing users in admin panel */}
						<Route
							path='/adminuserman'
							element={
								<ReqAdminAuth>
									<AdminUserManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing vehicles in admin panel */}
						<Route
							path='/adminvecman'
							element={
								<ReqAdminAuth>
									<AdminVechicleManage />
								</ReqAdminAuth>
							}
						/>
						{/* Route for generating reports in admin panel */}
						<Route
							path='/admingenrep'
							element={
								<ReqAdminAuth>
									<AdminReports />
								</ReqAdminAuth>
							}
						/>
						{/* Route for managing invoices in admin panel */}
						<Route
							path='/admininman'
							element={
								<ReqAdminAuth>
									<AdminInvoiceManagement />
								</ReqAdminAuth>
							}
						/>
						{/* Route for creating new invoices in admin panel */}
						<Route
							path='/admincreinv'
							element={
								<ReqAdminAuth>
									<AdminCreateInvoice />
								</ReqAdminAuth>
							}
						/>
						{/* Route for viewing invoices in admin panel */}
						<Route
							path='/admininvview'
							element={
								<ReqAdminAuth>
									<AdminPdfViewer />
								</ReqAdminAuth>
							}
						/>
						{/* Route for viewing specific PDF with timestamp in admin panel */}
						<Route
							path='/pdf/:selectedInvoiceId/:timestamp'
							element={<PdfViewer />}
						/>
						{/* Route for viewing specific PDF with timestamp in admin panel */}
						<Route
							path='/pdf2/:selectedInvoiceId/:timestamp'
							element={<PdfViewer2 />}
						/>
					</Routes>
				</AdminAuthProvider>
			
				{/* Staff Routes */}
<StaffAuthProvider>
  <Routes>
    {/* Route for staff login */}
    <Route path='/staff' element={<StaffLogin />} />
    {/* Route for staff password change */}
    <Route
      path='/staffpasswordchange'
      element={
        <ReqStaffAuth>
          <StaffPasswordChange />
        </ReqStaffAuth>
      }
    />
    {/* Route for editing staff invoice */}
    <Route
      path='/staffeditinv/:id'
      element={
        <ReqStaffAuth>
          <StaffEditInvoice />
        </ReqStaffAuth>
      }
    />
    {/* Route for staff invoice dashboard */}
    <Route
      path='/staffinvdash'
      element={
        <ReqStaffAuth>
          <StaffInvoiceDashboard />
        </ReqStaffAuth>
      }
    />
    {/* Route for staff super dashboard */}
    <Route
      path='/staffsuperdash'
      element={
        <ReqStaffAuth>
          <StaffDashboard />
        </ReqStaffAuth>
      }
    />
    {/* Route for staff HO dashboard */}
    <Route
      path='/staffhodash'
      element={
        <ReqStaffAuth>
          <StaffDashboardHO />
        </ReqStaffAuth>
      }
    />
    {/* Route for staff general dashboard */}
    <Route
      path='/staffgendash'
      element={
        <ReqStaffAuth>
          <StaffDashboardGeneral />
        </ReqStaffAuth>
      }
    />
    {/* Route for managing buyers in staff panel */}
    <Route
      path='/staffbuyman'
      element={
        <ReqStaffAuth>
          <StaffBuyerManage />
        </ReqStaffAuth>
      }
    />
    {/* Route for creating invoices in staff panel */}
    <Route
      path='/staffcreinv'
      element={
        <ReqStaffAuth>
          <StaffCreateInvoice />
        </ReqStaffAuth>
      }
    />
    {/* Route for managing invoices in staff panel */}
    <Route
      path='/staffinman'
      element={
        <ReqStaffAuth>
          <StaffInvoiceManagement />
        </ReqStaffAuth>
      }
    />
    {/* Route for generating reports in staff panel */}
    <Route
      path='/staffgenrep'
      element={
        <ReqStaffAuth>
          <StaffReports />
        </ReqStaffAuth>
      }
    />
    {/* Route for managing sellers in staff panel */}
    <Route
      path='/staffsellman'
      element={
        <ReqStaffAuth>
          <StaffSellerManage />
        </ReqStaffAuth>
      }
    />
    {/* Route for managing companies in staff panel */}
    <Route
      path='/staffcomman'
      element={
        <ReqStaffAuth>
          <StaffCompanyManage />
        </ReqStaffAuth>
      }
    />
    {/* Route for managing consignments in staff panel */}
    <Route
      path='/staffconman'
      element={
        <ReqStaffAuth>
          <StaffConsignmentManage />
        </ReqStaffAuth>
      }
    />
    {/* Route for managing vehicles in staff panel */}
    <Route
      path='/staffvecman'
      element={
        <ReqStaffAuth>
          <StaffLoadingManage />
        </ReqStaffAuth>
      }
    />
    {/* Route for viewing invoices in staff panel */}
    <Route
      path='/staffinvview'
      element={
        <ReqStaffAuth>
          <StaffPdfViewer />
        </ReqStaffAuth>
      }
    />
  </Routes>
</StaffAuthProvider>

{/* User Routes */}

<UserAuthProvider>
  <Routes>
    {/* Route for user login */}
    <Route path='/user' element={<UserLogin />} />
    {/* Route for user password change */}
    <Route
      path='/userpasswordchange'
      element={
        <ReqUserAuth>
          <UserPasswordChange />
        </ReqUserAuth>
      }
    />
    {/* Route for editing user invoice */}
    <Route
      path='/usereditinv/:id'
      element={
        <ReqUserAuth>
          <UserEditInvoice />
        </ReqUserAuth>
      }
    />
    {/* Route for user invoice dashboard */}
    <Route
      path='/userinvdash'
      element={
        <ReqUserAuth>
          <UserInvoiceDashboard />
        </ReqUserAuth>
      }
    />
    {/* Route for user super dashboard */}
    <Route
      path='/usersuperdash'
      element={
        <ReqUserAuth>
          <UserDashboard />
        </ReqUserAuth>
      }
    />
    {/* Route for user HO dashboard */}
    <Route
      path='/userhodash'
      element={
        <ReqUserAuth>
          <UserDashboardHO />
        </ReqUserAuth>
      }
    />
    {/* Route for user general dashboard */}
    <Route
      path='/usergendash'
      element={
        <ReqUserAuth>
          <UserDashboardGeneral />
        </ReqUserAuth>
      }
    />
    {/* Route for managing buyers in user panel */}
    <Route
      path='/userbuyman'
      element={
        <ReqUserAuth>
          <UserBuyerManage />
        </ReqUserAuth>
      }
    />
    {/* Route for managing sellers in user panel */}
    <Route
      path='/usersellman'
      element={
        <ReqUserAuth>
          <UserSellerManage />
        </ReqUserAuth>
      }
    />
    {/* Route for managing companies in user panel */}
    <Route
      path='/usercomman'
      element={
        <ReqUserAuth>
          <UserCompanyManage />
        </ReqUserAuth>
      }
    />
    {/* Route for managing consignments in user panel */}
    <Route
      path='/userconman'
      element={
        <ReqUserAuth>
          <UserConsignmentManage />
        </ReqUserAuth>
      }
    />
    {/* Route for managing vehicles in user panel */}
    <Route
      path='/uservecman'
      element={
        <ReqUserAuth>
          <UserVechicleManage />
        </ReqUserAuth>
      }
    />
    {/* Route for managing invoices in user panel */}
    <Route
      path='/userinman'
      element={
        <ReqUserAuth>
          <UserInvoiceManagement />
        </ReqUserAuth>
      }
    />
    {/* Route for generating reports in user panel */}
    <Route
      path='/usergenrep'
      element={
        <ReqUserAuth>
          <UserReports />
        </ReqUserAuth>
      }
    />
    {/* Route for creating invoices in user panel */}
    <Route
      path='/usercreinv'
      element={
        <ReqUserAuth>
          <UserCreateInvoice />
        </ReqUserAuth>
      }
    />
    {/* Route for viewing invoices in user panel */}
    <Route
      path='/userinvview'
      element={
        <ReqUserAuth>
          <UserPdfViewer />
        </ReqUserAuth>
      }
    />
  </Routes>
</UserAuthProvider>

</div>
		</Router>
	);
}

export default App