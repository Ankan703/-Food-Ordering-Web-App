import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>MOMO’s Hut</h1>
        <p>Fresh Momos & Snacks</p>

        <button
          onClick={() => (window.location.href = "/menu")}
          style={{ marginTop: "20px" }}
        >
          Order Now
        </button>
      </div>
    </>
  );
}

export default Home;
