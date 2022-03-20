@wip
Feature:Login Functionality
Scenario: User should login with valid credentials ibrahim


Given User is on the login page
And   User click to  Sign in button
And   User fills the "mervim@gmail.com" box and Email box  and "merv123" box and click to sign in button
Then  User should be able to see "Home — Conduit" page