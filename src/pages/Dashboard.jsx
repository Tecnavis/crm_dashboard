import React from 'react'
import Footer from "../components/footer/Footer"
import DashboardBreadcrumb from '../components/breadcrumb/DashboardBreadcrumb'
import DashboardCards from '../components/cards/DashboardCards'
import SalesAnalytics from '../components/dashboard/SalesAnalytics'
import SocialVisitors from '../components/dashboard/SocialVisitors'
import NewCustomer from '../components/dashboard/NewCustomer'
import RecentOrder from '../components/dashboard/RecentOrder'
const DashboardMainContent = () => {
  const adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
  if (!adminDetails) {
    window.location.href = "/404";
  }else{
  return (
    <div className="main-content">
        <DashboardBreadcrumb title={'E-Commerce Dashboard'}/>
        <DashboardCards/>
        <div className="row">
            <SalesAnalytics/>
            {/* <SocialVisitors/> */}
            <NewCustomer/>
            <RecentOrder/>
        </div>
        <Footer/>
    </div>
  )
}
}
export default DashboardMainContent