module.exports.save = async function (modelObject) {
    await modelObject.save();
    return modelObject;
};