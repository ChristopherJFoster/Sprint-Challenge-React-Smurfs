const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: 0,
    name: "Brainy Smurf",
    age: 200,
    height: "three apples"
  },
  {
    id: 1,
    name: "Smurfette",
    age: 900,
    height: "three apples"
  },
  {
    id: 2,
    name: "Papa Smurf",
    age: 10000,
    height: "three apples"
  },
  {
    id: 3,
    name: "Sassette Smurfling",
    age: 50,
    height: "three apples"
  },
  {
    id: 4,
    name: "Hefty Smurf",
    age: 253,
    height: "three apples"
  },
  {
    id: 5,
    name: "Vanity Smurf",
    age: 140,
    height: "three apples"
  },
  {
    id: 6,
    name: "Dentist Smurf",
    age: 532,
    height: "three apples"
  },
  {
    id: 7,
    name: "Baby Smurf (real)",
    age: 20,
    height: "three apples"
  },
  {
    id: 8,
    name: "Baby Smurf (Gargamel)",
    age: 10000,
    height: "three apples"
  },
  {
    id: 9,
    name: "Dreamy Smurf",
    age: 189,
    height: "three apples"
  }
];

server.get("/smurfs", (req, res) => {
  res.json(smurfs);
});

let smurfId = 10;

server.post("/smurfs", (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      "Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.",
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put("/smurfs/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError("No Smurf found by that ID", res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete("/smurfs/:id", (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError("No smurf by that ID exists in the smurf DB", res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
