const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    id: 1,
    username: "Lambda School",
    password: "i<3Lambd4",
    firstname: "",
    lastname: "",
    email: "",
    country: "usa",
    usertype: true
  },
  {
    id: 2,
    username: "ruwaidah",
    password: "ruwaidah",
    firstname: "",
    lastname: "",
    email: "",
    country: "usa",
    usertype: true
  }
];

let nextUserId = 3;

let records = [
  {
    country: "usa",
    communities: [
      {
        communite: "Austin",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      },
      {
        communite: "Houston",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      }
    ]
  },
  {
    country: "Canada",
    communities: [
      {
        communite: "Austin",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      },
      {
        communite: "Houston",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      }
    ]
  },
  {
    country: "France",
    communities: [
      {
        communite: "Austin",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      },
      {
        communite: "Houston",
        childs: [
          {
            id: 1,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 2,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 3,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          },
          {
            id: 4,
            childName: "wqdqw",
            gender: "wqdqwd",
            birth: "wqdqwd",
            weight: "wqdqwd",
            height: "wdqwd",
            countryScreening: "wdqqwd",
            dateOfScreening: "dqwd",
            community: "qdqwd",
            parentName: "qdwqdw",
            phoneNo: "qdqdq",
            country: "qdwqwd",
            state: "qwdqwd",
            city: "qwdqd",
            street: "qwdqwd"
          }
        ]
      }
    ]
  }
];

let nextId = 5;

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const loginuser = users.find(
    user => user.username == username && user.password == password
  );
  if (loginuser) {
    req.loggedIn = true;
    setTimeout(() => {
      res.status(200).json({
        payload: token
      });
    }, 1000);
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/api/userpage/:username", authenticator, (req, res) => {
  const friend = users.find(f => f.username == req.params.username);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

// SignUp
app.post("/api/signup", (req, res) => {
  // if (req.body.username !== undefined && req.body.password !== undefined) {
  const newuser = req.body;
  newuser.id = nextUserId;
  users.push(newuser);
  // }
  nextUserId = nextUserId + 1;
  res.status(201).json(users);
});

// End SignUp

// All Countries Fetch
app.get("/api/countries", authenticator, (req, res) => {
  res.send(records);
});

// one Country
app.get("/api/countries/:country", authenticator, (req, res) => {
  const country = records.find(record => record.country == req.params.country);
  if (country) {
    res.status(200).json(country);
  } else {
    res.status(404).send({ msg: "country not found" });
  }
});
app.get("/api/colors", authenticator, (req, res) => {
  res.send(colors);
});

app.post("/api/colors", authenticator, (req, res) => {
  if (req.body.color !== undefined && req.body.code !== undefined) {
    const newcolor = req.body;
    newcolor.id = nextId;
    colors.push(newcolor);
  }
  nextId = nextId + 1;
  res.status(201).json(colors);
});

app.put("/api/colors/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the color id");
  if (req.body.id === undefined || !req.body.color || !req.body.code) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  colors = colors.map(color => {
    if (`${color.id}` === req.params.id) {
      return req.body;
    }
    return color;
  });
  res.status(200).send(req.body);
});

app.delete("/api/colors/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the color id");
  colors = colors.filter(color => `${color.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get("/", function(req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
