import React from "react";
import { Video } from "./VideoInterface";
import ReactPlayer from 'react-player';
import {useHistory} from 'react-router-dom';
import * as videoService from './VideoService';
import'./VideoItem.css';
interface Props {
  vid: Video;
  loadVideos: () => void ;
 
}
function VideoItems({ vid, loadVideos }: Props) {

  //access router status internally 
    const history= useHistory();
    
  //call delete request in video service
    const handleDelete= async (id: string)=>{
      await videoService.deleteVideo(id);
      loadVideos();
    }

  return (
    <div className="col-md-4">
      <div className="card card-body video-card " style={{cursor: 'pointer'}} >
        <div className="d-flex justify-content-between">
          
          <h2 onClick={()=> history.push(`/update/${vid._id}`)}> {vid.title}</h2>
          <span className="text-danger" onClick= {()=> vid._id && handleDelete(vid._id)}>X</span>
        </div>
        <p>{vid.description}</p>
       
        
             <ReactPlayer url={vid.url} controls width='100%'
          height='100%' />
        
       
      </div>
    </div>
  );
}

export default VideoItems;
