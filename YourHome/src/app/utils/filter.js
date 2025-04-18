import { propertyList } from '../data/property.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Filter.js loaded');
    console.log('Property list:', propertyList);

    const propertyListContainer = document.getElementById('property-lists');
    const locationInput = document.getElementById('location');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const propertyTypeSelect = document.getElementById('property-type');

    if (!propertyListContainer) {
        console.error('Property list container not found');
        return;
    }

    function createPropertyCard(property) {
        console.log('Creating property card for:', property);
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <img src="${property.image}" alt="${property.name}">
            <div class="property-info">
                <h3>${property.name}</h3>
                <p class="price">$${property.price.toLocaleString()}</p>
                <p class="location"><i class="ion-location"></i> ${property.location}</p>
                <div class="property-details">
                    <span><i class="ion-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="ion-water"></i> ${property.bathrooms} Baths</span>
                    <span><i class="ion-resize"></i> ${property.area} sq ft</span>
                </div>
                <a href="../pages/property_details.html?id=${property.id}" class="view-details">View Details</a>
            </div>
        `;
        return card;
    }

    function filterProperties() {
        console.log('Filtering properties');
        const location = locationInput.value.toLowerCase();
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
        const propertyType = propertyTypeSelect.value;

        // Clear existing property cards
        while (propertyListContainer.firstChild) {
            propertyListContainer.removeChild(propertyListContainer.firstChild);
        }

        // Filter and display properties
        const filteredProperties = propertyList.filter(property => {
            const matchesLocation = property.location.toLowerCase().includes(location);
            const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
            const matchesType = propertyType === 'all' || property.type === propertyType;
            return matchesLocation && matchesPrice && matchesType;
        });

        console.log('Filtered properties:', filteredProperties);

        if (filteredProperties.length === 0) {
            propertyListContainer.innerHTML = '<p class="no-results">No properties found matching your criteria.</p>';
            return;
        }

        filteredProperties.forEach(property => {
            const card = createPropertyCard(property);
            propertyListContainer.appendChild(card);
        });
    }

    // Add event listeners for filter inputs
    locationInput.addEventListener('input', filterProperties);
    minPriceInput.addEventListener('input', filterProperties);
    maxPriceInput.addEventListener('input', filterProperties);
    propertyTypeSelect.addEventListener('change', filterProperties);

    // Initial display of all properties
    filterProperties();
}); 