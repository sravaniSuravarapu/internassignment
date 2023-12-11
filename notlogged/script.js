function toggleEdit() {
    var inputField = document.querySelector('.editable-field input');
    inputField.readOnly = !inputField.readOnly;
}

function toggleBottomContainer() {
    var bottomContainer = document.getElementById('bottomContainer');
    bottomContainer.classList.toggle('active');
}

