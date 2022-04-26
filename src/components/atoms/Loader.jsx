import { useTranslation } from "react-i18next";
import styled from "styled-components";
// ASSETS
//import loader from "../../assets/images/loader.gif";
// UI
import { Image } from "../atoms";

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
  }
`;

const Loader = () => {
  const { t } = useTranslation();

  return (
    <LoaderContainer>
      <Image src={loader} alt={t("loader")} />
    </LoaderContainer>
  );
};

export default Loader;
