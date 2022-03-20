@wip

Feature:Sign up Functionality


Scenario: User should create new subscription
  Given User is on the login page
  And   User click to  Sign Up Button
  When   User fill the username box, Email box  and Password box and click sign up button
  Then  User should be able to see "Home — Conduit" page


