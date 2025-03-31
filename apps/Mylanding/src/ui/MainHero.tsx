

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
        About us
      </h5>
    </div>
  <div className="p-3 mt-5  border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
    <p className="block text-white leading-normal font-light mb-4 max-w-lg">
    VibeVista: Your ultimate social hub! Connect effortlessly, share vibrant moments, and vibe with friends in real-time. Enjoy seamless video calls, join lively chats, and discover trending posts. Elevate your social experience with our intuitive, glass-like interface. Join the buzz and let the good times roll! 
    </p> 
    <p className="block text-white leading-normal font-light mb-4 max-w-lg">
    Dive into a world where every interaction is smooth and engaging. Create lasting connections, express yourself freely, and stay updated with friends' activities. With VibeVista, staying social is not just easy—it's an adventure. Your stories, your way, all in one place. Join us today and experience social media like never before!
      
    </p>
  </div>
</div>
  )
}