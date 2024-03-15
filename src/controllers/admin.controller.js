const adminService = require("../services/admin.service");


const getAdmin = async (req, res) => {
  try {
    const admins = await adminService.getAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const addAdmin = async (req, res) => {
    try {
      const admin = req.body;
  
      const newAdmin = await adminService.addAdmin(req,res,admin);
      
    }
     catch (error) {
      res.status(500).json({ message: error.message });
    }
  };




  const deleteAdmin = async (req, res) => {
    try {
      const {id}  = req.params;
      const deletedAdmin = await adminService.deleteAdmin(id);
      res.status(200).json({ message:"Admin Deleted" , DeletedAdmin:deletedAdmin  });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    getAdmin,
    addAdmin,
    deleteAdmin,
  };
  