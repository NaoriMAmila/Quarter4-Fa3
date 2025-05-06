let n;
while (true) 
{
    n = prompt("Enter a number:");
    if (!isNaN(n) && n.trim() !== "") 
    {
        n = parseInt(n);
        break;
    }
}

const outputDiv = document.getElementById("output");
let shape = `<h2>Number inputted: ${n}</h2>`;
if (n % 2 !== 0) 
{
    for (let i = n; i >= 1; i--) 
    {
        for (let j = 1; j <= n; j++) 
        {
            shape += i + " ";
        }
        shape += "<br>";
    }
} 
else 
{
    for (let i = n; i >= 1; i--) 
    {
        for (let j = 1; j <= i; j++) 
        {
            shape += i + " ";
        }
        shape += "<br>";
    }
}

outputDiv.innerHTML = shape;
let contacts = [];

function updateDisplay() 
{
    document.getElementById("contactsDisplay").innerHTML = contacts.join(" ");
}

function add() 
{
    const input = document.getElementById("name");
    const name = input.value.trim();
    if (name === "") 
    {
        return;
    }
    else if (contacts.length === 7) 
    {
        contacts.shift();
    }

    contacts.push(name);
    input.value = "";
    updateDisplay();
}

function remove() 
{
    contacts.pop();
    updateDisplay();
}

updateDisplay();