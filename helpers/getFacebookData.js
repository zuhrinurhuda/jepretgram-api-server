import FB from 'fb'

const getFacebookData = () => {
  return new Promise ((resolve, reject) => {
    FB.api('/me', { fields: ['name', 'email', 'gender', 'picture'] }, function (response) {
      if (!response || response.error) {
        // console.log(!response ? 'error occurred' : response.error)
        // return
        reject(response.error || 'error occurred')
      } else {
        resolve(response)
      }
    })
  })
}

export default getFacebookData