const express = require("express");
const { REVIEW_TYPE } = require("../constants");
const router = express.Router();
const Review = require("../models/Review");
const Store = require("../models/Store");

//utility functions

const getNumberOfReviewsForStore = async (storeID) => {
  const reviews = await Review.find({
    store: storeID,
    reviewType: REVIEW_TYPE.comment,
  });
  return reviews.length;
};

//GET Requests
//get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get review by id
router.get("/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Review id is missing" });
  }
  try {
    const review = await Review.findOne({ _id: id });
    res.json(review);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//PUT requests

//update review, id required, will only update comment and rating
//if rating updated, it will also update store rating
router.put("/", async (req, res) => {
  const newAttrs = req.body;
  let oldRating;

  if (!newAttrs._id) {
    return res.status(400).json({ msg: "Review id is missing" });
  }

  try {
    const review = await Review.findOne({ _id: newAttrs._id });
    if (!!newAttrs.comment) review.comment = newAttrs.comment;

    console.log(newAttrs.rating, review.type);

    if (
      newAttrs.rating !== undefined &&
      review.reviewType === REVIEW_TYPE.reply
    ) {
      return res
        .status(400)
        .json({ msg: "Reply review does not include rating" });
    } else if (newAttrs.rating !== undefined) {
      oldRating = review.rating;
      review.rating = newAttrs.rating;
    }
    await review.save();

    //if rating updated
    if (newAttrs.rating !== undefined) {
      let numReviews = await getNumberOfReviewsForStore(review.store);
      numReviews = parseFloat(numReviews);
      const store = await Store.findOne({ _id: review.store });
      if (numReviews > 1) {
        //formula from https://math.stackexchange.com/questions/493607/find-new-average-if-removing-one-element-from-current-average
        const ratingAfterRemoving =
          (store.rating * numReviews - oldRating) / (numReviews - 1.0);

        const newRating =
          ratingAfterRemoving +
          (newAttrs.rating - ratingAfterRemoving) / numReviews;
        store.rating = newRating;
      } else {
        store.rating = newAttrs.rating;
      }
      await store.save();
    }

    res.json(review);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//POST requests

//creates review, update store rating
router.post("/", async (req, res) => {
  const review = {
    client: req.body.client,
    store: req.body.store,
    comment: req.body.comment,
    reviewType: req.body.reviewType,
  };

  if (
    !review.client ||
    !review.store ||
    !review.comment ||
    !review.reviewType
  ) {
    return res
      .status(400)
      .json({ msg: "review is missing one or more fields" });
  } else if (review.reviewType === REVIEW_TYPE.reply) {
    if (!req.body.parent) {
      return res.status(400).json({ msg: "Parent review ID missing" });
    }
    review.parent = req.body.parent;
  } else if (review.reviewType === REVIEW_TYPE.comment) {
    if (req.body.rating === undefined) {
      return res.status(400).json({ msg: "Review rating is missing" });
    }
    review.rating = req.body.rating;
  }
  review.date = new Date();

  try {
    const dbOrder = new Review(review);
    await dbOrder.save();

    if (review.reviewType === REVIEW_TYPE.comment) {
      const store = await Store.findOne({ _id: review.store });
      const numReviews = await getNumberOfReviewsForStore(review.store);
      if (numReviews === 1) {
        store.rating = review.rating;
      } else {
        store.rating =
          store.rating +
          (parseFloat(review.rating) - store.rating) / numReviews;
      }
      await store.save();
    }
    const reviews = await Review.find({ store: review.store })
      .populate("client")
      .populate("store");
    res.json(reviews);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//delete a review, id required
//if comment deleted, reply will be deleted as well
//will update store rating
router.delete("/", async (req, res) => {
  const id = req.body._id;
  if (!id) {
    return res.status(400).json({ msg: "Review id is missing" });
  }
  try {
    const review = await Review.findOne({ _id: id });
    await Review.deleteOne({ _id: id });

    const replyReview = await Review.findOne({ parent: id });
    if (!!replyReview) {
      await Review.deleteOne({ _id: replyReview._id });
    }

    if (review.reviewType === REVIEW_TYPE.comment) {
      const review_rating = parseFloat(review.rating);
      const store = await Store.findOne({ _id: review.store });
      const numReviews = await getNumberOfReviewsForStore(store._id);
      if (numReviews === 0) {
        store.rating = undefined;
      } else {
        store.rating = (store.rating * numReviews - review_rating) / numReviews;
      }
      await store.save();
    }

    const reviews = await Review.find({ store: review.store })
      .populate("client")
      .populate("store");
    res.json(reviews);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
