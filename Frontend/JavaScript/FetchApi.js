/* What do you mean by fetch API ?
->  Fetch API interface allows web browser to make HTTP request to the Server.
    We can use this in place of XMLHttpRequest. */

fetch(file)
    .then(x => x.text())
    .then(y => myDisplay(y));

//Since Fetch is based on async and await 

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
}