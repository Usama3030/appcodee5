import Attendance from "../Pages/Attendance";
import NoticeBoard from "../Pages/NoticeBoard";
import Notices from "../Pages/Notices";
import Schedule from "../Pages/Schedule";
import Professors from "../Pages/Professors";
import Reports from "../Pages/Reports";
import BiodataForm from "../Pages/BiodataForm";
import Scheduletable from "../Pages/Scheduletable";
import Biometric from "../Pages/Biometric";
import DeviceSetup from "../Pages/DeviceSetup";
import Deviceform from "../Pages/Deviceform";
//import Adminlogin from "../Pages/Adminlogin";
//import Adminregister from "../Pages/Adminregister";

const routes = [
  { path: "/Attendance", component: <Attendance /> },
  { path: "/NoticeBoard", component: <NoticeBoard /> },
  { path: "/Notices", component: <Notices /> },
  { path: "/Scheduletable/Schedule", component: <Schedule /> },
  { path: "/Professors", component: <Professors /> },
  { path: "/Reports", component: <Reports /> },
  { path: "/Professors/form", component: <BiodataForm /> },
  { path: "/Scheduletable", component: <Scheduletable /> },
  { path: "/Biometric Machine", component: <Biometric /> },
  { path: "/DeviceSetup", component: <DeviceSetup /> },
  { path: "/Deviceform", component: <Deviceform /> },
 // { path: "/Login", component: <Adminlogin /> },
  //{ path: "/admin/register", component: <Adminregister /> },
];

export default routes;
