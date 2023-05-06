import PropTypes from 'prop-types';
import { Button, Section } from './feedbackChoice.styled';

export const FeedbackChoice = ({ options, onLeaveFeedback }) =>
  options.map(name => (
    <Button type="button" name={name} key={name} onClick={onLeaveFeedback}>
      {name}
    </Button>
  ));

FeedbackChoice.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
