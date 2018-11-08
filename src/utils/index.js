import axios from 'axios'

export const isNonEmpty = obj => obj && Object.keys(obj).length !== 0

export const isEmpty = obj => !isNonEmpty(obj)

export const cleanMAXResponse = response => response.data.prediction

export const modelCheck = (modelPort=5000, modelIP='localhost') => (
  axios({
    method: 'get',
    url: `http://${modelIP}:${modelPort}/model/metadata`,
    config: { headers: { 'Content-Type' : 'application/json', 'accept' : 'application/json' }, timeout: 8000 }
  })
)

export const predict = (text, modelPort=5000, modelIP='localhost') => (
  axios({
    method: 'post',
    url: `http://${modelIP}:${modelPort}/model/predict`,
    data: { text },
    config: { headers: { 'Content-Type' : 'application/json', 'accept' : 'application/json' }, timeout: 8000 }
  })
)

export const imgPredict = (img, modelPort=5000, modelIP='localhost') => {
  let bodyFormData = new FormData()
  bodyFormData.set('image', img)
  bodyFormData.set('type', img.content_type)

  return axios({
    method: 'post',
    url: `http://${modelIP}:${modelPort}/model/predict`,
    data: bodyFormData,
    config: { headers: { 'Content-Type' : 'multipart/form-data', 'accept' : 'application/json' }, timeout: 8000 }
  })
}
