import { useEffect, useState } from 'react'
import './App.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function App() {
  let location = useLocation();
  let navigate = useNavigate();
  const [theme, setTheme] = useState<"dark" | "light">("light")
  useEffect(() => {
    // TODO: Can also perform other checks
    // If already logged in can fetch user data nd redirect here

    // check if empty route then redirect to login
    const isRootRoute = !location.pathname.split('/').filter(str => !!str).length
    if (isRootRoute)
      navigate("/login");
  })

  return (
    <div className={`min-w-full min-h-screen ${theme}`}>
      <div><button onClick={() => { setTheme(thm => thm === "dark" ? "light" : "dark") }}>Change theme</button></div>
      <Outlet />
    </div>
  )
}

export default App
