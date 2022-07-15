import { MailOpenIcon } from '@heroicons/react/solid'
import useUser from "../hooks/User";

export default function Login() {

  const {signIn} = useUser();

  return (
    <section className="h-full gradient-form bg-gray-100 md:h-screen">
      <div className="container py-12 px-6 h-full m-auto">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div
                  className="lg:w-6/12 lg:rounded-l-lg lg:rounded-r-none"
                  style={{
                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                  }}
                >
                  <div className='h-full w-full flex items-center align-middle'>
                    <MailOpenIcon className='w-full h-20 text-white'/>
                  </div>
                </div>
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:py-20 md:px-12 md:mx-6">
                    <div>
                      <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-700 mb-3">Sign in with your Google account</h2>
                        <p className="text-sm text-gray-400">No data will be saved</p>
                      </div>
                      <div className='flex items-center h-full'>
                        <button className='bg-red-500 px-4 py-3 text-lg text-white font-semibold rounded' onClick={() => signIn()}>Sign in with Google</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
