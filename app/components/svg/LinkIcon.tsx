const LinkIcon = () => {
  return (
    <svg
      className="h-[40px] w-[40px] cursor-pointer fill-none stroke-lightPink duration-300 hover:stroke-yellowishWhite"
      strokeWidth="2"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export default LinkIcon;
