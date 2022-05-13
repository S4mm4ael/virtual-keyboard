/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const body = document.querySelector('body');
const regularLetters = document.querySelectorAll('.regular');
let lang = localStorage.getItem('Language');
let letterCase = 0;

function init() {
  createHTMLStructure();
  initFunctionality();
  langChangeStartup();
}

function createHTMLStructureInput() {
  body.innerHTML += textBox;
}
function createHTMLStructure() {
  body.innerHTML += keyboardEngLow;
}
document.onkeydown = (t) => {
  if (t.code === 'Tab') {
    return false;
  }
};
function initFunctionality() {
  const keys = document.querySelectorAll('.keys');
  const spaceKey = document.querySelector('.space_key');
  const shiftLeft = document.querySelector('.shift_left');
  const shiftRight = document.querySelector('.shift_right');
  const capsLockKey = document.querySelector('.caps_lock_key');
  const tabKey = document.querySelector('.tab_key');
  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');
  const arrowUp = document.querySelector('.arrow_up');
  const arrowDown = document.querySelector('.arrow_down');
  const ctrlLeft = document.querySelector('.ctrl_left');
  const ctrlRight = document.querySelector('.ctrl_right');
  const winKey = document.querySelector('.win_key');
  const altKey = document.querySelector('.alt_left');
  const backspaceKey = document.querySelector('.backspace_key');
  const textInput = document.querySelector('.text');
  const delKey = document.querySelector('.del_key');
  const enterKey = document.querySelector('.enter_key');

  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('keyname', keys[i].innerText.toUpperCase());
    keys[i].setAttribute('keynameRUS', vocabulary[i]);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    keys[i].setAttribute('lowerCaseNameRus', vocabulary[i].toLowerCase());
  }

  window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
        keys[i].classList.add('active');
      }
      if (e.key === keys[i].getAttribute('keynamerus') || e.key === keys[i].getAttribute('lowerCaseNamerus')) {
        keys[i].classList.add('active');
      }
      if (e.code === 'Space') {
        spaceKey.classList.add('active');
      }
    }
    if (e.code === 'Tab') {
      textInput.focus();
      textInput.value += '   ';
      tabKey.classList.toggle('active');
    }
    if (e.key === 'Delete') {
      delKey.classList.add('active');
    }
    if (e.key === 'Enter') {
      enterKey.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      altKey.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
    if (e.code === 'MetaLeft') {
      winKey.classList.add('active');
    }
    if (e.code === 'ShiftRight') {
      if (shiftRight.classList.contains('active')) {
        shiftRight.classList.add('active');
      } else {
        shiftRight.classList.add('active');
        changeCase();
      }
    }
    if (e.code === 'ShiftLeft') {
      if (shiftLeft.classList.contains('active')) {
        // eslint-disable-next-line no-console
        console.log('');
      } else {
        shiftLeft.classList.add('active');
        changeCase();
      }
    }
    if (e.code === 'CapsLock') {
      capsLockKey.classList.toggle('active');
      changeCase();
    }

    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }

    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }

    if (e.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    }

    if (e.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (e.code === 'Backspace') {
      backspaceKey.classList.add('active');
    }
  });

  window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
      }
      if (e.key === keys[i].getAttribute('keynamerus') || e.key === keys[i].getAttribute('lowerCaseNamerus')) {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
      }
      if (e.code === 'Space') {
        spaceKey.classList.remove('active');
        spaceKey.classList.add('remove');
      }
      if (e.code === 'ShiftRight') {
        if (shiftRight.classList.contains('active')) {
          changeCase();
        }
        shiftRight.classList.remove('active');
        shiftRight.classList.add('remove');
      }
      if (e.code === 'ShiftLeft') {
        if (shiftLeft.classList.contains('active')) {
          changeCase();
        }
        shiftLeft.classList.remove('active');
        shiftLeft.classList.add('remove');
      }
      if (e.key === 'Enter') {
        enterKey.classList.remove('active');
        enterKey.classList.add('remove');
      }
      if (e.code === 'Tab') {
        tabKey.classList.remove('active');
        tabKey.classList.add('remove');
      }
      if (e.key === 'Delete') {
        delKey.classList.remove('active');
        delKey.classList.add('remove');
      }
      if (e.code === 'ArrowLeft') {
        arrowLeft.classList.remove('active');
        arrowLeft.classList.add('remove');
      }

      if (e.code === 'ArrowRight') {
        arrowRight.classList.remove('active');
        arrowRight.classList.add('remove');
      }

      if (e.code === 'ArrowUp') {
        arrowUp.classList.remove('active');
        arrowUp.classList.add('remove');
      }

      if (e.code === 'ArrowDown') {
        arrowDown.classList.remove('active');
        arrowDown.classList.add('remove');
      }
      if (e.code === 'MetaLeft') {
        winKey.classList.remove('active');
        winKey.classList.add('remove');
      }
      if (e.code === 'ControlLeft') {
        ctrlLeft.classList.remove('active');
        ctrlLeft.classList.add('remove');
      }
      if (e.code === 'ControlRight') {
        ctrlRight.classList.remove('active');
        ctrlRight.classList.add('remove');
      }
      if (e.code === 'AltLeft') {
        altKey.classList.remove('active');
        altKey.classList.add('remove');
      }
      if (e.code === 'Backspace') {
        backspaceKey.classList.remove('active');
        backspaceKey.classList.add('remove');
      }

      setTimeout(() => {
        keys[i].classList.remove('remove');
      }, 200);
    }
  });

  const ctrlKey = document.querySelectorAll('.ctrl_key');
  const buttonItems = document.querySelectorAll('.regular');
  const buttonEnter = document.querySelector('.enter_key');

  buttonItems.forEach((buttonItem) => buttonItem.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += `${e.target.innerText}`;
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  }));
  buttonEnter.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += '\r\n';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  arrowLeft.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += '←';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  arrowRight.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += '→';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  arrowUp.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += '↑';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  arrowDown.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += '↓';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  spaceKey.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += ' ';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  backspaceKey.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value = textInput.value.slice(0, -1);
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  tabKey.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value += '   ';
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  shiftLeft.addEventListener('click', (e) => {
    textInput.focus();
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  shiftRight.addEventListener('click', (e) => {
    textInput.focus();
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  capsLockKey.addEventListener('click', (e) => {
    changeCase();
    e.target.classList.toggle('active');
  });
  ctrlKey.forEach((buttonItem) => buttonItem.addEventListener('click', (e) => {
    textInput.focus();
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  }));
  winKey.addEventListener('click', (e) => {
    textInput.focus();
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });

  altKey.addEventListener('click', (e) => {
    textInput.focus();
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
  delKey.addEventListener('click', (e) => {
    textInput.focus();
    textInput.value = textInput.value.slice(0, -1);
    e.target.classList.add('remove');
    setTimeout(() => {
      e.target.classList.remove('remove');
    }, 200);
  });
}
window.addEventListener('DOMContentLoaded', createHTMLStructureInput());
window.addEventListener('DOMContentLoaded', init());
window.addEventListener('DOMContentLoaded', getLocalStorage);

function changeCase() {
  const buttonItems = document.querySelectorAll('.regular');
  if (letterCase === 0) {
    letterCase = 1;
    if (lang === 0) {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('keyname'));
    } else {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('keynamerus'));
    }
  } else {
    letterCase = 0;
    if (lang === 0) {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('lowercasename'));
    } else {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('lowercasenamerus'));
    }
  }
}
function langChange() {
  const buttonItems = document.querySelectorAll('.regular');
  if (lang === 0) {
    lang = 1;
    if (letterCase === 0) {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('lowercasenamerus'));
    } else {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('keynamerus'));
    }
  } else {
    lang = 0;
    if (letterCase === 0) {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('lowercasename'));
    } else {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('keyname'));
    }
  }
  localStorage.setItem('Language', lang);
}
function langChangeStartup() {
  const buttonItems = document.querySelectorAll('.regular');
  if (lang == 1) {
    lang = 1;
    if (letterCase === 0) {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('lowercasenamerus'));
    } else {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('keynamerus'));
    }
  }
  if (lang == 0) {
    lang = 0;
    if (letterCase === 0) {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('lowercasename'));
    } else {
      buttonItems.forEach((buttonItem) => buttonItem.innerText = buttonItem.getAttribute('keyname'));
    }
  }
}
function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    // eslint-disable-next-line no-restricted-syntax
    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => langChange(),

  'ShiftLeft',
  'AltLeft',
);
// Local storage
function getLocalStorage() {
  lang = (localStorage.getItem('Language'));
}
