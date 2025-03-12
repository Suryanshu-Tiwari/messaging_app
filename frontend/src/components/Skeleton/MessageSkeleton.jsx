const MessageSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-3 w-28"></div>
          <div className="skeleton h-3 w-14"></div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-end">
        <div className="flex flex-col gap-2">
          <div className="skeleton h-3 w-28 "></div>
          <div className="skeleton h-3 w-14 "></div>
        </div>
        <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
      </div>
    </>
  )
}
export default MessageSkeleton;
