import Div from "../../ui/Div";

// خط واحد
const SkeletonLine = ({ className = "" }: { className?: string }) => (
  <Div
    className={`h-3 w-full rounded animate-pulse bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);

// صورة دائرية
const SkeletonAvatar = ({ size = 64 }: { size?: number }) => (
  <Div
    className="rounded-full animate-pulse bg-gray-200 dark:bg-gray-700"
    style={{ width: size, height: size }}
  />
);

// سكليتون للهيدر
export const UserHeaderSkeleton = () => (
  <Div className="flex flex-col flex-shrink-0 w-full lg:w-1/3">
    {/* صورة واسم وعدد الطلبات */}
    <Div className="flex items-center gap-4 py-8 border-b border-gray-200">
      <SkeletonAvatar size={64} />
      <Div className="flex flex-col gap-2 w-40">
        <SkeletonLine className="h-4 w-32" /> {/* اسم المستخدم */}
        <SkeletonLine className="h-3 w-24" /> {/* عدد الطلبات */}
      </Div>
    </Div>

    {/* البريد الإلكتروني */}
    <Div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <Div className="w-6 h-6 rounded animate-pulse bg-gray-200 dark:bg-gray-700" />
      <SkeletonLine className="h-3 w-40" />
    </Div>
  </Div>
);

// سكليتون لبلوك العنوان
export const AddressCardSkeleton = () => (
  <Div className="flex justify-between items-start w-full border rounded-lg p-4 shadow-sm dark:bg-gray-800">
    <Div className="flex flex-col space-y-3 w-full max-w-xl">
      <SkeletonLine className="h-4 w-28" /> {/* اسم العنوان */}
      <SkeletonLine className="h-3 w-3/4" /> {/* التفاصيل + المدينة */}
      <SkeletonLine className="h-3 w-40" /> {/* رقم الهاتف */}
    </Div>
    <Div className="w-8 h-8 rounded-full animate-pulse bg-gray-200 dark:bg-gray-700" />
  </Div>
);
