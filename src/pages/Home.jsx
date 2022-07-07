import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
  const [tutorials, setTutorials] = useState()
  const url ='https://tutorials-api-cw.herokuapp.com/api/tutorials';
  const getTutorials = async ()=>{
    try {
    const { data } = await axios.get(url)
    setTutorials(data)
    } catch (error) {
    
  }};

  useEffect(() => {
    
    getTutorials();
    
  }, []);

  const addTutorial = (tutorial)=>{


  }
  

  return (
    <>
      <AddTutorial addTutorial={addTutorial}/>
      {/* <TutorialList {...tutorials} /> */}
       <TutorialList tutorials={tutorials} />  
    </>
  );
};


export default Home;
