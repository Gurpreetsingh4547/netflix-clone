// Action Types
import GetFAkeJosnData from '../const';

// Fake json api data
import MoviesData from '../../movies';

const CallFakeJsonData = () => ({
  type: GetFAkeJosnData,
  payload: MoviesData,
});

export default CallFakeJsonData;
