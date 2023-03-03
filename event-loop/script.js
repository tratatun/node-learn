const button = document.getElementById('button');
const header = document.getElementById('header');

let counter = 0;

button.addEventListener('click', () => {
    counter += 1;
    header.innerText = counter.toString();
    header.appendChild(document.createElement('div'));
    console.log('after change');

    Promise.resolve().then(() => {
        console.log('promise');
    });

    setTimeout(() => {
        console.log('setTimeout');
    }, 0);
});

const mutationObserver = new MutationObserver((mutations) => {
    console.log(mutations);
});

mutationObserver.observe(header, {
    subtree: true,
    attributeOldValue: true,
    childList: true
})

console.log('test 1')