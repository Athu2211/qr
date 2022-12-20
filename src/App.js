import './App.css';
import qr from './images/image-qr-code.png';

function App() {
  return (
    <div className='qr-container'>
      <div className='qr-item'>
        <img className='qr-image' alt="qr" src={qr} />
        <div>
          <h4>Improve your front-end skills by building projects</h4>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
