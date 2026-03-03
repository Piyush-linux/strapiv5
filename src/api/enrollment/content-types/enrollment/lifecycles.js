module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    if (!data.progress) {
      console.log("before Create");
      data.progress = 0;
    }
  },
};
