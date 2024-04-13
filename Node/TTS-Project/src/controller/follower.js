import modals from "../model";

export const getPendingRequest = async (req, res) => {
  modals.Follower.find({ reciverId: req.me._id, status: "pending" })
    .then(async (resData) => {
      res
        .status(200)
        .send({ data: resData, success: true, message: "Create succesfully" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};

export const sendRequest = async (req, res) => {
  let input = req?.body;
  input.senderId = req?.me?._id;

  const match = await modals.Follower.findOne(input);
  if (match) throw new Error("You already sent rerquest");

  const user = await modals.User.findById(input.reciverId);
  if (!user.isPrivate) {
    user.followers = user.followers + 1;
    user.save();
    input.status = "accept";
    me.following = me?.following + 1;
    me.save();
  }

  modals.Follower.create(input)
    .then(async (resData) => {
      res
        .status(200)
        .send({ data: resData, success: true, message: "Create succesfully" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ data: null, success: false, message: err.message });
    });
};

export const requestHandler = async (req, res) => {
  const input = req.body;

  if (input.status === "reject") {
    modals.Follower.findByIdAndDelete(input.requestId).then(() => {
      res
        .status(200)
        .send({ data: "", success: true, message: "Rejected succesfully" });
    });
  } else {
    modals.Follower.findById(input.requestId)
      .then(async (resData) => {
        await modals.User.findByIdAndUpdate(input.reciverId, {
          following: { $inc: 1 },
        });
        me.followers = me?.followers + 1;
        me.save();

        res.status(200).send({
          data: resData,
          success: true,
          message: "Accepted succesfully",
        });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ data: null, success: false, message: err.message });
      });
  }
};
