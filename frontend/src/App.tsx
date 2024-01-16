import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import Layout from './layouts/Layout';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout > Home Page </Layout>} />
          <Route path="/search" element={<Layout > Search Page </Layout>} />
          <Route path="/signin" element={<Layout > Login/Signup </Layout>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
