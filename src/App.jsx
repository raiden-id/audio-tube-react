import "./style.css";
import { useEffect, useState, useRef } from "react";
//import PlaySong from "./components/Fragments/PlaySong";
import { searchServices } from "./services/search.services";
import { getRawAudio } from "./services/getrawaudio.services";

function App() {
  const [results, setResults] = useState([]);
  const [contentaudio, setContentAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handelSearch = (e) => {
    e.preventDefault();
    const data = e.target.value;
    if (data === "") {
      setResults([]);
      return;
    }
    if (data.length > 3) {
      searchServices(data, (res) => {
        setResults(res);
      });
    }
  };

  const handelPlay = (v) => {
    getRawAudio(v, (res) => {
      setContentAudio(res);
      setIsPlaying(true);
      initAudio();
    });
  };

  let initAudio = () => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex justify-center text-xl font-semibold p-5">
        Youtube Audio Player
      </div>
      <div className="flex flex-wrap justify-center">
        {results.length > 0 &&
          results.map((items, index) => (
            <div
              className="card w-72 bg-base-100 shadow-xl image-full m-4 "
              key={index}
            >
              <figure>
                <img
                  src={`https://i.ytimg.com/vi/${items.v}/maxresdefault.jpg`}
                  alt="img"
                />
              </figure>
              <div className="card-body">
                <p>{items.t}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handelPlay(items.v)}
                    className="btn btn-primary-lg"
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* handel search  */}
      <div className="fixed  bottom-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
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
        {/* handel audio play */}
        <button onClick={initAudio}>
          {isPlaying ? (
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z" />
            </svg>
          )}
        </button>
        <audio ref={audioRef}>
          <source src={contentaudio}></source>
        </audio>
      </div>
    </>
  );
}

export default App;
