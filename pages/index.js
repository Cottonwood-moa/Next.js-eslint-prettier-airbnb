import React from 'react';

const index = () => {
  return (
    <>
      <div className="container">
        <h1 className="hello">Hello</h1>
      </div>
      <style jsx>
        {`
          .container {
            .hello {
              color: red;
            }
          }
        `}
      </style>
    </>
  );
};
export default index;
