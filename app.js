// DOM Elements
const searchInput = document.getElementById('searchInput');
const companyList = document.getElementById('companyList');
const formatDisplay = document.getElementById('formatDisplay');
const selectedCompanyElement = document.getElementById('selectedCompany');
const emailFormatElement = document.getElementById('emailFormat');

// Event Listeners
searchInput.addEventListener('input', handleSearch);

function handleSearch(e) {
    const searchQuery = e.target.value.toLowerCase();
    
    // Clear previous results
    companyList.innerHTML = '';
    
    if (searchQuery) {
        const filteredCompanies = Object.keys(EMAIL_FORMATS).filter(company =>
            company.toLowerCase().includes(searchQuery)
        );
        
        if (filteredCompanies.length > 0) {
            companyList.classList.remove('hidden');
            filteredCompanies.forEach(company => {
                const button = document.createElement('button');
                button.className = 'company-button';
                button.textContent = company;
                button.addEventListener('click', () => handleCompanyClick(company));
                companyList.appendChild(button);
            });
        } else {
            companyList.classList.remove('hidden');
            const noResults = document.createElement('p');
            noResults.textContent = 'No companies found';
            noResults.style.color = 'rgb(156, 163, 175)';
            companyList.appendChild(noResults);
        }
    } else {
        companyList.classList.add('hidden');
    }
}

function handleCompanyClick(company) {
    // Display the selected company and its email format
    selectedCompanyElement.textContent = company;
    emailFormatElement.textContent = EMAIL_FORMATS[company];
    formatDisplay.classList.remove('hidden');
    
    // Clear search
    searchInput.value = '';
    companyList.classList.add('hidden');
} 