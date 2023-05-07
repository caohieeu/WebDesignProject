var btnDetails = document.querySelectorAll('.watch-detail');
for (const btnDetail of btnDetails) {
    btnDetail.addEventListener('click', e => {
        watchDetail(e);
    });
}
function watchDetail(e) {
    var id = e.currentTarget.id;
    localStorage.setItem("id", id);
    var CurrentDetail = document.getElementById(id);
    console.log(CurrentDetail);
    var parent = CurrentDetail.parentElement;
    var imgChild = parent.firstElementChild;
    console.log(imgChild);
    var ImgSrc = imgChild.src;
    console.log(ImgSrc);
    localStorage.setItem("ProductImage", ImgSrc);
}

//display options
var MainImg = document.getElementsByClassName('img-product');
var smallImg = document.getElementsByClassName('img-product-child');

smallImg[0].onclick = function(){
    MainImg[0].src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    MainImg[0].src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    MainImg[0].src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    MainImg[0].src = smallImg[3].src;
}

var ImgSrc = localStorage.getItem('ProductImage');
var MainImge = document.getElementsByClassName('img-product');
var smallImg = document.getElementsByClassName('img-product-child');
var dataProduct;

MainImg[0].src = ImgSrc;

for(i = 0; i < 4;i++){
    var flag = false;
    for(j = ImgSrc.length - 1; j >= 0; j--){
        if(flag == true){
            smallImg[i].src = ImgSrc.substring(0, j + 1) + (i + 1) + ImgSrc.substring(j + 1, ImgSrc.length);
            break;
        }
        else if(ImgSrc[j] == '.'){
            flag = true;
        }
    }
}