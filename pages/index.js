import ObjectDetection from '../components/ObjectDetection';

const Home = () => {
  return (
    <div className="mx-auto p-4 flex justify-center">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black py-10">Object Detector 📷 👁️</h1>
        <ObjectDetection />
      </div>
    </div>
  );
};

export default Home;