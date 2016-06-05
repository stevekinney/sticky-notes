import getRelativeCoordinates from './get-relative-coordinates';

export default function startMoving(event) {
  cleanupExistingListeners.call(this);

  this.setState({ moving: true });
  this._initialPosition = getRelativeCoordinates(event, this._element);
  this._dragElement = dragElement.bind(this);
  this._stopMoving = stopMoving.bind(this);

  document.addEventListener('mousemove', this._dragElement);
  document.addEventListener('mouseup', this._stopMoving);
}

export function dragElement(event) {
  const furthestRight = window.innerWidth - this.props.width;
  const furthestDown = window.innerHeight - this.props.height;

  let x = event.pageX - this._initialPosition.x;
  let y = event.pageY - this._initialPosition.y;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > furthestRight) x = furthestRight;
  if (y > furthestDown) y = furthestDown;

  this.props.handleChange({ x, y });
}

export function stopMoving() {
  this.setState({ moving: false });
  document.removeEventListener('mousemove', this._dragElement);
  document.removeEventListener('mouseup', this._stopMoving);
}

function cleanupExistingListeners() {
  if (this._stopMoving) this._stopMoving();
}
