import axios from 'axios'

const KUBE_MODEL_IP = process.env.REACT_APP_KUBE_IP || ''
const KUBE_MODEL_PORT = process.env.REACT_APP_KUBE_MODEL_PORT || ''
const LOCAL_MODEL_PORT = process.env.REACT_APP_LOCAL_MODEL_PORT || 5000
const DEPLOY_TYPE = process.env.REACT_APP_DEPLOY_TYPE || ''

export const isNonEmpty = obj => obj && Object.keys(obj).length !== 0

export const isEmpty = obj => !isNonEmpty(obj)

export const cleanMAXResponse = response => response.data.prediction

export const modelCheck = () => {
  let modelPort
  let modelIP
  if (DEPLOY_TYPE === 'KUBE') {
    modelPort = KUBE_MODEL_PORT
    modelIP = KUBE_MODEL_IP
  } else {
    modelPort = LOCAL_MODEL_PORT
    modelIP = 'localhost'
  }
  return axios({
    method: 'get',
    url: `http://${modelIP}:${modelPort}/model/metadata`,
    config: { headers: { 'Content-Type' : 'application/json', 'accept' : 'application/json' }, timeout: 8000 }
  })
}

export const predict = text => {
  let modelPort
  let modelIP
  let formData = { text }
  if (DEPLOY_TYPE === 'KUBE') {
    modelPort = KUBE_MODEL_PORT
    modelIP = KUBE_MODEL_IP
  } else {
    modelPort = LOCAL_MODEL_PORT
    modelIP = 'localhost'
  }
  return axios({
    method: 'post',
    url: `http://${modelIP}:${modelPort}/model/predict`,
    data: formData,
    config: { headers: { 'Content-Type' : 'application/json', 'accept' : 'application/json' }, timeout: 8000 }
  })
}

export const imgPredict = img => {
  let modelPort
  let modelIP
  let bodyFormData = new FormData()
  bodyFormData.set('text', img)
  if (DEPLOY_TYPE === 'KUBE') {
    modelPort = KUBE_MODEL_PORT
    modelIP = KUBE_MODEL_IP
  } else {
    modelPort = LOCAL_MODEL_PORT
    modelIP = 'localhost'
  }
  return axios({
    method: 'post',
    url: `http://${modelIP}:${modelPort}/model/predict`,
    data: bodyFormData,
    config: { headers: { 'Content-Type' : 'multipart/form-data', 'accept' : 'application/json' }, timeout: 8000 }
  })
}
