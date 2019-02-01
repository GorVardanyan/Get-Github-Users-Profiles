function ById(id, value) {
    return document.getElementById(id).innerHTML = value
}

function gettingUser() {
    const inputValue = document.getElementById('input').value;
    const url = 'https://api.github.com/users/';
    const user = {
        img: undefined,
        login: undefined,
        name: undefined,
        location: undefined,
        followers: undefined,
        following: undefined,
        html_url: undefined,
    };
    if (inputValue) {
        ById('errorAlert', '')
        fetch(`${url}${inputValue}`)
            .then(filter => filter.json())
            .then(result => {
                user.img = result.avatar_url;
                user.login = result.login;
                user.name = result.name;
                user.location = result.location;
                user.followers = result.followers;
                user.following = result.following;
                user.html_url = result.html_url;
                document.getElementById('img').src = user.img;
                ById('login', user.login);
                ById('name', user.name);
                ById('location', user.location);
                ById('followers', user.followers);
                ById('following', user.following);
                document.getElementById('link').href = user.html_url;
                ById('link', 'GitHub Link of ' + user.name);
            })
            .catch(err => ById('errorAlert', 'Login is not found'))
    } else {
        ById('errorAlert', 'Please enter the user login')
    }
}