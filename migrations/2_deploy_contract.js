const medicalFile = artifacts.require("medicalFile");

module.exports = function(deployer) {
  deployer.deploy(medicalFile);
};
