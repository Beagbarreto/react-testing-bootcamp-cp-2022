import { AppContainer } from "./App.styles";
// PROVIDERS
import LoaderContextProvider from "./utils/providers/loader";
import SearchContextProvider from "./utils/providers/dateSearchContext";
// COMPONENTS
import MainSection from "./components/organisms/MainSection/MainSection";

function App() {
  return (
    <SearchContextProvider>
      <LoaderContextProvider>
      <AppContainer>
        <MainSection />
      </AppContainer>
      </LoaderContextProvider>
    </SearchContextProvider>
  );
}


export default App;
