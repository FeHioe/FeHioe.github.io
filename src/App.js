import './App.css';

function App() {
  return (
    <div className="App">
      <div className="name-card">
          <h1>FELICIA HIOE</h1>
          <div className="info">        
            <p> Full Stack Developer</p>
            &bull;
            <p> fe.hioe@gmail.com</p>
            &bull;
            <p> Toronto, Ontario, Canada</p>
          </div>
      </div>
        <ul className="menu">
          <li><a>About</a></li>
          <li><a href="https://drive.google.com/file/d/1UMLWERmtqSIIPW90i-GZprmDOVz0Iw9a/view?usp=sharing" target="_blank">Resume</a></li>
          <li><a>Projects</a></li>
          <li><a href="https://github.com/FeHioe" target="_blank">Github</a></li>
        </ul>
    </div>
  );
}

export default App;
