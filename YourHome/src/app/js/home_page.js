'use strict'

import { propertyList } from "../data/property.js"

// Add console logs for debugging
console.log("home_page.js loaded");
console.log("Property list:", propertyList);

const propertyListComponent=(property)=>{
    console.log("Creating property card for:", property.propertyName);
    
    const cardContainer=document.createElement('div')
    const list=document.createElement('div')
    const divider=document.createElement('div')
    const dividerBottom=document.createElement('div')
    const propertyBottom=document.createElement('div')
    const image=document.createElement('img')
    const typography=document.createElement('p')
    const propertyDetail=document.createElement('a')
    const price=document.createElement('span')
    const ratingTitle=document.createElement('span')
    const ratingStar1=document.createElement('i')
    const ratingStar2=document.createElement('i')
    const ratingStar3=document.createElement('i')
    const ratingStar4=document.createElement('i')
    const ratingStar5=document.createElement('i')
    const cub=document.createElement('i')
    const bed=document.createElement('i')
    const cubText=document.createElement('p')
    const bedText=document.createElement('p')
    const ratingStarList=document.createElement('span')
    
    propertyBottom.classList.add('card-meta')

    price.innerText=`Price\n ${property.price || property.Price} ETB`
    price.style.lineHeight='30px'

    ratingTitle.innerText=`Rating`
    ratingStar1.className='fa fa-star'
    ratingStar2.className='fa fa-star'
    ratingStar3.className='fa fa-star'
    ratingStar4.className='fa fa-star'
    ratingStar5.className='fa fa-star'

    ratingStar1.style.color='orange'
    ratingStar2.style.color='orange'
    ratingStar3.style.color='orange'
    ratingStar4.style.color='orange'
    ratingStar5.style.color='orange'

    ratingStarList.appendChild(ratingTitle)
    ratingStarList.appendChild(ratingStar1)
    ratingStarList.appendChild(ratingStar2)
    ratingStarList.appendChild(ratingStar3)
    ratingStarList.appendChild(ratingStar4)
    ratingStarList.appendChild(ratingStar5)

    cub.className='fa fa-cube'
    bed.className='fa fa-bed'
    list.classList.add('property-info')
    cubText.innerText='800ftx200ft'
    bedText.innerText='Bed'
    list.appendChild(cub)
    list.appendChild(cubText)
    list.appendChild(bed)
    list.appendChild(bedText)
    divider.classList.add('divider')
    dividerBottom.classList.add('divider')
    cardContainer.classList.add('property-card-container')
    image.src=property.propertyImage
    image.classList.add('property-image')
    typography.innerText=property.propertyName
    typography.classList.add('property-name')
    propertyDetail.innerText='Property Detail'
    propertyDetail.classList.add('property-detail')
    propertyDetail.href=`/src/app/pages/property_details.html?property=${encodeURIComponent(property.propertyName)}`

    propertyBottom.appendChild(price)
    propertyBottom.appendChild(ratingStarList)

    cardContainer.appendChild(image)
    cardContainer.appendChild(typography)
    cardContainer.appendChild(propertyDetail)
    cardContainer.appendChild(divider)
    cardContainer.appendChild(list)
    cardContainer.appendChild(dividerBottom)
    cardContainer.appendChild(propertyBottom)

    const propertyListContainer = document.getElementById('property-lists');
    if (propertyListContainer) {
        propertyListContainer.appendChild(cardContainer);
        console.log("Property card added to container");
    } else {
        console.error("Property list container not found!");
    }
}

// Make sure the DOM is fully loaded before creating the list
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
    const propertyListContainer = document.getElementById('property-lists');
    if (propertyListContainer) {
        console.log("Property list container found");
        // Display first 3 properties without modifying the original array
        propertyList.slice(0,3).forEach((property)=>{
            propertyListComponent(property)
        })
    } else {
        console.error("Property list container not found after DOM loaded!");
    }
})

// Also try to run the code immediately in case DOMContentLoaded already fired
const propertyListContainer = document.getElementById('property-lists');
if (propertyListContainer) {
    console.log("Property list container found immediately");
    // Display first 3 properties without modifying the original array
    propertyList.slice(0,3).forEach((property)=>{
        propertyListComponent(property)
    })
} else {
    console.log("Property list container not found immediately, waiting for DOMContentLoaded");
}