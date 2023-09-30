import "./style.css";
import PlayorPause from "./elements/Button/PausePlay";
const data = [
  {
    id: 1,
    title: "Tutorial React JS Bahasa Indonesia : 18.Custom Hooks",
    url: "https://youtu.be/ajNKk9sIVFY",
  },
];

function App() {
  return (
    <>
      <div className="flex justify-center text-xl font-semibold p-5">
        Youtube Audio Player
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="card w-72 bg-base-100 shadow-xl image-full m-4">
          <figure>
            <img
              src="https://i.ytimg.com/vi/ajNKk9sIVFY/maxresdefault.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>Tutorial React JS Bahasa Indonesia : 18.Custom Hooks</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Play</button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}

function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img
            src="https://i.ytimg.com/vi/_UX8tiVccQQ/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGMgYyhjMA8=&rs=AOn4CLDL4zo4wPsFTHAgWPUqCE_l4ayIvg" // Ganti dengan path gambar Anda
            alt="Music Icon"
            className="rounded-full w-12 h-12 rotate-spin" // Tambahkan animasi putar di sini
          />
        </div>
        <input
          type="text"
          placeholder="Song name"
          className="bg-transparent border-b border-white ml-4 focus:outline-none text-white"
        />
      </div>
      <PlayorPause play={true} />
    </div>
  );
}
export default App;
