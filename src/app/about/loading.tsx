export default function Loading() {
  return <PictureLoading />
}

const PictureLoading = () => {

  return (
    <span className="h-56 w-full loading loading-spinner loading-lg"></span>
  );
}
