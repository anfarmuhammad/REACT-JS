import React from 'react'

function header() {
  return (
    <div>
        <div className="w-full h-20 bg-stone-700 flex items-center justify-between px-4 md:px-16">
  <h1 className="text-white text-2xl md:text-4xl font-serif">TAILWIND</h1>
  <ul className="hidden md:flex text-white gap-6 md:gap-14 items-center">
    <li><a href="" className="hover:underline">Components</a></li>
    <li><a href="" className="hover:underline">Templates</a></li>
    <li><a href="" className="hover:underline">UI Kit</a></li>
    <li><a href="" className="hover:underline">Docs</a></li>
    <li><a href="" className="hover:underline">Sign in</a></li>
    <button className="w-32 md:w-40 h-10 bg-teal-900 hover:bg-zinc-900 text-white rounded">
      Get all-access →
    </button>
  </ul>
</div>

    </div>
  )
}
export default header
