import FB from 'fb'

const getFbData = () => {
  return new Promise ((resolve, reject) => {
    FB.api('/me', { fields: ['id', 'name', 'email', 'gender', 'picture'] }, function (response) {
      if (!response) {
        reject('error occurred')
      } else {
        resolve(response)
      }
    })
  })
}

export default getFbData