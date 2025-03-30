

export default function MainHero() {
  return (
    <div className=" text-white relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div className="flex justify-center mb-4 mt-5">
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1A1A1A"/>
        <text x="150" y="120" fill="#6A5ACD" font-size="60" font-weight="bold" text-anchor="middle" font-family="Arial">Vibe</text>
        <text x="150" y="180" fill="#FFFFFF" font-size="60" font-weight="bold" text-anchor="middle" font-family="Arial">Vista</text>
        </svg>

    </div>
 
    <div className="flex justify-center mb-3">
      <h5 className="text-white text-2xl font-semibold">
        Scrollable Content
      </h5>
    </div>
  <div className="p-3 mt-5  border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
    <p className="block text-white leading-normal font-light mb-4 max-w-lg">
      Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others. Here is some additional text to test the scrolling feature. Imagine this is a long article that you can scroll through.
    </p> 
    <p className="block text-white leading-normal font-light mb-4 max-w-lg">
      Still more content to keep the scroll active. Let's make sure the scrollbar styling is correct. Apple's scrollbar style is subtle, with a thin, sleek design. Scroll down for more! Keep adding more content to ensure the scroll is working. The card's content should now be scrollable. Test it out!
      More text to fill the space, as we continue to check how scroll behaves.
    </p>
  </div>
</div>
  )
}