import { useState } from 'react';
import Statistic from './components/Statistic';
import FeedbackOptions from './components/Buttons';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const OPTIONS = ['good', 'neutral', 'bad'];
  const feedbackCounter = e => {
    const feedbackValue = e.target.value;

    switch (feedbackValue) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / countTotalFeedback();
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={feedbackCounter} />
      </Section>
      <Section>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={Math.round(countPositiveFeedbackPercentage())}
        />
      </Section>
    </>
  );
}
