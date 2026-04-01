export default function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-white"></div>

        {/* Text */}
        <p className="text-gray-300 text-sm tracking-widest">
          Loading your experience..
        </p>
      </div>
    </div>
  );
}
