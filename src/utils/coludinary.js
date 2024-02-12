const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export function uploadImage(imageUploaded) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      imageUploaded,
      { width: 400, height: 300, crop: "fill" },
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}

module.exports = {
  cloudinary,
};

// // Path: src/routes/campgrounds.js
// const express = require('express');
// const router = express.Router();
// const catchAsync = require('../utils/catchAsync');
// const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');
// const campgrounds = require('../controllers/campgrounds');
// const multer = require('multer');
// const { storage } = require('../utils/cloudinary');
// const upload = multer({ storage });

// router.route('/')
//     .get(catchAsync(campgrounds.index))
//     .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))

// router.get('/new', isLoggedIn, campgrounds.renderNewForm)

// router.route('/:id')
//     .get(catchAsync(campgrounds.showCampground))
//     .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
//     .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground))

// router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))

// module.exports = router;

// // Path: src/controllers/campgrounds.js
// const Campground = require('../models/campground');

// module.exports.index = async (req, res) => {
//     const campgrounds = await Campground.find({});
//     res.render('campgrounds/index', { campgrounds });
// }

// module.exports.renderNewForm = (req, res) => {
//     res.render('campgrounds/new');
// }

// module.exports.createCampground = async (req, res, next) => {
//     const campground = new Campground(req.body.campground);
//     campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
//     campground.author = req.user._id;
//     await campground.save();
//     req.flash('success', 'Successfully made a new campground!');
//     res.redirect(`/campgrounds/${campground._id}`)
// }

// module.exports.showCampground = async (req, res) => {
//     const campground = await Campground.findById(req.params.id).populate({
//         path: 'reviews',
//         populate: {
//             path: 'author'
//         }
//     }).populate('author');
//     if (!campground) {
//         req.flash('error', 'Cannot find that campground!');
//         return res.redirect('/campgrounds');
//     }
//     res.render('campgrounds/show', { campground });
// }

// module.exports.renderEditForm = async (req, res) => {
//     const { id } = req.params;
//     const campground = await Campground.findById(id)
//     if (!campground) {
//         req.flash('error', 'Cannot find that campground!');
//         return res.redirect('/campgrounds');
//     }
//     res.render('campgrounds/edit', { campground });
// }

// module.exports.updateCampground = async (req, res) => {
//     const { id } = req.params;
//     const campground = await Campground.findByIdAndUpdate
//         (id, { ...req.body.campground });
//     const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
//     campground.images.push(...imgs);
//     await campground.save();
//     if (req.body.deleteImages) {
//         for (let filename of req.body.deleteImages) {
//             await cloudinary.uploader.destroy(filename);
//         }
//         await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
//     }
//     req.flash('success', 'Successfully updated campground!');
//     res.redirect(`/campgrounds/${campground._id}`)
// }

// module.exports.deleteCampground = async (req, res) => {
//     const { id } = req.params;
//     await Campground.findByIdAndDelete(id);
//     req.flash('success', 'Successfully deleted campground')
//     res.redirect('/campgrounds');
// }

// // Path: src/models/campground.js
