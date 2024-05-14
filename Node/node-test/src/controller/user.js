export const register = (req, res) => {
  try {
    const data = "test";
  } catch (error) {
    res.status(400).send({});
  }
};
