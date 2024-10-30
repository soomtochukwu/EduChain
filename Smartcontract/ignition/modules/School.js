const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const Name = "EduChain";
const Symbol = "EC";

module.exports = buildModule("LockModule", (m) => {
  const name = m.getParameter("name", Name);
  const symbol = m.getParameter("symbol", Symbol);

  const lock = m.contract("SchoolSystem", [name, symbol]);

  return { lock };
});
