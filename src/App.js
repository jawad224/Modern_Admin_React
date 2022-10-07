import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// dashboard pages
import Dashboard from './pages/dashboardpages/Dashboard';
import DashboardEcommerce from './pages/dashboardpages/DashboardEcommerce';
import Dashboardcrypto from './pages/dashboardpages/Dashboardcrypto';
import DashboardSales from './pages/dashboardpages/DashboardSales';

import Tables from './pages/table/Tables';
import BasicForm from './pages/form layouts/BasicForm';
import HorizontalForm from './pages/form layouts/HorizontalForm';
import HiddenLabels from './pages/form layouts/HiddenLabels';
import FormAction from './pages/form layouts/FormAction';
import RowSeparator from './pages/form layouts/RowSeparator';
import BorderedForm from './pages/form layouts/BorderedForm';
import CommingSoon from './pages/commingsoon/CommingSoon';
import EcommerceCard from './pages/cards/ecommerce';

import StatisticsCard from './pages/cards/statistics';
import SocialCard from './pages/cards/social'

import Bootstarpcard from './pages/cards/cardbootstrap'

import Error404 from './pages/errors/Error404'
import Error500 from './pages/errors/Error500';

import SimpleLogin from './pages/auth/simplelogin';
import SimpleRegister from './pages/auth/simpleregister';

import RegisterBg from './pages/auth/registerbg';

import LoginBg from './pages/auth/loginbg';


import Gallerygrid from './pages/gallery/gallerygrid';
import Gallerymasonry from './pages/gallery/gallerymasonry';
import Galleryhover from './pages/gallery/galleryhover';

import Usercard from './pages/user/usercard';
import Userlist from './pages/user/userlist';
import Userprofile from './pages/user/userprofile';

import ChatApplication from './pages/application/ChatApplication';

import EmailApplication from './pages/application/EmailApplication';

import CenterTimelines from './pages/timelines/CenterTimelines';

import LeftTimelines from './pages/timelines/LeftTimelines';

import HorizontalTimelines from './pages/timelines/HorizontalTimelines';

import RightTimelines from './pages/timelines/RightTimelines';

import Scrumboard from './pages/scrumboard/Scrumboard';

import InvoiceList from './pages/invoices/InvoiceList';
import InvoiceSummary from './pages/invoices/InvoiceSummary';
import InvoiceTemplate from './pages/invoices/InvoiceTemplate';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboardecommerce' element={<DashboardEcommerce />} />
          <Route path='/dashboardcrypto' element={<Dashboardcrypto />} />
          <Route path='/dashboardsales' element={<DashboardSales />} />
          <Route path='/basicform' element={<BasicForm />} />
          <Route path='/horizontalform' element={<HorizontalForm />} />
          <Route path='/hiddenlabelform' element={<HiddenLabels />} />
          <Route path='/formaction' element={<FormAction />} />
          <Route path='/rowseparatorform' element={<RowSeparator />} />
          <Route path='/borderedform' element={<BorderedForm />} />
          <Route path='/commingsoon' element={<CommingSoon />} />
          <Route path='/card/ecommerce' element={<EcommerceCard />} />
          <Route path='/card/statistics' element={<StatisticsCard />} />
          <Route path='/card/social' element={<SocialCard />} />
          <Route path='/card' element={<Bootstarpcard />} />
          <Route path='/error/404' element={<Error404 />} />
          <Route path='/error/500' element={<Error500 />} />
          <Route path='/login' element={<SimpleLogin />} />
          <Route path='/register' element={<SimpleRegister />} />

          <Route path='/registerbg' element={<RegisterBg />} />

          <Route path='/loginbg' element={<LoginBg/>} />

          <Route path='/gallery' element={<Gallerygrid/>} />
          <Route path='/galleryhover' element={<Galleryhover/>} />
          <Route path='/gallerymasonry' element={<Gallerymasonry/>} />


          <Route path='/user' element={<Usercard/>} />
          <Route path='/userlist' element={<Userlist/>} />
          <Route path='/userprofile' element={<Userprofile/>} />


      <Route path='/basictable' element={<Tables />} />

      <Route path='/chatapplication' element={<ChatApplication />} />
      <Route path='/emailapplication' element={<EmailApplication />} />

      <Route path='/righttimeline' element={<RightTimelines />} />
      <Route path='/lefttimeline' element={<LeftTimelines />} />
      <Route path='/horizontaltimeline' element={<HorizontalTimelines />} />
      <Route path='/centertimeline' element={<CenterTimelines />} />

      <Route path='/scrumboard' element={<Scrumboard />} />

      <Route path='/invoicetemplate' element={<InvoiceTemplate />} />
      <Route path='/invoicesummary' element={<InvoiceSummary />} />
      <Route path='/invoicelist' element={<InvoiceList />} />

      


      



          


          


        </Routes>
      </Router>
    </div>
  );
}

export default App;
