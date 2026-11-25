import usePageTitle from '../usePageTitle.js'

export default function Home() {
  usePageTitle('Course Homepage')
  return (
    <>
      <h2>Course Homepage</h2>
      <img src="/images/mascot.png" alt="Clever Gecko Mascot" width="200" />
      <p>Welcome to my ITIS 3135 Web App Development course space.</p>
    </>
  )
}