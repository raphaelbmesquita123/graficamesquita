import FixedTop from './containers/fixed-top/fixed-top.container'
import StickMenu from './containers/stick-menu/stick-menu.container'
import AutoImageContainer from './containers/auto-image-container/auto-image-container'
import Jobs from './containers/jobs/jobs.container'
import MessageContainer from './containers/message-container/message-container'
import ContactForm from './containers/contact-form/contact-form.container'

import './App.css';

function App() {
  return (
    <div className="App">
      <FixedTop />
      <StickMenu />
      <AutoImageContainer />
      <MessageContainer />
      <Jobs />
      <ContactForm />
    </div>
  );
}

export default App;
