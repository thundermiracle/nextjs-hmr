import React from 'react';

const styles = {
  fullDiv: {
    background: 'green',
    width: '100%',
    height: 'calc(100vh - 50px)',
  },
};

const Home = (props) => {
  return (
    <div style={styles.fullDiv}>
      <h2> Home </h2>
    </div>
  )
};

export default Home;
