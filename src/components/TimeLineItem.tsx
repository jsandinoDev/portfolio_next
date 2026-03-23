interface TimeLineItemProps {
  fromDate: string;
  workplace: string;
  toDate?: string;
  title: string;
  description: string;
  link: string;
  current?: boolean;
  currentLabel?: string;
  learnMoreLabel?: string;
}

export const TimeLineItem: React.FC<TimeLineItemProps> = ({
  fromDate,
  toDate,
  workplace,
  title,
  description,
  link,
  current = false,
  currentLabel = "Current",
  learnMoreLabel = "Learn more",
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>

      <div className="flex items-center space-x-1">
        <time className="text-base sm:text-lg md:text-xl font-normal leading-none text-orange-400">
          {fromDate}
        </time>

        {current ? (
          <div>
            <span className="pe-1 text-base sm:text-lg md:text-xl font-normal leading-none text-orange-400">
              -
            </span>
            <time className="text-base sm:text-lg md:text-xl font-normal leading-none text-orange-400">
              {currentLabel}
            </time>
          </div>
        ) : (
          <div>
            <span className="pe-1 text-base sm:text-lg md:text-xl font-normal leading-none text-orange-400">
              -
            </span>
            <time className="text-base sm:text-lg md:text-xl font-normal leading-none text-orange-400">
              {toDate}
            </time>
          </div>
        )}
      </div>

      <div className="space-x-2 flex items-center">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-white">
          {title}
        </h3>
        <h4 className="text-xl md:text-xl font-normal text-orange-400">
          |     {workplace}
        </h4>
      </div>

      <p className="mb-4 sm:text-xl md:text-xl font-thin text-gray-400">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center px-4 py-2 text-base sm:text-lg md:text-xl font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-700"
      >
        {learnMoreLabel}{" "}
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
