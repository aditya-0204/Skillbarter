/**
 * A simple JSX pragma function (like React.createElement).
 * It creates an HTML element and sets its properties.
 * @param {string | Function} type - The HTML tag name or a component function.
 * @param {object} props - The element's attributes (e.g., { className: 'card' }).
 * @param  {...any} children - The child elements.
 */
export function h(type, props, ...children) {
  const el = document.createElement(type);
  
  if (props) {
    for (const key in props) {
      const value = props[key];
      if (key === 'className') {
        el.setAttribute('class', value);
      } else if (key.startsWith('on') && typeof value === 'function') {
        el.addEventListener(key.substring(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  children.flat().forEach(child => {
    if (child instanceof Node) {
      el.appendChild(child);
    } else {
      el.appendChild(document.createTextNode(String(child)));
    }
  });

  return el;
}

/**
 * A simple JSX Fragment function.
 * It creates a DocumentFragment to hold multiple elements without a parent wrapper.
 */
export function Fragment({ children }) {
  const fragment = document.createDocumentFragment();
  children.flat().forEach(child => {
    if (child instanceof Node) {
      fragment.appendChild(child);
    } else {
      fragment.appendChild(document.createTextNode(String(child)));
    }
  });
  return fragment;
}