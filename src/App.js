import './App.css';
import Star from './components/Star/Star'
import Question from './components/Question/Question'
import Text from './components/Text/Text'
import Buttons from './components/Buttons/Buttons';
import Submit from './components/Submit/Submit';
import Image from './components/Image/Image';
import Choice from './components/Choice/Choice';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(true)
  const [selectNum, setSelectNum] = useState(0)

  return (
    <div className="container">
      {currentPage ? 
        <div className="main-page__content">
          <Star />
          <Question>How did we do?</Question>
          <Text className="text__inner">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text> 
          <Buttons setSelectNum={setSelectNum} />
          <Submit selectNum={selectNum} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
        : 
        <div className="second-page__content">
          <Image />   
          <Choice selectNum={selectNum} />  
          <Question>Thank you!</Question>
          <Text className="second-page__text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</Text>  
        </div>
        }
    </div>
  );
}

export default App;
