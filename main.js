document.getElementById('form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var role = document.getElementById('role').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(el => el.value).join(', ');
    var comment = document.getElementById('comment').value;

    // Display data in the output section
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-age').textContent = age;
    document.getElementById('output-role').textContent = role;
    document.getElementById('output-gender').textContent = gender;
    document.getElementById('output-languages').textContent = languages;
    document.getElementById('output-comment').textContent = comment;

    // Show the output section
    document.getElementById('output').style.display = 'block';
}