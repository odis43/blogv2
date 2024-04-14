export default function ShotGrid() {
  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-16">
      <div className="card h-72 w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            className="overflow-hidden"
            src="https://asset.eyecannndy.com/media/clip/2023/12/23/261703311513.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white card-title">Flash Cut</h2>
        </div>
      </div>

      <div className="card h-72  w-96 bg-base-100 shadow-xl image-full">
        <figure className="object-fill">
          <img
            src="https://asset.eyecannndy.com/media/clip/2024/02/20/261708425207.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white card-title">SnorriCam</h2>
        </div>
      </div>

      <div className="card h-72 w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://asset.eyecannndy.com/media/clip/2024/01/24/261706085822.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white card-title">Close up</h2>
        </div>
      </div>

      <div className="card w-96 h-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://asset.eyecannndy.com/media/clip/2023/12/15/261702684119.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white card-title">Fixed Cam</h2>
        </div>
      </div>
    </div>
  );
}
