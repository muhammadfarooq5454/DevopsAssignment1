const searchfun = () => {
    let filter = document.getElementById('myInput').value;
    let list = document.getElementById('mylist');
    let lang = list.getElementsByTagName('li');

    for (var i = 0; i < lang.length; i++) {
        let inn= lang[i].innerHTML;

        if(inn.includes(filter))
        {
            lang[i].style.display = "block";
        }
        else{
            lang[i].style.display = "none";
        }
    }
}