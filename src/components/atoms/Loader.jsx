import styled from "styled-components";
// ASSETS
import PlanetLoader from "../../assets/PlanetLoader.gif";

const Image = styled.img`
  height: "auto";
  width: "auto";
`;

const LoaderContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    align-self: center;
    border-radius: 15px;
    overflow: hidden;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Image src={PlanetLoader} alt="planet loader" />
    </LoaderContainer>
  );
};

export default Loader;
