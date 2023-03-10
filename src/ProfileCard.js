import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  margin-right: 10px; /* Add some spacing between the cards */
  margin-bottom: 10px; /* Add some spacing between the rows */
  flex-basis: 30%; /* This property will set the initial width of the cards */
  flex-grow: 1; /* This property will allow the cards to grow and shrink to fit the available space */
  max-width: 20%; 
  height: 400px;
`;

const  StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  max-height: 50%;
`;

const ProfileCard = (props) => {

  return <>
    <StyledCard>
      <StyledImg src={props.img} />
      <p>{props.description}</p>
    </StyledCard>
  </>

}

export default ProfileCard;