'use strict'
import { propertyList } from "../app/data/property.js"

// Add console logs for debugging
console.log("filter.js loaded");
console.log("Property list in filter.js:", propertyList);

const location = document.getElementById('locate')
console.log("Location input element:", location);

const propertyListComponent = (imageUrl, name, rootName, id, price) => {
  console.log("Creating property card for:", name);
  
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
  
  const container = document.getElementById(rootName);
  if (container) {
    container.appendChild(cardContainer);
    console.log("Property card added to container:", rootName);
  } else {
    console.error("Container not found:", rootName);
  }
}




const newDataList = [...propertyList]


const listContainer = document.getElementById('property-lists')
console.log("List container element:", listContainer);


const createList = (lists) => {
  console.log("Creating list with", lists.length, "properties");
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
    console.log("Removed element:", elementId);
  } else {
    console.log("Could not remove element:", elementId);
  }
}

const removeDuplicatedElement = (mainElement) => {
  if (mainElement) {
    while (mainElement.firstChild) mainElement.removeChild(mainElement.firstChild);
    console.log("Removed all children from container");
  } else {
    console.log("Could not remove children, container not found");
  }
}



location?.addEventListener('input', (e) => {
  console.log("Location input changed:", e.target.value);
  const isFound = propertyList?.find(data => data.location == e.target.value)?.location;
  if (e.target.value !== '') {
    if (isFound) {
      console.log("Location found:", isFound);
      propertyList?.map(data => {
        if (data.location !== e.target.value) removeElement(data.propertyImage)
      })
    } else {
      console.log("Location not found");
    }
  } else {
    console.log("Location input cleared, showing all properties");
    removeDuplicatedElement(listContainer)
    createList(newDataList)
  }
})


// Make sure the DOM is fully loaded before creating the list
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded in filter.js");
  if (listContainer) {
    console.log("List container found after DOM loaded");
    createList(propertyList)
  } else {
    console.error("List container not found after DOM loaded!");
  }
})

// Also try to run the code immediately in case DOMContentLoaded already fired
if (listContainer) {
  console.log("List container found immediately in filter.js");
  createList(propertyList)
} else {
  console.log("List container not found immediately in filter.js, waiting for DOMContentLoaded");
}










