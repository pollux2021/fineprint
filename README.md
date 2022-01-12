### fineprint

fingerprintjs 封装, 获取浏览器 visitorId

### ES6
```code
npm install fineprint
yarn add fineprint
```
```javascript
import { getResultSync, getVisitorIdSync } from "fineprint"

// 获取VisitorId
;(async () => {
	const visitorId = await getVisitorIdSync()
	const result = await getResultSync()
	console.log(visitorId)
	console.log(result)
})()
```

### 浏览器
```html
<script src="./dist/fineprint.min.js"></script>
<script>
	;(function () {
		var finePrint = window.fineprint

		// 获取visitorId
		finePrint.getVisitorIdSync().then(function (code) {
			console.log(code)
		})

		// 获取所有参数
		finePrint.getResultSync().then(function (res) {
			console.log(res)
		})
	})()
</script>
```
