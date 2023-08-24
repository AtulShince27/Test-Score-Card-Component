import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="score-card">
        <div className="result-column">
          <h3>Your Result</h3>
          <div className="result-box">
            <p><span id='total-score'>76</span> of 100</p>
          </div>
          <h2>Great.</h2>
          <p> You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="test-scores-column">
          <h2>Summary</h2>
          <div className='test-score-row' id="reaction-test-score">
            <div className='icons' id='reaction-icon'> </div>
            <span id='reaction-header'>Reaction </span>
            <span className='individual-score'>80 / 100</span>
          </div>
          <div className='test-score-row' id="memory-test-score">
            <div className='icons' id='memory-icon'> </div>
            <span id='memory-header'>Memory</span>
            <span className='individual-score'>92 / 100</span>
          </div>
          <div className='test-score-row' id="verbal-test-score">
            <div className='icons' id='verbal-icon'></div>
            <span id='verbal-header'>Verbal</span> 
            <span className='individual-score'>61 / 100</span>
          </div>
          <div className='test-score-row' id="visual-test-score">
            <div className='icons' id='visual-icon'> </div>
            <span id='visual-header'>Visual</span>
            <span className='individual-score'>72 / 100</span>
          </div>
          <div id="continue-button">
            Continue
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Atul Shince</a>.
      </div>
    </div>
  );
}

export default App;
