module.exports = function (gulp, callback) {
    console.log('This is the synchronous native task with explicit callback!');
    callback(); // Don't forget this, otherwise task will never finish!
};