import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './assets/css/App.css'
import './assets/css/TrackingParcel.css'

import AuthenticationPage from './components/authentication/AuthenticationPage'
import TrackingParcelPage from './components/tracking-parcel/TrackingParcelPage'

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/login" element={<AuthenticationPage />} />
            <Route path="/tracking-parcel" element={<TrackingParcelPage />} />
              <Route
                  path="/"
                  element={<Navigate to="/login" replace={true} />}
              />
          </Routes>
      </Router>
  );
}

export default App;
