module.exports = {
  "*": (filenames) => `npm run format:files -u ${filenames.join(" ")}`,
};
