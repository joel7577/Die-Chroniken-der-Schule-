document.getElementById('memory-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const memory = document.getElementById('memory').value;
    const listItem = document.createElement('li');
    listItem.textContent = name + ': ' + memory;
    document.getElementById('memory-list').appendChild(listItem);
    this.reset();
});
