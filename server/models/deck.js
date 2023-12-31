//  Deck Schema
import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Deck name is required."],
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  sharedWith: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Deck = mongoose.model("Deck", deckSchema);

export default Deck;
