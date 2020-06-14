/*function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
*/
var class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot'];

/* 
function upload() {
	var fileinput = document.getElementById("finput");
	var filename = fileinput.value;
	alert("Chose " + filename);
	var img= new SimpleImage(fileinput);
}
var img1 = new ImageData(1,1); // Image constructor
img1.src = 'image.png';
img1.alt = 'alt';
document.body.appendChild(img1);
*/
var img2 = new Image(); // Use DOM HTMLImageElement
img2.crossOrigin = "anonymous";
//img2.src = 'https://i.imgur.com/z4QGm6b.jpg';
//img2.src = 'https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/sample_image-300x300.png';
img2.src = 'https://i.imgur.com/p3Dc6KQ.jpg';

function preprocess(img) {
	const tensor = tf.browser.fromPixels(img,1); 	
	console.log(tensor.shape); 
	let resized = tf.image.resizeBilinear(tensor,[28,28]).toFloat();
	 resized=tf.expandDims(resized, axis=0)	
	console.log(img.shape);
	return resized;

 
}

async function bruh() {
const model= await tf.loadLayersModel('https://raw.githubusercontent.com/bjhaj/Image-Classifer-Project/master/model/model.json');
const predictions_single = model.predict(preprocess(img2));
console.log((predictions_single));
document.write(predictions_single);
//document.write(class_names[indexOfMax(predictions_single)]);
}
bruh();

