
const APP = {
  port: process.env.APP_PORT || 3800,
  title: process.env.APP_TITLE || ``,
  description: process.env.APP_DESCRIPTION || ``,
  version: process.env.APP_VERSION || `1.0.0`,
  domain: process.env.APP_DOMAIN || `1.0.0`,

  /** CONSTANTS */
  apiApplication: process.env.API_ACTIVE_APP || ``,
  apiApplicationV2: process.env.API_ACTIVE_APP_V2 || ``,
  appSite: process.env.APP_SITE || ``,
  fileUrl: process.env.APP_IMAGE_URL || ``,
  linkCheckinAppointment: process.env.LINK_CHECKIN_APPOINTMENT || ``,
  token: process.env.APP_TOKEN || ``,
  azureStorageConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING || ``,


  apiUploadFile: process.env.API_UPLOAD_FILE || ``
}
export { APP }
