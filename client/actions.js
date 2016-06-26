export const SHOW_DETAILS = 'SHOW_DETAILS'
export const HIDE_DETAILS = 'HIDE_DETAILS'





export function showDetails (link) {
  return {
    type: SHOW_DETAILS,
    id: link
  }
}

export function hideDetails () {
  return {
    type: HIDE_DETAILS
  }
}



 
