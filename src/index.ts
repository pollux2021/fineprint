import FingerprintJS from '@fingerprintjs/fingerprintjs'

async function getResultSync  () {
  const fpPromise = FingerprintJS.load()
  const fp = await fpPromise
  const result = await fp.get()
  return result
}

async function getVisitorIdSync  (): Promise<String>  {
  const fpPromise = FingerprintJS.load()
  const fp = await fpPromise
  const result = await fp.get()
  return result.visitorId
}

export {getVisitorIdSync, getResultSync}


