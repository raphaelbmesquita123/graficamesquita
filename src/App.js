import { 
  Clients, 
  ContactForm, 
  OurHistory, 
  StepByStep, 
  AutoPlayBanner, 
  MessageContainer, 
  Jobs, 
  TopImageContainer, 
  StickyMenu, 
  FixedTop
} from './containers'

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <FixedTop />
      <StickyMenu />
      <TopImageContainer />
      <MessageContainer />
      <Jobs />
      <AutoPlayBanner />
      <StepByStep />
      <OurHistory />
      <Clients />
      <ContactForm />
    </div>
  );
}

export default App;
