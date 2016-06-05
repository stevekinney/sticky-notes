export default function getRelativeCoordinates(event, element) {
  return {
    x: event.clientX - element.offsetLeft,
    y: event.clientY - element.offsetTop,
  };
}
