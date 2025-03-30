export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center gap-2 py-6 w-full mx-auto bg-secondary/15 text-white shadow-lg shadow-neutral-600/5 backdrop-blur-lg  rounded-2xl">
      <div className="flex w-full justify-between items-center p-6">
        <div className="text-lg font-bold" aria-label="Brand Logo">
          VibeVista
        </div>
        <nav aria-label="Primary Navigation">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="inline-flex items-center px-4 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

