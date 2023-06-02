import { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const runObjectDetection = async () => {
      const video = videoRef.current;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      video.srcObject = stream;
      await video.play();

      const model = await cocoSsd.load();
      setInterval(async () => {
        const predictions = await model.detect(video);
        setPredictions(predictions);
      }, 1000);
    };

    runObjectDetection();
  }, []);

  return (
    <div className="flex justify-center">
      <video ref={videoRef} className="w-full max-w-md" />
      <div className="absolute top-0 left-0 p-4 bg-white">
        {predictions.map((prediction, index) => (
          <div key={index}>
            <p className="text-lg font-bold">{prediction.class}</p>
            <p>Confidence: {Math.round(prediction.score * 100)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectDetection;