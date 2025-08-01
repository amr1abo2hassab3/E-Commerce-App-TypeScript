export const SidebarSkeletonItem = () => (
  <li className="flex items-center mb-4 animate-pulse">
    <div className="w-5 h-5 bg-gray-300 rounded dark:bg-gray-600" />
    <div className="h-4 bg-gray-300 rounded w-32 ms-2 dark:bg-gray-500" />
  </li>
);

const SidebarSkeletonList = () => (
  <>
    {Array.from({ length: 10 }).map((_, idx) => (
      <SidebarSkeletonItem key={idx} />
    ))}
  </>
);

export default SidebarSkeletonList;
