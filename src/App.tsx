import Container from "./components/Container";
import GeneratedText from "./components/GeneratedText";
import Timer from "./components/Timer";
import UserInputs from "./components/UserInputs";

const words =
  "Life is a continuous journey of growth, shaped by the challenges we face and the choices we make. Every setback we encounter holds a lesson, often disguised as failure or disappointment. Yet, these moments are not endpoints but opportunities to learn, adapt, and strengthen our resolve. True resilience doesn’t mean avoiding pain or difficulty; rather, it is the ability to confront adversity with courage and use it as a stepping stone toward personal development.";

function App() {
  return (
    <>
      <Timer />
      <Container>
        <GeneratedText words={words} />
        <UserInputs words={words} />
      </Container>
      <h1 className="text-amber-400">Hello world!</h1>
    </>
  );
}

export default App;
