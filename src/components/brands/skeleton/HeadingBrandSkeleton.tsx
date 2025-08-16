// components/skeletons/HeadingSkeleton.tsx

import Div from "../../ui/Div";

export default function HeadingSkeleton() {
  return (
    <Div className="flex justify-center mt-20">
      <Div className="h-10 w-72 bg-gray-200 animate-pulse rounded"></Div>
    </Div>
  );
}
