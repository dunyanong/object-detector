import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-br from-purple-200 to-blue-200 h-screen md:h-full'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp