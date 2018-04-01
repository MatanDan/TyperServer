module.exports.save = function (modelObject) {
    return modelObject.save().then(() => modelObject);
};