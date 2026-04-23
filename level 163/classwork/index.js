const fs = require("fs");
const path = require("path");

const WriteFile = async (filePath, data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        const fullPath = path.resolve(filePath);
        await fs.promises.writeFile(fullPath, jsonData);

        return {
        message: "data saved successfully"
        };
        } catch (error) {
        throw {
        message: "failed to save data",
        error: error.message
        };
    }
};

module.exports = WriteFile;