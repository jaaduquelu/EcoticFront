import Particles from "react-tsparticles";

const Particulas = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detect_on: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 30,
              duration: 8,
              opacity: 0.8,
              size: 2,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 20,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#00838f",
          },
          links: {
            color: "#00838f",
            distance: 100,
            enable: true,
            opacity: 0.3687847739990702,
            width: 0.6413648243462091,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particulas;
