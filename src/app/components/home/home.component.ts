import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})


export class HomeComponent implements OnInit {

 videos:any[]=[];
 videoSel:any;
  constructor(public _ys: YoutubeService) { 
    


          this._ys.getVideos()
                .subscribe(data=>{
                  console.log(data);
                this.videos=data;
                });

  }

  cargarMas(){
    this._ys.getVideos()
            .subscribe(data=>this.videos=data)
  }
 verVideo(video:any){

  this.videoSel=video;
  $('#myModal').modal();
 }

  cerrarVideo(){
    this.videoSel = null;
    $('#myModal').modal('hide');
  }
  ngOnInit() {
  }

}
