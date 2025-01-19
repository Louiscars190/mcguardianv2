export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-tabqrwso62/commutes/zemm/commutes.html"
        className="w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
