import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Typewriter
        options={{
          strings: [
            "Aeri Jung",
            "I do Front-end",
            "also Back-end",
            "so ...",
            "I do Full-Stack!",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
}

export default Home;
