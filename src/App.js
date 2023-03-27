import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: ${({ background }) => background ? background : '#4CAF50'};
  color: ${({ color }) => color ? color : '#fff'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 8px;
  
  &:hover {
    background-color: #3e8e41;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
`;

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const pageLimit = 5;
  const totalPages = Math.ceil(data.length/pageLimit);


  const loadUsersData = async () => {
    return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setData(response.data))
    .catch(err => console.log(err));
  };

  useEffect(() => {
    loadUsersData();
  }, [])

  useEffect(() => {
    let start = (currentPage - 1) * pageLimit;
    let end = start + pageLimit;
    setCurrentPageData(data.slice(start,end));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentPage])

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
  <Container>
    {currentPageData.map(({title,body}) => (
      <>
      <p> Title:  {title} </p>
      <p> Body: {body} </p>
      </>
    ))}
    <Wrapper>
      {
        Array.from(Array(totalPages).keys()).map(pageNumber =>
          <Button onClick={() => handlePageClick(pageNumber + 1)}>
            {pageNumber + 1}
          </Button>
          )
      }
  </Wrapper>
  </Container>
  )}

export default App;