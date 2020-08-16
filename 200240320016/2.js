function display() {

    let userv = document.getElementById('username').value;
    let passv = document.getElementById('password').value;
    if (userv == "" || passv == "") {
        alert('inputs cant be empty');
        return;
    }

    /*console.log(userv);
    console.log(passv);
    */

    let u = document.getElementById('user');
    let p = document.getElementById('pass');

    u.innerHTML = userv;
    p.innerHTML = passv;

    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}