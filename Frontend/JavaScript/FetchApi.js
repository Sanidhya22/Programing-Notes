//     What do you mean by fetch API ?
// ->  Fetch API allows us to make HTTP request to the Server.
//     We can use this in place of XMLHttpRequest.

fetch(file)
    .then(x => x.text())
    .then(y => myDisplay(y));

async function getText(file) {
    const x = await fetch(file);
    const y = await x.text();
    myDisplay(y);
}