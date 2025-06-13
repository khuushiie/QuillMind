import User from '../models/User.js';

// GET user profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

// UPDATE user profile
export const updateProfile = async (req, res) => {
  const { name, email, bio } = req.body;

  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio || user.bio;

    const updatedUser = await user.save();

    res.json({
      message: "Profile updated successfully.",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        bio: updatedUser.bio,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile" });
  }
};