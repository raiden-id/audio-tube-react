import * as React from "react";
import { useState } from "react";

function PlayorPause(props) {
  const { play } = props;
  const [isPlaying, setIsPlaying] = useState(props.play);

  const togglePause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePause}>
      {" "}
      {isPlaying ? (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="2em"
          width="2em"
        >
          <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="2em"
          width="2em"
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
        </svg>
      )}
    </button>
  );
}

export default PlayorPause;
