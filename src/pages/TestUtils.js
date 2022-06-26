import { chunk, compact, difference } from "../utils";
const TestUtils = (props) => {
  const cleanArr = compact([0, 1, false, 2, "", 3]);
  const diff = difference([2, 1, 3, 4], [2, 3, 0, 2]);
  const part = chunk([0, 1, 2, 3, 4, 5, 6], 2);
  console.log(part);
  return (
    <div>
      {cleanArr}
      <br />
      {diff}
      <br />
      {part}
    </div>
  );
};
export default TestUtils;
