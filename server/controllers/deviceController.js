const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.ferEach( i => 
          DeviceInfo.create({
            title: i.title,
            deviceId: i.deviceId, 
            descripttion: i.descripttion,
          }))
      }



      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const {brandId, typeId, limit, page} = req.body;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findCountAll(limit, offset);
    }
    if (brandId && !typeId) {
      devices = await Device.findCountAll({where: {brandId}});
    }
    if (!brandId && typeId) {
      devices = await Device.findCountAll({where: {typeId}});
    }
    if (brandId && typeId) {
      devices = await Device.findCountAll({where: {brandId, typeId}}); 
    }
    return res.json(devices);
  }

  async getById(req, res) {
    const {id} = req.params;
    const device = await Device.findOne(
      {
        where: {id},
        include: [{model: DeviceInfo, as: 'info'}]
      },

    )
    return res.json(device);
  }
}

module.exports = new DeviceController();
