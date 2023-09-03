import logo from './logo.svg';
import './App.css';
import clouds from './img/clouds.jpeg';
import logos from './img/logo.png';
import designs from './img/design.jpg';
import comm from './img/comm.png';
import knowledge from './img/knowledge.png';
import schedule from './img/schedule.png';



function App() {
  return (
    <div className="App">
      {/* Top Bar */}
      <div className="Bar">
        <img style = {{height: '4vh', position: 'absolute', left: '3vw'}} src={logos}/>
        <nav className="hori">
            <a className="column">Home</a>
            <a href = "#3" className="column">Contact</a>
            <a className="column">FAQ</a>
        </nav>
          <a href = "#2" className="AboutB">About</a>
      </div>
      {/* Big cloud and mission statement in the middle */}
      <div id = '1' className="clouds">
        <div className="mission"> Empowering Students, Building Community, Inspiring Growth</div>
      </div>
      {/* About us */}
      <div id = '2' className="AboutUs" >
        <div className="hori" style = {{alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="vert" >
            <p className = 'titles abt'><u>About Us</u></p>
            <div className = 'paragraphs' style = {{paddingLeft: '4vw', marginBottom: '12vh'}}>We are on a mission to connect college students through 
              innovative technology, fostering a supportive community, 
              and enhancing academic success.</div>
          </div>
          <img src= {designs} style = {{height: '100vh', marginLeft: '-10vw'}}alt="" />
        </div>
      </div>
      {/* Why Choose Us? */}
      <div className="Choose">
        <div className="vert">
          <p className = 'titles' style = {{color: 'white',paddingTop: '2vh', fontSize: '4vh'}}><u>Why Choose Us?</u></p>
          <div className="hori choose">
            {/* Scheduler Box */}
            <div className="box">
              <div className="vert box">
                <img src={schedule} style = {{width: '13vh',height: '13vh'}}alt="" />
                <p className = 'boxT'>Scheduler</p>
                <div style = {{width: '210px', textAlign: 'left'}}>Provides dedicated course scheduler. Courses are 
                  imported from Penn State Database</div>
              </div>
            </div>
            {/* Community Box */}
            <div className="box">
              <div className="vert box">
                <img src={comm}style = {{width: '13vh',height: '13vh'}}  alt="" />
                <p className = "boxT">Community</p>
                <div style = {{width: '210px', textAlign: 'left'}}>Countless communities based on one’s academic needs. </div>
              </div>
            </div>
            {/* Academic Box */}
            <div className="box">
              <div className="vert box">
                <img src={knowledge} style = {{width: '13vh',height: '13vh'}} alt="" />
                <p className = "boxT">Academic</p>
                <div style = {{width: '210px', textAlign: 'left'}}>Only students with .edu email will be able to access the app. </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div id = '3' className="contact">
        <div className="hori infor">
          <div className="vert inf">
            <div style = {{fontSize: '3vh', width: '600px', textAlign: 'left', fontWeight: 'bold', marginRight: '30vh'}}>Feel free to contact us any time. We will get back to you 
              as soon as we can!</div>
              <div className="info">
                <p className = 'b'>Name</p>
                <div className="line"/>
                <p className = 'b'>Email</p>
                <div className="line"/>
                <p className = 'b'>Message</p>
                <div className="line"/>
                <button style = {{height: '8vh', width: '20vw',borderRadius: '20px', fontSize: '2vh', fontWeight: '500', alignSelf: 'center', marginTop: '2vh', cursor: 'pointer'}}>Send
                </button>
              </div>
            </div>
            
          <div className = "titles contac"><u>Contact Us</u></div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="vert" style = {{alignItems: 'center', justifyContent: 'space-evenly'}}>
          <div className="hori" style = {{alignItems: 'center', justifyContent: 'space-evenly', width: '40vw', marginTop: '6vh'}}>
          <a href = "#1" className="column bottom">Home</a>
          <a href = "#3" className="column bottom">Contact</a>
          <a href = "#1" className="column bottom">FAQ</a>
          <a href = "#2" className="column bottom">About</a>
          </div>
          <p style = {{color: 'white', marginTop: '5vh', width: '230px'}}>Built and Designed by COLI All rights reserved. ©</p>
        </div>
        
      </div>

    </div>
  );
}

export default App;
