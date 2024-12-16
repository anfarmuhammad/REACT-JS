import React from 'react'

function footer() {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-0">
  <p className="font-black my-4 md:my-10 text-stone-400">All-access</p>
  <h1 className="text-3xl md:text-5xl font-black text-white">
    Get everything, forever.
  </h1>
  <p className="mt-4 text-base md:text-2xl text-white">
    Get lifetime access to 500+ components and every template available today, plus
  </p>
  <a className="text-base md:text-2xl text-white mt-2">
    any new content we add in the future for a simple one-time price.
  </a>

  {/* Subscription Input */}
  <div className="w-full md:w-1/2 mt-8 flex items-center justify-center">
    <input
      className="w-80 md:w-96 h-10 rounded-lg bg-zinc-900 text-white px-4"
      type="text"
      placeholder="Subscribe via email"
      name="search"
    />
  </div>
</div>
  )
}
export default footer
