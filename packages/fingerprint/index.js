import FingerPrint from './src/fingerprint'
FingerPrint.install = Vue => {
  Vue.component(FingerPrint.name, FingerPrint)
}
export default FingerPrint
