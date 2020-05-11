const {
  Phone,
  Image,
  Brand
} = require("./models/db");

module.exports = {
  loadSampleData: async function () {

    let phone = await Phone.findOne()
    if (!phone) {
      let phones = require("../sampleData/phones.json");
      Phone.bulkCreate(phones);
    }

    let image = await Image.findOne();
    if (!image) {
      let images = require("../sampleData/images.json");
      Image.bulkCreate(images);
    }

  },
  loadBrands: async function () {
    Brand.findOne().then(async function (b) {
      if (b == null) {
        const brands = require("../sampleData/brands.json");
        await Brand.bulkCreate(brands.map(brand => ({
          name: brand
        })));
      }

    })
  }
}