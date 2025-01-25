import Farm from ("../models/farm");

// Add a new farm
exports.addFarm = async (req, res) => {
  try {
    const { name, location, size, owner } = req.body;

    const farm = new Farm({ name, location, size, owner });
    await farm.save();

    res.status(201).json({ message: "Farm added successfully", farm });
  } catch (error) {
    res.status(500).json({ message: "Error adding farm", error });
  }
};

// Get all farms
exports.getFarms = async (req, res) => {
  try {
    const farms = await Farm.find();
    res.status(200).json(farms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching farms", error });
  }
};

// Delete a farm
exports.deleteFarm = async (req, res) => {
  try {
    const { id } = req.params;

    await Farm.findByIdAndDelete(id);
    res.status(200).json({ message: "Farm deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting farm", error });
  }
};
