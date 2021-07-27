import React, { useEffect, useState } from "react";
import { Video } from "./VideoInterface";
import * as videoService from "./VideoService";
import VideoItems from "./VideoItems";

const VideoList = () => {
  //state of videos
  const [videos, setvideos] = useState<Video[]>([]);

  //the main list of get videos
  const loadVideos = async () => {
    const res = await videoService.getVideos();
    //sorting videos by dates
    const formatedV = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setvideos(formatedV);
  };
  useEffect(() => {
    loadVideos();
  }, []);
  return (
    <div className="row">
      {videos.map((vid) => {
        return <VideoItems vid={vid} key={vid._id} loadVideos={loadVideos} />;
      })}
    </div>
  );
};

export default VideoList;
