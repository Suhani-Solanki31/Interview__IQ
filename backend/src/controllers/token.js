import jwt from "jsonwebtoken";

const genToken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // console.log( process.env.JWT_SECRET);
    

    return token;
  } catch (error) {
    console.log("Error in Token generation : ", error)
  }
};

export default genToken;