/* eslint-disable no-param-reassign */
export function setDarkmode() {
  const allElement = document.querySelectorAll(
    'body *:not(.reverse):not(.fixed)',
  ) as NodeListOf<HTMLElement>;
  allElement.forEach((element) => {
    const { color, backgroundColor } = window.getComputedStyle(element);
    if (color === 'rgb(248, 249, 250)') {
      element.style.color = '#212529';
      if (backgroundColor === 'rgb(33, 37, 41)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#f8f9fa';
      }
    } else if (color === 'rgb(241, 243, 245)') {
      element.style.color = '#343a40';
      if (backgroundColor === 'rgb(52, 58, 64)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#f1f3f5';
      }
    } else if (color === 'rgb(233, 236, 239)') {
      element.style.color = '#495057';
      if (backgroundColor === 'rgb(73, 80, 87)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#e9ecef';
      }
    } else if (color === 'rgb(222, 226, 230)') {
      element.style.color = '#868e96';
      if (backgroundColor === 'rgb(134, 142, 150)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#dee2e6';
      }
    } else if (color === 'rgb(206, 212, 218)') {
      element.style.color = '#adb5bd';
      if (backgroundColor === 'rgb(173, 181, 189)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#ced4da';
      }
    } else if (color === 'rgb(173, 181, 189)') {
      element.style.color = '#ced4da';
      if (backgroundColor === 'rgb(206, 212, 218)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#adb5bd';
      }
    } else if (color === 'rgb(134, 142, 150)') {
      element.style.color = '#dee2e6';
      if (backgroundColor === 'rgb(222, 226, 230)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#868e96';
      }
    } else if (color === 'rgb(73, 80, 87)') {
      element.style.color = '#e9ecef';
      if (backgroundColor === 'rgb(233, 236, 239)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#495057';
      }
    } else if (color === 'rgb(52, 58, 64)') {
      element.style.color = '#f1f3f5';
      if (backgroundColor === 'rgb(241, 243, 245)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#343a40';
      }
    } else if (color === 'rgb(33, 37, 41)') {
      element.style.color = '#f8f9fa';
      if (backgroundColor === 'rgb(248, 249, 250)' || backgroundColor !== 'rgba(0, 0, 0, 0)') {
        element.style.backgroundColor = '#212529';
      }
    }
  });
  const allElementReverse = document.querySelectorAll('body *.reverse') as NodeListOf<HTMLElement>;
  allElementReverse.forEach((element) => {
    element.classList.remove('reverse');
  });
}
