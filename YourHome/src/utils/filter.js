'use strict'
import { propertyList } from "../app/data/property.js"

const location = document.getElementById('locate')


const propertyListComponent = (imageUrl, name, rootName, id, price) => {

  const cardContainer = document.createElement('div')
  const list = document.createElement('div')
  const divider = document.createElement('div')
  const dividerBottom = document.createElement('div')
  const propertyBottom = document.createElement('div')
  const image = document.createElement('img')
  const typography = document.createElement('p')
  const propertyDetail = document.createElement('a')
  const priceElement = document.createElement('span')
  const ratingTitle = document.createElement('span')
  const ratingStar1 = document.createElement('i')
  const ratingStar2 = document.createElement('i')
  const ratingStar3 = document.createElement('i')
  const ratingStar4 = document.createElement('i')
  const ratingStar5 = document.createElement('i')
  const cub = document.createElement('i')
  const bed = document.createElement('i')
  const cubText = document.createElement('p')
  const bedText = document.createElement('p')
  const ratingStarList = document.createElement('span')

  propertyBottom.classList.add('card-meta')

  priceElement.innerText = `Price\n ${price || '100,000'} ETB`
  priceElement.style.lineHeight = '37px'

  ratingTitle.innerText = `Rating`
  ratingStar1.className = 'fa fa-star'
  ratingStar2.className = 'fa fa-star'
  ratingStar3.className = 'fa fa-star'
  ratingStar4.className = 'fa fa-star'
  ratingStar5.className = 'fa fa-star'

  ratingStar1.style.color = 'orange'
  ratingStar2.style.color = 'orange'
  ratingStar3.style.color = 'orange'
  ratingStar4.style.color = 'orange'
  ratingStar5.style.color = 'orange'

  ratingStarList.appendChild(ratingTitle)
  ratingStarList.appendChild(ratingStar1)
  ratingStarList.appendChild(ratingStar2)
  ratingStarList.appendChild(ratingStar3)
  ratingStarList.appendChild(ratingStar4)
  ratingStarList.appendChild(ratingStar5)

  cub.className = 'fa fa-cube'
  bed.className = 'fa fa-bed'
  list.classList.add('property-info')
  cubText.innerText = '800ftx200ft'
  bedText.innerText = 'Bed'
  list.appendChild(cub)
  list.appendChild(cubText)
  list.appendChild(bed)
  list.appendChild(bedText)
  divider.classList.add('divider')
  dividerBottom.classList.add('divider')
  cardContainer.classList.add('property-card-container')
  image.src = imageUrl
  image.classList.add('property-image')
  typography.innerText = name
  typography.classList.add('property-name')
  propertyDetail.innerText = 'Property Detail'
  propertyDetail.classList.add('property-detail')
  propertyDetail.href = `/src/app/pages/property_details.html?property=${encodeURIComponent(name)}`

  propertyBottom.appendChild(priceElement)
  propertyBottom.appendChild(ratingStarList)

  cardContainer.appendChild(image)
  cardContainer.appendChild(typography)
  cardContainer.appendChild(propertyDetail)
  cardContainer.appendChild(divider)
  cardContainer.appendChild(list)
  cardContainer.appendChild(dividerBottom)
  cardContainer.appendChild(propertyBottom)
  cardContainer.id = `${id}`
  document.getElementById(rootName).appendChild(cardContainer)

}




const newDataList = [...propertyList]


const listContainer = document.getElementById('property-lists')


const createList = (lists) => {
  lists.map((data, index) => {
    propertyListComponent(
      data.propertyImage, 
      data.propertyName, 
      'property-lists', 
      data.propertyImage,
      data.price || data.Price
    )
  })
}


const removeElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element && listContainer) {
    listContainer.removeChild(element)
  }
}

const removeDuplicatedElement = (mainElement) => {
  if (mainElement) {
    while (mainElement.firstChild) mainElement.removeChild(mainElement.firstChild);
  }
}



location?.addEventListener('input', (e) => {
  const isFound = propertyList?.find(data => data.location == e.target.value)?.location;
  if (e.target.value !== '') {
    if (isFound) {
      propertyList?.map(data => {
        if (data.location !== e.target.value) removeElement(data.propertyImage)
      })
    }
  } else {
    removeDuplicatedElement(listContainer)
    createList(newDataList)
  }
})


// Make sure the DOM is fully loaded before creating the list
document.addEventListener('DOMContentLoaded', () => {
  if (listContainer) {
    createList(propertyList)
  }
})










