import './App.css';
import Header from "./components/header";
import StudentForm from "./components/studentForm";
// import Contact from "./components/contact"
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header title="Ranjit Singh" searchBar={true}  />
      <StudentForm />             {/*     first letter capital compulsory  */}
      {/* <Contact phone="9759294956" />  */}
      <Footer />

    </>
  );
}

export default App;
