import styled from "styled-components";
import ConfigDark from "../../config/particlesjs-config.json";
import ConfigOther from "../../config/particlesjs-config-other.json";
import ConfigStar from "../../config/particlesjs-config-star.json";
import ConfigLight from "../../config/particlesjs-config-light.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
const ParticlesComponent = (props) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={
          props.theme === "light"
            ? ConfigLight
            : props.theme === "dark"
            ? ConfigDark
            : props.theme === "other"
            ? ConfigOther
            : props.theme === "star"
            ? ConfigStar
            : console.log("Theme?")
        }
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;
