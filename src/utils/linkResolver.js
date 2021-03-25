const linkResolver = doc => {
  if (doc.uid === 'frontpage') {
    return '/'
  }
  // URL for a category type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  // URL for a product type
  if (doc.type === 'work') {
    return `/work/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}

module.exports = linkResolver
