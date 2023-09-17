import { useEffect } from 'react'
import './App.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function App() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // TODO: Can also perform other checks
    // If already logged in can fetch user data nd redirect here

    // check if empty route then redirect to login
    const isRootRoute = !location.pathname.split('/').filter(str => !!str).length
    if (isRootRoute)
      navigate("/login");
  })

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
