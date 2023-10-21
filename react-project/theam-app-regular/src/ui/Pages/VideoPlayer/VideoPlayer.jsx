import React from "react";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";
import { Player } from "video-react";
export default function VideoPlayer() {
  const opts = {
    height: "100",
    width: "250",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="d-flex">
        <div>
          <YouTube videoId="MPlo3SEcBw8?si=avWX14fUSZqZe0TJ" />
        </div>
        <div>
          {[
            "MPlo3SEcBw8",
            "GeQOQsLXEnY?si=fzDROFFPSbNWtMNV",
            "6mRo4q0sDyY?si=BLZLcMJpZkMPC_qH",
            "MPlo3SEcBw8",
            "GeQOQsLXEnY?si=fzDROFFPSbNWtMNV",
            "6mRo4q0sDyY?si=BLZLcMJpZkMPC_qH",
            "MPlo3SEcBw8",
            "GeQOQsLXEnY?si=fzDROFFPSbNWtMNV",
            "6mRo4q0sDyY?si=BLZLcMJpZkMPC_qH",
            "MPlo3SEcBw8",
            "GeQOQsLXEnY?si=fzDROFFPSbNWtMNV",
            "6mRo4q0sDyY?si=BLZLcMJpZkMPC_qH",
          ].map((e) => (
            <YouTube opts={opts} videoId={e} />
          ))}
        </div>
      </div>
    </>
  );
}
// export default function VideoPlayer() {
//   return (
//     <>
//       <div>
//         <Player>
//           <source src="https://youtu.be/W7kdKf_aqX4?si=xkcuu4uYurLeNhvh" />
//         </Player>
//       </div>
//     </>
//   );
// }
// export default function VideoPlayer() {
//   return (
//     <>
//       <ReactPlayer
//         url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
//         controls={true}
//       />
//       ;
//     </>
//   );
// }
