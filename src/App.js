import FixedTop from './containers/fixed-top/fixed-top.container'
import StickMenu from './containers/stick-menu/stick-menu.container'
import TopImageContainer from './containers/top-image-container/top-image-container'
import Jobs from './containers/jobs/jobs.container'
import MessageContainer from './containers/message-container/message-container'
import AutoPlayBanner from './components/auto-banner/auto-banner'
import StepByStep from './containers/step-by-step/step-by-step.component'
import OurHistory from './containers/our-history/our-history.container'
import ContactForm from './containers/contact-form/contact-form.container'

import './App.css';

function App() {
  return (
    <div className="App">
      <FixedTop />
      <StickMenu />
      <TopImageContainer />
      <MessageContainer />
      <AutoPlayBanner />
      <Jobs />
      <StepByStep />
      <OurHistory />
      <ContactForm />
    </div>
  );
}

export default App;
