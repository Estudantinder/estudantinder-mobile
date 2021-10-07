const fs = require('fs')
const path = require('path')

const licenses = fs.readFileSync(
  path.join(__dirname, '..', 'licenses.txt'),
  'utf8'
)

const licensesObj = {}

licenses.split('-----').forEach((license) => {
  const licenseName = license
    .split('\n')[2]
    ?.split(':')[1]
    ?.split('.')[0]
    ?.trim()

  if (!licenseName) return

  const licenseText = license
    .split('\n')
    .map((line, index) => {
      if (index > 3) return line
    })
    .join('\n')
    .trim()

  if (!licenseText) return

  if (licenseText.length > 3000) {
    console.log(licenseName, licenseText.length)
  }

  licensesObj[licenseName] = licenseText
})

fs.writeFileSync(
  path.join(__dirname, '..', 'licenses.json'),
  JSON.stringify(licensesObj)
)
