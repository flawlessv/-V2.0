import { useDispatch } from "react-redux";
const useSetTime = (dataArr, setStartTime, setEndTime) => {
  const dispatch = useDispatch();
  const startTime = dataArr[0];
  const endTime = dataArr[1];
  dispatch(setStartTime(startTime));
  dispatch(setEndTime(endTime));
};
export default useSetTime;
