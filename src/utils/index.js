import axios from 'axios'

export const isNonEmpty = obj => obj && Object.keys(obj).length !== 0

export const isEmpty = obj => !isNonEmpty(obj)

export const cleanMAXResponse = response => response.data.prediction

export const getScaledSize = ({ height, width, imageSize }) => {
  if (width > height) {
    return {
      scaledWidth: imageSize,
      scaledHeight: Math.round((height / width) * imageSize)
    }
  } else {
    return {
      scaledWidth: Math.round((width / height) * imageSize),
      scaledHeight: imageSize
    }
  }
}

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

export const imagePredict = (image, modelPort=5000, modelIP='localhost') => {
  let bodyFormData = new FormData()
  bodyFormData.set('image', image)
  bodyFormData.set('type', image.content_type)

  return axios({
    method: 'post',
    url: `http://${modelIP}:${modelPort}/model/predict`,
    data: bodyFormData,
    config: { headers: { 'Content-Type' : 'multipart/form-data', 'accept' : 'application/json' }, timeout: 8000 }
  })
}
