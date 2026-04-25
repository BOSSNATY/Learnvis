const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1. Create the User profile
    const [userResult] = await connection.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email],
    );
    const userId = userResult.insertId;

    // 2. Hash password and save to user_credentials
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await connection.execute(
      "INSERT INTO user_credentials (user_id, password_hash) VALUES (?, ?)",
      [userId, hashedPassword],
    );

    await connection.commit();
    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    await connection.rollback();
    res.status(500).json({ error: error.message });
  } finally {
    connection.release();
  }
};
