export default function CardComponent() {
  return (
    <div className="max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Be a part of VibeVista
        </h5>
      </a>
      <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
      Joining us is a breeze with Google—just a click away! Experience seamless sign-ups and instant connections.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-4 py-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        JOIN NOW!
        <svg
          className="rtl:rotate-180 w-4 h-4 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
