import { FramePlayer } from "./component/FramePlayer";
import { frames } from "./mock";

const App = () => <FramePlayer frames={frames} fps={0.2} />;

export default App;
