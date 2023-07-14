var columnContainers = document.querySelectorAll('.column');

// Add button click event listener for each column
columnContainers.forEach(function (columnContainer) {
  var addButton = columnContainer.querySelector('.add-task-button');
  var addTaskSection = columnContainer.querySelector('.add-task-section');

  addButton.addEventListener('click', function () {
    addTaskSection.classList.add('show');
  });
});

// Save button click event listener for each column
columnContainers.forEach(function (columnContainer) {
  var saveButton = columnContainer.querySelector('.save');
  var contentInput = columnContainer.querySelector('.add-task-section input[type="text"]');

  saveButton.addEventListener('click', function () {
    var content = contentInput.value.trim();
    if (content !== '') {
      var todoItem = document.createElement('div');
      todoItem.className = 'todo-item';

      var label = document.createElement('label');
      label.innerText = content;
      todoItem.appendChild(label);

      var actions = document.createElement('div');
      actions.className = 'actions';

      var editButton = document.createElement('button');
      editButton.className = 'edit';
      var editIcon = document.createElement('i');
      editIcon.className = 'fas fa-edit';
      editButton.appendChild(editIcon);
      actions.appendChild(editButton);

      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      var deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash';
      deleteButton.appendChild(deleteIcon);
      actions.appendChild(deleteButton);

      todoItem.appendChild(actions);

      var todoColumn = columnContainer.querySelector('.todo-column');
      todoColumn.appendChild(todoItem);

      contentInput.value = '';
      columnContainer.querySelector('.add-task-section').classList.remove('show');
    }
  });
});
