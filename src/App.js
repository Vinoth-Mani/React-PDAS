import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortonaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {

    // const ti="ChatGPT-3"
    // const ha="@ChatGPT-3"
  return (
    <div >
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    Personal Digital Assistant
                </p>
                <p className="subtitle">
                    Alexa, Cortona, Siri
                </p>
            </div>
        </section>
        {/* <img src={AlexaImg} alt="Alexa" />
        <img src={CortonaImg} alt="Cortona" />
        <img src={SiriImg} alt="Siri" /> */}

        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-3'>
                              <ProfileCard title="Alexa" handle="@Alexa" image={AlexaImg} description="Alexa is by Amazon"/>
                    </div>  
                      <div className='column is-3'>
                              <ProfileCard title="Cortana" handle="@Cortana" image={CortonaImg} description="Cotana is by Microsoft"/>
                    </div>    
                    <div className='column is-3'>
                            <ProfileCard title="Siri" handle="@Siri" image={SiriImg} description="Siri is by Apple"/>
                    </div>
                    </div>
                    </section>
                    </div>




    </div>
  );
}

export default App;