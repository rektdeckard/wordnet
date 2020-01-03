import React from 'react';
import NetworkGraph from 'react-native-network-graph';
import data from './data/sampleData';

const NetworkView = () => {
  const [selectedCircleIndex, setSelectedCircleIndex] = useState(0);
  
  const onCircleClick = index => {
    //or an action can be dispatched as well.
    setSelectedCircleIndex(index);
  };

  let connections = {
    '1': [2, 4], //node at index 1 is connected to nodes at index 2 and 4 respectively.
    '2': [6, 7], //node at index 2 is connected to nodes at index 6 and 7 respectively.
  };
  let circleTitles = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'];

  return (
    <NetworkGraph
      selectedCircleIndex={selectedCircleIndex} //so that clicks on the circles reflect results in real time.
      circleTitles={circleTitles}
      connections={connections}
      containerHeight={300}
      containerWidth={300}
      centralCircleRadius={30}
      otherCircleLinesColor="black"
      otherCirclesRadius={20}
      distanceFromCenter={100}
      onCircleClick={onCircleClick}
    />
  );
};

export default NetworkGraph;
