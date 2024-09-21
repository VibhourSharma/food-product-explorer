export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative flex flex-col text-gray-400 bg-white shadow-md bg-clip-border rounded-xl w-80 h-[500px] animate-pulse"
        >
          <div className="relative h-56 mx-4 mt-4 bg-gray-200 rounded-xl"></div>
          <div className="flex-grow p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="block w-32 h-5 bg-gray-200 rounded"></div>
              <div className="block w-16 h-5 bg-gray-200 rounded"></div>
            </div>
            <div className="block w-full h-4 mb-1 bg-gray-200 rounded"></div>
            <div className="block w-full h-4 mb-1 bg-gray-200 rounded"></div>
            <div className="block w-full h-4 mb-1 bg-gray-200 rounded"></div>
            <div className="block w-3/4 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="p-6 pt-0">
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
