const testCase1 = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

// Output:
// sam=99912222
// Not found
// harry=12299933

function processData(input) {
  const inputArr = input.split("\n");

  const startOn = Number(inputArr[0]) + 1;

  const contactList = inputArr.slice(1, startOn);

  let result = "";

  for (let i = startOn; i < inputArr.length; i++) {
    const contact = contactList.filter((contact) =>
      contact.includes(inputArr[i])
    );

    if (contact.length) {
      const [name, phone] = contact[0].split(" ");

      result = result ? `${result}\n${name}=${phone}` : `${name}=${phone}`;
    } else {
      result = result ? `${result}\nNot found` : `Not found`;
    }
  }

  console.log(result);
}

processData(testCase1);
