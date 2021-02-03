import React from 'react';

function HebrewName (props) {

  let name = props.name;

  name = removeExtension(name); // remove file extension
  //  name = name.replace(/[0-9]/g, '');
  name = name.replace('-', ' '); // remove kebab case

  return (
    <React.Fragment>
      {name}
    </React.Fragment>
  )
}


function removeExtension(name){
  const lastDotPosition = name.lastIndexOf('.');
  if (lastDotPosition === -1) {
    return name;
  }
  return name.substr(0, lastDotPosition);
}

export default HebrewName;
