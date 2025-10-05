export function verifyFooter(currentPage) {
    console.log('Current Page:', currentPage);
    // Function to verify the footer
    const checkFooter = () => {
        cy.get('[data-markdown="true"]')
            .should('be.visible')
            .and('contain', 'Aboriginal and Torres Strait Islander Traditional Custodians');
    };
    // Switch the Origin if the current page does not start with the given page
    cy.url().then((url) => {
    const newCurrentPage = new URL(url).origin;
        console.log('Stored URL newCurrentPage:', newCurrentPage);
        if (currentPage.startsWith(newCurrentPage)) {
            console.log('Current page starts with newCurrentPage:', newCurrentPage);
            checkFooter();
        } else {
            cy.origin(newCurrentPage, checkFooter)
        }
    });
};