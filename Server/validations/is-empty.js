const isEmpty = (value) =>
  value === undefined || // r we checking the vlaue is undefined?
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
