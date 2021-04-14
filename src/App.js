import FixedTop from './containers/fixed-top/fixed-top'
import StickMenu from './containers/stick-menu/stick-menu'
import AutoImageContainer from './containers/auto-image-container/auto-image-container'
import MessageContainer from './containers/message-container/message-container'

import './App.css';

function App() {
  return (
    <div className="App">
      <FixedTop />
      <StickMenu />
      <AutoImageContainer />
      <MessageContainer />
      <MessageContainer />
      <MessageContainer />
      <MessageContainer />
    </div>
  );
}

export default App;
