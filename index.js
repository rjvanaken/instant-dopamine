{/* place your images in this array */}

var random_images_array = ['dog-cat-1.jpg', 'dog-cat-2.jpg'];
    
function getRandomImage(imgAr, path) {
    path = path || 'images/';
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}


{/* random image code above (with some edits) from https://www.dyn-web.com/code/random-image-js/ */}
