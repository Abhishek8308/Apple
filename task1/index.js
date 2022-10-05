function slideShow(){
    const arr=['https://www.apple.com/newsroom/images/product/iphone/standard/8plus_and_8_glass_back_big.jpg.large_2x.jpg','https://inventstore.in/wp-content/uploads/2022/09/midnight-watch-se.png','https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large_2x.jpg']

    let i=0;

    let div=document.getElementById('carousel');
    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;

    setInterval(function(){
        if(i==3){
        i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img);
    },2000);
}
slideShow();

