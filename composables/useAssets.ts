export default function useAssets () {
  const allAssets = {
    images: import.meta.globEager("../assets/images/*.*"),
    ecology: import.meta.globEager("../assets/ecology/**/*.*"),
  }

  const assetsMapping: Record<string, Record<string, {}>> = {}

  Object.entries(allAssets).forEach(([assetType, assets]) => {
    assetsMapping[assetType] = {}

    Object.entries(assets).forEach(([path, imported]) => {
      const fileName = path.replace(/.+(\/|\\)assets(\/|\\)\w+(\/|\\)/, "")
      assetsMapping[assetType][fileName] = imported.default
    })
  })

  const getImageURL = (imageFilename: string) => assetsMapping.images[imageFilename]
  const getAssets = (assetType: string) => assetsMapping[assetType]

  return { getImageURL, getAssets }
}
