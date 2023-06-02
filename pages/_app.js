import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-br from-white to-pink-200 h-screen md:h-full'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp