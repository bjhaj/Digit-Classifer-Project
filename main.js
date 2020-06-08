//async function bruh() {
//const model= await tf.loadLayersModel('file:///C:/Users/baazj/Documents/project/imageclassifierproject/model/model.json');
//}

tf.loadLayersModel("model/model.json").then(model => {
    this._model = model;
})
//bruh();
var class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot'];

function upload() {
	var imgcanvas = document.getElementById("can");	
	var fileinput = document.getElementById("finput");
	var filename = fileinput.value;
	alert("Chose " + filename);
	var img= new SimpleImage(fileinput);
	img.drawTo(imgcanvas);
}

function preprocess(img)
{

    //convert the image data to a tensor 
    let tensor = tf.fromPixels(img)
    //resize to 50 X 50
    const resized = tf.image.resizeBilinear(tensor, [50, 50]).toFloat()
    // Normalize the image 
    const offset = tf.scalar(255.0);
    const normalized = tf.scalar(1.0).sub(resized.div(offset));
    //We add a dimension to get a batch shape 
    const batched = normalized.expandDims(0)
    return batched

}

//write the probabbility model using the input from the batch images, then have it display the output, goal for tommorow is to get the percent down, eventually lets get it to produce a graph

//const probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()]);