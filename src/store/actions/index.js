// Action Types
import GetFAkeJosnData from '../const';

// Fake json api data
import MoviesData from '../../FakeApiJsonData';

/**
 * action to get json data from fake api josn data
 * @returns action type and Payload
 */
const CallFakeJsonData = () => ({
  type: GetFAkeJosnData,
  payload: MoviesData,
});

export default CallFakeJsonData;
