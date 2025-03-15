import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./ulits/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import Navbar from "./components/Navbar/Navbar";
import { DarkToggleProvider } from "./context/DarkToggle";

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedinUserdata, setLoggedinUserData] = useState(null);

  const Authdata = useContext(AuthContext);

  useEffect(() => {
    if (Authdata) {
      const loggedinUser = getLocalStorage('loggedinUser');
      if (loggedinUser) setUser(loggedinUser.role);
    }
  }, [Authdata]);

  const handleLogin = (email, password) => {
    const admin = Authdata.admin.find((e) => email === e.email && e.password === password);
    if (Authdata && admin) {
      setUser('admin');
      setLoggedinUserData(admin);
      localStorage.setItem('loggedinUser', JSON.stringify({ role: 'admin', data: admin }));
    } else {
      if (Authdata) {
        const employee = Authdata.employees.find((e) => email === e.email && e.password === password);
        if (employee) {
          setUser('employee');
          setLoggedinUserData(employee);
          localStorage.setItem('loggedinUser', JSON.stringify({ role: 'employee', data: employee }));
        } else {
          alert("Invalid credentials");
        }
      }
    }
  };

  useEffect(() => {
    if (user) {
      setLocalStorage(user);
    }
    const data = getLocalStorage();
  }, [user]);

  const [theme, SetTheme] = useState('light');
  const Darkmode = () => {
    SetTheme('dark');
  };
  const Lightmode = () => {
    SetTheme('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <DarkToggleProvider value={{ theme, Darkmode, Lightmode }}>
      <Navbar />
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin" && <AdminDashboard changeUser={setUser} data={LoggedinUserdata} />}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={LoggedinUserdata} />}
    </DarkToggleProvider>
  );
};

export default App;
