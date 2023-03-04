import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Ngo = () => {

  const data = useSelector(state => state.NgoSlice)

  const params = useParams()
  return (
    <>
      {/* <div>{`Ngo ${data[params.id].name}`}</div> */}
      <div className="ngo w-8/12 mx-auto py-28">
        <div className="flex my-5">
          <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Mumbai</span>
        </div>

        <div>
          <h1 className='font-semibold text-5xl'>{`Ngo ${data[params.id].name}`}</h1>
          <div className="my-10">
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
            <div>
              <h1 className='font-semibold text-xl'>Address</h1>
              <p className='text-md text-gray-500 font-light'>{data[params.id].address}</p>
            </div>
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
          </div>
        </div>

        <div className='flex'>
          <div className="icons flex flex-col w-3/12">
            <div className="flex items-center my-3 text-lg text-gray-500">
              <i class="fa-solid fa-phone mr-4 text-xl"></i>
              <p>Tel:</p>
              <p className='ml-5'>123456789</p>
            </div>
            <div className="flex items-center my-3 text-lg text-gray-500">
              <i class="fa-solid fa-envelope mr-4 text-xl"></i>
              <p>Email:</p>
              <p className='ml-5'>test@test.com</p>
            </div>
          </div>
        </div>

        <div className="tabs my-16">

          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2">
              <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
            </li>
            <li class="mr-2">
              <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
            </li>
            <li class="mr-2">
              <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
            </li>
            <li class="mr-2">
              <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
            </li>
            <li>
              <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li>
          </ul>

        </div>


      </div>
    </>

  )
}

export default Ngo