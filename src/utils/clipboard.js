
/**
   * Get content from clipboard and execute given callback
   * @param {function} callback
   */
export const fromClipboard = (callback) => navigator.clipboard.readText()
  .then((text) => callback(text))
  .catch((err) => console.log(err));
