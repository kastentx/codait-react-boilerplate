import axios from 'axios'

const KUBE_MODEL_IP = process.env.REACT_APP_KUBE_IP || ''
const KUBE_MODEL_PORT = process.env.REACT_APP_KUBE_MODEL_PORT || ''
const LOCAL_MODEL_PORT = process.env.REACT_APP_LOCAL_MODEL_PORT || 5000
const DEPLOY_TYPE = process.env.REACT_APP_DEPLOY_TYPE || ''

export const OBJ_LIST = ['background', 'airplane', 'bicycle', 'bird', 'boat', 
'bottle', 'bus', 'car', 'cat', 'chair', 'cow', 'dining table', 
'dog', 'horse', 'motorbike', 'person', 'potted plant', 'sheep', 
'sofa', 'train', 'tv']

let objMap = {} 
OBJ_LIST.forEach((x,i)=> objMap[x]=i)
export const OBJ_MAP = objMap

export const COLOR_MAP = {
  green: [0, 128, 0],
  red: [255, 0, 0],
  blue: [0, 0, 255],
  purple: [160, 32, 240],
  pink: [255, 185, 80],
  teal: [0, 128, 128],
  yellow: [255, 255, 0],
  gray: [192, 192, 192]
}

export const COLOR_LIST = Object.values(COLOR_MAP)

export const getColor = pixel => COLOR_LIST[pixel - 1]

export const isNonEmpty = obj => {
  return obj && Object.keys(obj).length !== 0
}

export const isEmpty = obj => {
  return !isNonEmpty(obj)
}

export const cleanDocs = docs => {
  return docs.rows.map(
    doc=> {
      const segList = Object.keys(doc.doc._attachments)
      let segObject = {}
      for (let seg of segList) {
        segObject[seg] = { 
          name: seg,
          hasData: doc.doc._attachments[seg] && true
        }
      }
      return {
        id: doc.doc._id,
        rev: doc.value.rev,
        width: doc.doc.width,
        height: doc.doc.height,
        segments: segObject
      }
    }
  )
}

export const OGpredict = img => {
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

export const cleanMAXResponse = response => {
  return response.data.prediction
}