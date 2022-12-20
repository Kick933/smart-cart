import Navbar from "./Navbar"

function Layout({children}) {
  return (
    <main className="w-screen min-h-screen">
    <Navbar />
    {children}
    </main>
  )
}

export default Layout