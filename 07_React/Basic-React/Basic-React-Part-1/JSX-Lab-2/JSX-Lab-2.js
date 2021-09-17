import React from 'react';
import ReactDOM from 'react-dom';

let Alpha = 'string';
let Bravo = 2;
let Charlie = Boolean;
let Delta = null;
let Echo = undefined;

const obj = {
  key1: Alpha,
  key2: Bravo,
  key3: Charlie,
  key4: Delta,
  key5: Echo,
};
const arr = [Alpha, Bravo, Charlie, Delta, Echo];

const App = () => {
  return (
    <div>
      <h2>JSX-Lab-2</h2>
      <div title='object'>
        <h3>แบบ Object</h3>
        <p>{obj.key1}</p> {/*สามารถแสดง หน้า page ได้*/}
        <p>{obj.key2}</p> {/*สามารถแสดง หน้า page ได้*/}
        <p>{obj.key3}</p>
        {/* ไม่สามารถถ  แสดงบนหน้า page ได้เพราะว่า เป็น boolean*/}
        <p>{obj.key4}</p>
        {/**ไม่สามารถแสดง บนหน้า page ได้เพราะว่า เป็น ค่า null */}
        <p>{obj.key5}</p>
        {/**ไม่สามารถแสดง บนหน้า page ได้เพราะว่า เป็น ค่า undefinde */}
      </div>
      <div title='arr'>
        <h3>แบบ arr</h3>
        {arr.map(item => (
          <p>{item}</p>
          /** สรุป แบบ Object กับ แบบ arr สามารถแสดง dataType string กับ number เท่านั้น */
        ))}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
