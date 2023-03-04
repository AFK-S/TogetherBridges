import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Ngo = () => {

  const data = useSelector(state => state.NgoSlice)

  const [tabCount, setTabCount] = useState(0)

  const changeTab = (count) => {
    setTabCount(count)
  }

  const params = useParams()
  return (
    <>
      {/* <div>{`Ngo ${data[params.id].name}`}</div> */}
      <div div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
        <div className="flex my-5">
          <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Mumbai</span>
        </div>

        <div>
          <h1 className='font-semibold text-5xl'>{`Ngo ${data[params.id].name}`}</h1>
          <p className='text-md text-gray-500 font-light mt-6'>{data[params.id].description}</p>
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
            <div className="flex items-center my-3 text-md text-gray-500">
              <i class="fa-solid fa-phone mr-4 text-md"></i>
              <p>Tel:</p>
              <p className='ml-5'>123456789</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i class="fa-solid fa-envelope mr-4 text-md"></i>
              <p>Email:</p>
              <p className='ml-5'>test@test.com</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i class="fa-solid fa-user mr-4 text-md"></i>
              <p>Incharge:</p>
              <p className='ml-5'>Abc Xyz</p>
            </div>
          </div>
        </div>

        <div className="tabs my-16">
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2" onClick={() => changeTab(0)}>
              <p class={` ${tabCount === 0 ? "text-blue-600 bg-gray-100 rounded-t-lg active " : ""} inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}>Announcement</p>
            </li>
            <li class="mr-2" onClick={() => changeTab(1)}>
              <p class={` ${tabCount === 1 ? "text-blue-600 bg-gray-100 rounded-t-lg active " : ""} inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}>Upcoming</p>
            </li>
            <li class="mr-2" onClick={() => changeTab(2)}>
              <p class={` ${tabCount === 2 ? "text-blue-600 bg-gray-100 rounded-t-lg active " : ""} inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}>Previous</p>
            </li>
          </ul>
          <div id="myTabContent" className='my-3'>
            <div class={` ${tabCount === 0 ? "" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}>
              <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class={` ${tabCount === 1 ? "" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class={` ${tabCount === 2 ? "" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
          </div>
        </div>

      </div >
    </>

  )
}

export default Ngo