import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { verifyFooter } from "../common/utilities";
import '@badeball/cypress-cucumber-preprocessor';
import 'cypress-xpath';
import 'cypress-real-events/support';


let currentPage;

Given("A user navigates to {string}", (url) => {
  cy.visit(url);
});

Then("the user checks the Acknowledgement of Country", () => {
  cy.url().then((url) => {
    currentPage = url;
    verifyFooter(currentPage);
  });
})

When("the user clicks on the {string}", (buttonName) => {
  if (buttonName.includes('google play')) {
    cy.get('img[alt="Get it on Google Play"]')
      .parent('a')
      .should('have.attr', 'href')
      .then((playStoreUrl) => {
        cy.visit(playStoreUrl);
      });
  } else {
    cy.xpath("//button[contains (@class,'LoginLinks')]/child::span[text()='Log in']").realHover('mouse');
    cy.xpath("//div[text()='Qantas Pay']/ancestor::a")
      .should('have.attr', 'href')
      .then((loginUrl) => {
        cy.visit(loginUrl);
      });
  }
});

Then("the {string} page is displayed", (page) => {
  if (page.includes('google')) {
    cy.url().should('include', 'play.google.com');
  } else {
    cy.url().should('include', 'accounts.qantas.com');
  }
});

Then("the user enters amount into the calculator to check Qantas Points", (table) => {
  let amount;
  let points;
  let actualPoints;
  table.hashes().forEach((row) => {
    amount = row.amount;
    points = row.points;
  });
  console.log("Amount and Points are", amount, " && ", points);
  cy.xpath("//label[text()='If you have']/following::input[@name='source-amount']").clear().type(amount);
  cy.xpath("//span[text()='You could earn']/following-sibling::div")
    .invoke('text')
    .then((text) => {
      actualPoints = text.replace('PTS', '').replace('qantas-roo', '').replace(',','').trim();
      console.log('Extracted value:', actualPoints);
      expect(points).to.equal(actualPoints);
    });
});
