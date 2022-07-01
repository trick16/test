import * as array from "../utils";
const TestUtils = (props) => {
  const cleanArr = array.compact([0, 1, false, 2, "", 3]);
  const diff = array.difference([2, 1, 3, 4], [2, 3, 0, 2]);
  const part = array.chunk([0, 1, 2, 3, 4, 5, 6], 3);
  const flat = array.flatten([1, [2, [3, [4]], 5]]);

  console.log(array.drop([1, 2, 3], 2));

  return (
    <div>
      {cleanArr}
      <br />
      {diff}
      <br />
      {part}
      <br />
      {flat}
    </div>
  );
};
export default TestUtils;
