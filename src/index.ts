import FingerprintJS, { murmurX64Hash128 } from "@fingerprintjs/fingerprintjs"

function componentsToCanonicalString(components: any) {
	let result = ""

	console.log(components)
	for (const componentKey of Object.keys(components).sort()) {
		const component = components[componentKey]
		const value = component.error ? "error" : JSON.stringify(component.value)
		result += `${result ? "|" : ""}${componentKey.replace(
			/([:|\\])/g,
			"\\$1"
		)}:${value}`
	}
	return result
}

async function getResultSync() {
	const fpPromise = FingerprintJS.load()
	const fp = await fpPromise
	const result = await fp.get()
	return result
}

async function getVisitorIdSync(): Promise<String> {
	const fpPromise = FingerprintJS.load()
	const fp = await fpPromise
	const result = await fp.get()
	const components = result.components
	components.cookiesEnabled.value = true
	return murmurX64Hash128(componentsToCanonicalString(components))
}

export { getVisitorIdSync, getResultSync }
