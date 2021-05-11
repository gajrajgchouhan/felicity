pragma solidity ^0.5.0;

contract medicalFile {
  string medicalFileHash;

  //read from file
  function set(string memory _medicalFileHash) public {
    medicalFileHash = _medicalFileHash;
  }

  //write to the IPFS
  function get() public view returns (string memory) {
    return medicalFileHash;
  }
}
