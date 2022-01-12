### fineprint

fingerprintjs 封装, 获取浏览器 visitorId


### ES6
Available as an [npm package](https://www.npmjs.com/package/fineprint)
```bash
// with npm
npm install fineprint

// with yarn
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
