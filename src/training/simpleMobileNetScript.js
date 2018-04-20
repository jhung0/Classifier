import * as tf from '@tensorflow/tfjs';

//console.log(model)
const LEARNING_RATE = 0.15;
const optimizer = tf.train.sgd(LEARNING_RATE);
// How many examples the model should "see" before making a parameter update.
const BATCH_SIZE = 64;
// How many batches to train the model for.
const TRAIN_BATCHES = 100;

// Every TEST_ITERATION_FREQUENCY batches, test accuracy over TEST_BATCH_SIZE examples.
// Ideally, we'd compute accuracy over the whole test set, but for performance
// reasons we'll use a subset.
const TEST_BATCH_SIZE = 1000;
const TEST_ITERATION_FREQUENCY = 5;
  
async function loadNetwork(num_classes) {
    //get Prelaoded model of MobileNet
    const preLoadedmodel = await tf.loadModel("https://raw.githubusercontent.com/cytoai/models/master/MobileNetJS/model.json");
    
    //get some intermediate layer
    const layer = preLoadedmodel.getLayer('conv_pw_8_relu');
    
    tmpModel = tf.model({inputs: preLoadedmodel.inputs, outputs: layer.output});
    
    for(i = 0; i<tmpModel.layers.length; i++){
        tmpModel.layers[i].trainable = false;
    }
    
    //create denselayer for class prediction
    const dense = tf.layers.dense({
      units: num_classes,
      kernelInitializer: 'VarianceScaling',
      activation: 'softmax'
    });
    //apply the layers
    const output = dense.apply(tmpModel.outputs)
    
    //create the model
    const model = tf.model({inputs: preLoadedmodel.inputs, outputs: output});	
    //compile the model
    model.compile({
      optimizer: optimizer,
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });
    
    return model;
}
async function train(model, imagewidth, imageheight){
    for (let i = 0; i < TRAIN_BATCHES; i++) {
        // TODO: Change function for getting trainign batch
      const batch = data.nextTrainBatch(BATCH_SIZE);
     
      let testBatch;
      let validationData;
      // Every few batches test the accuracy of the mode.
      if (i % TEST_ITERATION_FREQUENCY === 0) {
        //TODO: get a new function to get validation batch
        testBatch = data.nextTestBatch(TEST_BATCH_SIZE);
        validationData = [
          testBatch.xs.reshape([TEST_BATCH_SIZE, imagewidth, imageheight, 1]), testBatch.labels
        ];
      }
     
      // The entire dataset doesn't fit into memory so we call fit repeatedly
      // with batches.
      const history = await model.fit(
          batch.xs.reshape([BATCH_SIZE, imagewidth, imageheight, 1]),
          batch.labels,
          {
            batchSize: BATCH_SIZE,
            validationData,
            epochs: 1
          });

      const loss = history.history.loss[0];
      const accuracy = history.history.acc[0];

      // ... plotting code ...
    }
}	
    
async function run() {
  
  const model = await loadNetwork(10);
  console.log(model);
  //await train(model,28,28);
  
  
}

// Initialize the application.
run();	