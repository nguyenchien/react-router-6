import { Outlet } from 'react-router-dom'

const ShareProductLayout = () => {
  return (
    <section className='section'>
      <h2>products</h2>
      <Outlet />
    </section>
  )
}

export default ShareProductLayout