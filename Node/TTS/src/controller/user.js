import { modal } from "../model";

const generateToken = (resData) => {
  let token = jwt.sign({ email: resData.email, _id: resData?._id }, "131231");
  return token;
};

export const otpSignin = async (req, res) => {
  try {
    const matchUser = await modal?.User.findOne({ code: req?.body?.otp });
    if (!matchUser) res.status(400).send("Otp is incorrect");
    matchUser.code = "";
    await matchUser.save();
    res.status(200).send({ data: matchUser, token: generateToken(matchUser) });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAll = (req, res) => {
  modal?.User.find({})
    .then((resData) => {
      // console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const signUp = (req, res) => {
  let input = req?.body;
  modal?.User.create(input)
    .then((resData) => {
      let token = generateToken(resData);
      sendMail();
      res.send({ data: resData, token });
    })
    .catch((err) => {
      res.send(err);
    });
};

export const update = (req, res) => {
  let input = req?.body;
  modal?.User.findOneAndUpdate({ _id: req?.params?.id }, input)
    .lean()
    .then((resData) => {
      console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const passwordReset = async (req, res) => {
  let matchUser = await modal?.User.findById(req?.params?.id);
  if (!matchUser) return new Error("user not found");
  else {
    if (req?.body?.password) {
      console.log("----->");
      matchUser.password = req.body.password;
      matchUser.age = 1000;
    }
    await matchUser.save();
    res.send("password chnaged");
  }
};

export const login = (req, res) => {
  let { email, password } = req?.body;

  // const user = modal?.User.findOne({email})
  // user.validatePassword
  modal?.User.findOne({ email })
    .then(async (userRes) => {
      let match = await userRes.validatePassword(password);
      let token = generateToken(userRes);
      if (match) {
        res.send({ data: userRes, token });
      } else {
        res.status(404).send("password not match");
      }
    })
    .catch((err) => res.send(err.message));
};

export const deleteUser = (req, res) => {
  let input = req?.body;
  modal?.User.findByIdAndRemove(req?.params?.id, input)
    .then((resData) => {
      // console.log("resData", resData);
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const sendOTP = async (req, res) => {
  try {
    const matchUser = await modal?.User.findOne({ email: req?.body?.email });
    if (!matchUser) res.status(400).send("user not found with this email");
    let otp = sendOtp(matchUser.email);
    matchUser.code = otp;
    await matchUser.save();
    res.status(200).send("otp sent to your email");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
