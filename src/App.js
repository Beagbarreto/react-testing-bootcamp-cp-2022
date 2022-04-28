import { AppContainer } from "./App.styles";
import LoaderContextProvider from "./utils/providers/loader";
import MainSection from "./components/organisms/MainSection/MainSection";

function App() {
  return (
    <LoaderContextProvider>
    <AppContainer>
      <MainSection />
    </AppContainer>
    </LoaderContextProvider>
  );
}


export default App;


// import { AppContainer } from "./App.styles";
// import SearchContextProvider from "./providers/dateSearchContext";

// // COMPONENTS
// import MainSection from "./components/organisms/MainSection/MainSection";

// function App() {
//   return (
//     <SearchContextProvider>
//       <LoaderContextProvider>
//         <AppContainer>
//           <MainSection />
//         </AppContainer>
//       </LoaderContextProvider>
//     </SearchContextProvider>
//   );
// }
