import ImageCarousel from "./components/ImageCarousel";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Image Carousel
      </h1>

      <ImageCarousel images={images} />
    </div>
  );
}

export default App;
