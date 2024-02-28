
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let passwordlength = password.length;
    a = username.indexOf('@');
    b = username.slice(0, a);
    c = Math.round(b.length / 2);
    d = b.slice(c,a);
    e ='x'.repeat(a-c);
    username = username.replace(d,e);
    document.getElementById('updated_username').innerHTML = username;
    document.getElementById('updated_password').innerHTML = '*'.repeat(passwordlength);
}