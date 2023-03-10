import ProfileCard from "./ProfileCard";
import alexaLogo from './images/Amazon_Alexa_App_Logo.png';
import cortona from './images/cortona.png';
import Siri from './images/Siri.png'
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {

  return (
  <Container>
    <ProfileCard 
      img={alexaLogo}
      description="Amazon Alexa, also known simply as Alexa, is a virtual assistant technology largely based on a Polish speech synthesiser named Ivona, bought by Amazon in 2013."
    />
    <ProfileCard 
      img={cortona}
      description="Cortana is a virtual assistant developed by Microsoft that uses the Bing search engine to perform tasks such as setting reminders and answering questions for the user."
    />
    <ProfileCard 
      img={Siri}
      description="a virtual assistant created by Apple Inc., derives its name from the Scandinavian name Siri, inspired by creator Dag Kittlaus's Norwegian heritage."
    />
  </Container>
  )}

export default App;