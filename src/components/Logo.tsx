const Logo = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform hover:scale-105 transition-all duration-300"
    >
      <defs>
        <linearGradient
          id="logoGradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#42d392" />
          <stop offset="1" stopColor="#647eff" />
        </linearGradient>
      </defs>
      
      {/* Background shape */}
      <path
        d="M10 0H30C35.523 0 40 4.47715 40 10V30C40 35.5228 35.523 40 30 40H10C4.47715 40 0 35.5228 0 30V10C0 4.47715 4.47715 0 10 0Z"
        fill="url(#logoGradient)"
        fillOpacity="1"
      />

      {/* Custom Logo */}
      <g transform="scale(0.08) translate(100, 100)">
        <path 
          d="M1 337V1L48.4198 23.2423V162.375H81.1395V101.8L128.085 126.882V274.532L81.1395 298.668V211.592H48.4198V314.758L1 337Z" 
          fill="#FFFFFF"
        />
        <path 
          d="M81.1395 87.1296V40.7521L341 169.473L290.261 195.028L213.915 156.223V231.941L164.598 256.076V130.194L81.1395 87.1296Z" 
          fill="#FFFFFF"
        />
        <path 
          d="M1 337V1L48.4198 23.2423V162.375H81.1395V101.8L128.085 126.882V274.532L81.1395 298.668V211.592H48.4198V314.758L1 337Z" 
          stroke="#FFFFFF" 
          strokeWidth="0.769784"
        />
        <path 
          d="M81.1395 87.1296V40.7521L341 169.473L290.261 195.028L213.915 156.223V231.941L164.598 256.076V130.194L81.1395 87.1296Z" 
          stroke="#FFFFFF" 
          strokeWidth="0.769784"
        />
      </g>
    </svg>
  );
};

export default Logo;
