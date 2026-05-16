function removeExtension(name) {
  const lastDotPosition = name.lastIndexOf('.');
  if (lastDotPosition === -1) {
    return name;
  }
  return name.substring(0, lastDotPosition);
}

function HebrewName({ name }) {
  let displayName = removeExtension(name);
  displayName = displayName.replace('-', ' ');

  return <>{displayName}</>;
}

export default HebrewName;
