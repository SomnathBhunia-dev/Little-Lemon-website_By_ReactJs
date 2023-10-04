import React from 'react'

export const Footer = () => {
  return (

    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="hover:underline">Somnath™</span>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-6">
          <li> About </li>
          <li> Privacy Policy </li>
          <li> Licensing </li>
          <li> Contact </li>
        </ul>
      </div>
    </footer>

  )
}
