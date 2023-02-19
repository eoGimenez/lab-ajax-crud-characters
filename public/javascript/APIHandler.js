
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(this.BASE_URL + '/characters')
    .then(response => {
      console.log(response.data)
      return response.data;
    })
    .catch(err => (err))
  }

  getOneRegister (id) {
    return axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      //console.log(response.data)
      return response.data;
    })
    .catch(err => (err))
  }

  createOneRegister ({name, occu, cartoon, weapon}) {
    return axios
    .post(`${this.BASE_URL}/characters`, { name, occu, cartoon, weapon })
    .then(response => {
      return response.data;
    })
    .catch(err => (err))
  }

  updateOneRegister (id, {name, occu, cartoon, weapon}) {
    return axios
    .put(`${this.BASE_URL}/characters/${id}`, { name, occu, cartoon, weapon })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  }

  deleteOneRegister (id) {
    //console.log(id)
    return axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => (err))
  }
}
