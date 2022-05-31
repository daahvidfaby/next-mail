import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
  
  

  return (
    <Layout>
      <div>
        <div className='h-screen'>
          <div className='flex justify-center items-center h-full'>
            <button className='bg-blue-500 px-4 py-3 text-lg text-white rounded' onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>Sign-in with google</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
