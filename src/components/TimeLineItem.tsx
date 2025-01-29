interface TimeLineItemProps {
  fromDate: string;
  toDate?: string;
  title: string;
  description: string;
  link: string;
  current?: boolean;
}

export const TimeLineItem: React.FC<TimeLineItemProps> = ({
  fromDate,
  toDate,
  title,
  description,
  link,
  current = false, // Default value for `current`
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <div className="flex items-center space-x-1">
        <time className="text-base sm:text-lg md:text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
          {fromDate}
        </time>

        {current ? (
          <div>
            <span className="pe-1 text-base sm:text-lg md:text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              -
            </span>
            <time className="text-base sm:text-lg md:text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              Current
            </time>
          </div>
        ) : (
          <div>
            <span className="pe-1 text-base sm:text-lg md:text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              -
            </span>
            <time className="text-base sm:text-lg md:text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              {toDate}
            </time>
          </div>
        )}
      </div>

      <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-lg sm:text-xl md:text-2xl font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center px-4 py-2 text-base sm:text-lg md:text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Learn more{" "}
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
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
  );
};
