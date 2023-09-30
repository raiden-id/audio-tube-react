import "./style.css";
import { useEffect, useState } from "react";
import PlaySong from "./components/Fragments/PlaySong";
import {searchServices} from "./services/search.services";

function App() {
  const [results, setResults] = useState([]);

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
              alt="img"
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
  const handelSearch = (e) => {
    e.preventDefault();
    const data = e.target.value;
    console.log(data)
    if (data.length > 3) {
      searchServices(data, (res) => {
        console.log(res);
      });
    }
  };

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
          placeholder="Song name / url video"
          onChange={handelSearch}
          className="bg-transparent border-b border-white ml-4 focus:outline-none text-white"
        />
      </div>
      <PlaySong
        url="https://dl154.dlmate18.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ1VsTlFqeXhrd0ZlQnJwNEV1d3ErVE04eEtLdXc2M2NIcEk5dEM4Q3phUDkyYlkwbVB2NVFqZldPQTQ5NWcvRzNwNm9FMVRkeHpVMU9xdmV1enhYUWtyd093TFA3a0RaNWlUSEUydFdkQittaWUzS0tTdmhEMzdsU0o0VWliZkMwWXR5OENNUENOb01rUmd6bVROcWUxaHRZV3BEeWF2ODhiamFURTRGbWpoYUVvNWRoM0NBPT0%3D"
        play={true}
      />
    </div>
  );
}
export default App;
