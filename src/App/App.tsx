import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import TabsPanel from "../TabsPanel/TabsPanel";

const Root = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #0c0d71;
  padding: 20px 10px 10px;
  box-sizing: border-box;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  margin-top: 2rem;
`
const App:React.FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getCities();
  //     console.log(response);
  //   }
  //   fetchData();
  // })

  return (
    <Root>
      <Title>My Movie Database</Title>
      <TabsPanel selectedTab={selectedTabIndex} selectTabCallback={setSelectedTabIndex}/>
    </Root>

  )
}

export default App