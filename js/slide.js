/* SLIDE SHOW SECTION */

var infor_h1 = ["Welcome to our Shop Flycam",
                "Welcome to our Shop Camera",
                "Welcome to our Shop GamePad"]

var infor_p = ["Buy DJI Mavic Mini - Drone FlyCam Quadcopter UAV with 2.7K Camera 3-Axis Gimbal GPS 30min Flight Time, less than 0.55lbs, Gray: Quadcopters & Multirotors ...",
"Shop the best photography equipment, digital cameras, lenses, pro audio & video, professional gear & musical instruments from top brands - Canon, Nikon, ...",
"Customize your SCUF® controller & game like the elite on PS5, PS4, Xbox Series X/S, Xbox One, PC & legacy consoles. Take your gaming to another level with ..."]

var prev = document.querySelector("control_prev");
var next = document.querySelector("control_next");
var getNameH1 = document.getElementById("nameh1");
var getNameP = document.getElementById("nameP");
var getIMG_FEATIRE = document.images['img_feature'];
var getControl_START =document.querySelector("control_start");
var getControl_STOP =document.querySelector("control_stop");
var current = 0;
var num_image = 2;
var timeout; // variable control START AND STOP
function Click_Control_START(){
  switch_Image();
  
}
function Click_Control_STOP(){
  clearTimeout(timeout);
  
}
function switch_Image(){
  current++;
  if(current <=2){
    timeout = setTimeout("switch_Image()", 1000);
    }else if(current >=3){ 
      current = 0;
      timeout= setTimeout("switch_Image()", 1000);
    }
    else if (current <0)
    {
      current = 2;
      timeout= setTimeout("switch_Image()", 1000);
    }
    getNameH1.innerHTML = infor_h1[current];
    getNameP.innerHTML = infor_p[current];
    getIMG_FEATIRE.src ='images/info/image_'+ current + '.png';
    
}
function Click_Control_PREV(){
  current--;
  if(current < 0){
    current = 2;
  }
  getNameH1.innerHTML = infor_h1[current];
  getNameP.innerHTML = infor_p[current];
  getIMG_FEATIRE.src ='images/info/image_'+ current + '.png';
  console.log(current);
}


function Click_Control_NEXT(){
  current++;
  if(current > num_image){
    current = 0;
  }
  getNameH1.innerHTML = infor_h1[current];
  getNameP.innerHTML = infor_p[current];
  getIMG_FEATIRE.src ='images/info/image_'+ current + '.png';
  console.log(current);
}