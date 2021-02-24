import './App.css';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';

function App() {
  return (
    <div className='App'>
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton>Secondary </SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
    </div>
  );
}

export default App;
