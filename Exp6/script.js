// Stored student data
let storedData = null;

// Clear password error when user re-types
document.getElementById('confirmPassword').addEventListener('input', function () {
    document.getElementById('passwordError').textContent = '';
});
document.getElementById('password').addEventListener('input', function () {
    document.getElementById('passwordError').textContent = '';
});

document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const usn = document.getElementById('usn').value.trim();
    const dob = document.getElementById('dob').value;
    const description = document.getElementById('description').value.trim();

    // Gender
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    let gender = 'Not selected';
    genderRadios.forEach(r => { if (r.checked) gender = r.value; });

    // Languages
    const langCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    const languages = langCheckboxes.length
        ? Array.from(langCheckboxes).map(c => c.value).join(', ')
        : 'None selected';

    // Validation
    if (!name || !email || !usn || !dob) {
        alert('Please fill in all required fields (Name, Email, USN, Date of Birth).');
        return;
    }
    if (password !== confirmPassword) {
        document.getElementById('passwordError').textContent = 'Incorrect password: passwords do not match!';
        document.getElementById('confirmPassword').focus();
        return;
    }

    // Clear any previous error messages
    document.getElementById('passwordError').textContent = '';

    // Store data
    storedData = { name, email, usn, gender, languages, dob, description };
    alert('Data submitted successfully! Click Display to view.');
});

document.getElementById('displayBtn').addEventListener('click', function () {
    if (!storedData) {
        alert('No data submitted yet. Please fill and submit the form first.');
        return;
    }

    document.getElementById('nameOutput').textContent        = 'Name: ' + storedData.name;
    document.getElementById('emailOutput').textContent       = 'Email: ' + storedData.email;
    document.getElementById('usnOutput').textContent         = 'USN: ' + storedData.usn;
    document.getElementById('genderOutput').textContent      = 'Gender: ' + storedData.gender;
    document.getElementById('languagesOutput').textContent   = 'Languages: ' + storedData.languages;
    document.getElementById('dobOutput').textContent         = 'Date of Birth: ' + storedData.dob;
    document.getElementById('descriptionOutput').textContent = 'About: ' + (storedData.description || '—');

    document.getElementById('output').classList.add('filled');
});
