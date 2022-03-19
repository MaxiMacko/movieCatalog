class Storage {
  saveAll(data: any) {
    localStorage.setItem('allData', data);
  }

  getAll() {
    localStorage.getItem('allData');
  }
}

const myStorage = new Storage()

export default myStorage