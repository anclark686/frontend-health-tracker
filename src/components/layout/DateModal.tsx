import { useState } from 'react';
import Card from 'react-bootstrap/Card';

import leftArrow from '../../assets/icons/arrow-left.png'
import rightArrow from '../../assets/icons/arrow-right.png'

type Props = {
  ChildComponent: () => JSX.Element
}

const DateModal = ({ ChildComponent }: Props) => {
  const [date, setDate] = useState(new Date())
  // const today = new Date();

  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days)
    return result
  }

  const changeDate = (direction: string) => {
    console.log(direction)
    if (direction === "prev") {
      setDate(addDays(date, -1))
    } else if (direction === "next") {
      setDate(addDays(date, 1))
    }
  }
  return (
    <>
      <Card className='date-modal'>
        <Card.Header className='date-modal-header'>
          <button className="direction-button" onClick={() => changeDate("prev")}>
            <img src={leftArrow} alt="left arrow" className='direction-image' />
          </button>
          <h2>{date.toDateString()}</h2>
          <button className="direction-button" onClick={() => changeDate("next")}>
            <img src={rightArrow} alt="right arrow" className='direction-image' />
          </button>
          </Card.Header>
          <Card.Body>
            <h2>Hello</h2>
            <ChildComponent />
          </Card.Body>
      </Card>
    </>
  );
};

export default DateModal;