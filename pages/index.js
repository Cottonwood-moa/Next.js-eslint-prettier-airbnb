import React from 'react';

const index = () => {
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
      <style jsx>
        {`
          div {
            h1 {
              color: tomato;
            }
          }
        `}
      </style>
    </>
  );
};
export default index;
