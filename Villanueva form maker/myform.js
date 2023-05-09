const insert = () => {
    let type = document.querySelector('#type').value;
    let label = document.querySelector('#label').value;
  
    switch(type) {
      case 'text':
        appendText(label);
        break;
      case 'button':
        appendButton(label);
        break;
      case 'radio':
        appendRadio(label);
        break;
      case 'checkbox':
        appendCheckbox(label);
        break;
    }
  }
  
  const appendText = (label = "No label") => {
    let el = createEl('input', {
      type: 'text',
      class: 'form-control my-2',
      placeholder: label
    });
    let container = createEl('div', {
      class: 'input-container'
    }, el);
    document.querySelector('#display').append(container);
  }
  
  const appendButton = (label = "No label") => {
    let el = createEl('button', {
      type: 'button',
      class: 'btn btn-primary my-2',
      textContent: label
    });
    let container = createEl('div', {
      class: 'button-container'
    }, el);
    document.querySelector('#display').append(container);
  }
  
  const appendRadio = (label = "No label") => {
    let el = createEl('input', {
      type: 'radio',
      name: 'radio-group',
      id: label,
      class: 'form-check-input'
    });
    let labelEl = createEl('label', {
      for: label,
      class: 'form-check-label',
      textContent: label
    });
    let container = createEl('div', {
      class: 'radio-container'
    }, el, labelEl);
    document.querySelector('#display').append(container);
  }
  
  const appendCheckbox = (label = "No label") => {
    let el = createEl('input', {
      type: 'checkbox',
      id: label,
      class: 'form-check-input'
    });
    let labelEl = createEl('label', {
      for: label,
      class: 'form-check-label',
      textContent: label
    });
    let container = createEl('div', {
      class: 'checkbox-container'
    }, el, labelEl);
    document.querySelector('#display').append(container);
  }
  
  const removeInsertedElement = () => {
    let insertedElement = document.querySelector('#display > *:last-child');
    if (insertedElement) {
      insertedElement.remove();
    }
  }
  
  const createEl = (tagName, attributes = {}, ...children) => {
    let el = document.createElement(tagName);
    for (let attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    for (let child of children) {
      el.append(child);
    }
    return el;
  }