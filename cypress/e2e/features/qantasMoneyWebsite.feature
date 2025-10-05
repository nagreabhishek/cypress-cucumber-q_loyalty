Feature: UI tests for the Qantas Money website

    Scenario: Navigate to the Google Play website- AC1 & AC3
        Given A user navigates to "/app"
        Then the user checks the Acknowledgement of Country
        When the user clicks on the "google play button"
        Then the "google playstore" page is displayed

    Scenario: Navigate to the Qantas Money Login page- AC2 & AC3
        Given A user navigates to "/"
        Then the user checks the Acknowledgement of Country
        When the user clicks on the "Login button"
        Then the "login" page is displayed

    Scenario: Verify Qantas Points- AC3 & AC4
        Given A user navigates to "/qantas-pay/buy-currency"
        Then the user checks the Acknowledgement of Country
        Then the user enters amount into the calculator to check Qantas Points
            | amount | points |
            | 2500   | 5000   |