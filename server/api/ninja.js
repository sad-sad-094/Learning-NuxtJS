/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

export default defineEventHandler(async (event) => {
  // //Handle query params
  // const { name } = useQuery(event)
  // //Handle post data
  // const { age } = await useBody(event)

  //Currency API
  const { data } = $fetch('https://api.currencyapi.com/v3/latest?apikey=R8BiSkbChojiXFK7DIaTJ8mvyb117AdrYtPCMUSe')

  return data
})
