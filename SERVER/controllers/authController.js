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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists and get their credentials
    const [users] = await pool.execute(
      "SELECT u.id, u.name, u.role, c.password_hash FROM users u " +
        "JOIN user_credentials c ON u.id = c.user_id " +
        "WHERE u.email = ?",
      [email],
    );

    if (users.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = users[0];

    // 2. Compare password with the hash
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 3. Create a JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
