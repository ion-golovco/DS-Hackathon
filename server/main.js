import { Meteor } from "meteor/meteor";
import { MongoClient } from "mongodb";
import { ContractsCollection } from "../imports/api/contracts";

const url =
  "mongodb+srv://radu:j0fFCHRGolqlI1Mw@cluster0.6ogxery.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

async function insertContract({ title, url }) {
  await ContractsCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  await insertContract({
    title: "Do the Tutorial",
    url: "https://www.meteor.com/tutorials/react/creating-an-app",
  });

  await insertContract({
    title: "Follow the Guide",
    url: "https://guide.meteor.com",
  });

  await insertContract({
    title: "Read the Docs",
    url: "https://docs.meteor.com",
  });

  await insertContract({
    title: "Discussions",
    url: "https://forums.meteor.com",
  });
});
