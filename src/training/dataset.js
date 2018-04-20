import * as tf from '@tensorflow/tfjs';


var VALIDATIONSET_RATIO = 0.3;


class Dataset {

    constructor(){
        this.trainingSet = [];
        this.validationSet = [];
        this.predictionSet = [];
    }

    loadFromArray(imDataArray){
        // function to split into training, validation and prediction set
        if(imDataArray == null) {
            throw('Empty Image Data Array given.');
            return;
        }
        var labeledImages = {};

        for (var currentImage of imDataArray) {

            if(currentImage.catId == null) {
                this.predictionSet.push(currentImage);
            } else {
                var currentLabelID = currentImage.catId;
                if(currentLabelID in labeledImages) {
                    labeledImages[currentLabelID].push(currentImage);
                } else {
                    labeledImages[currentLabelID] = [currentImage];
                }
            }
        }

        for(var labelId in labeledImages) {
            // At least 1 element
            var numSamplesValidation = Math.max(1, Math.round(labeledImages[labelId].length * VALIDATIONSET_RATIO));
            var validationIndices = tf.util.createShuffledIndices(numSamplesValidation);
            
            for(var i=0; i < labeledImages[labelId].length; i++) {
                if(i in validationIndices) {
                    this.validationSet.push(labeledImages[labelId][i]);
                } else {
                    this.trainingSet.push(labeledImages[labelId][i]);
                }
            }
        }

        console.log("Training Set n_t= ", this.trainingSet.length, " Elements: ", this.trainingSet);
        console.log("Validation Set n_v= ", this.validationSet.length, " Elements: ", this.validationSet);
        console.log("Prediction Set n_p= ", this.predictionSet.length, " Elements: ", this.predictionSet);
    }

    nextTrainBatch(batchSize) {
        var batchXY = this.nextRandomBatch(batchSize, this.trainingSet);
    }

    nextValidationBatch(batchSize) {
        var batchXY = this.nextRandomBatch(batchSize, this.validationSet);
    }

    nextRandomBatch(batchSize, datasetList) {
        var shuffledIndices = tf.util.createShuffledIndices(datasetList.length);
        var batchXY = [];
        for (var i=0; i < batchSize; i++) {
            batchXY.push(datasetList[shuffledIndices[i]]);
        }
        return batchXY;
    }


}

export {Dataset}