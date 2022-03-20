$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Article.feature");
formatter.feature({
  "name": "Articles Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "users should be able to create articles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logged in as \"merv\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Conduit.step_definitions.ArticleStepDef.user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to  \"New Article\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.Conduit.step_definitions.ArticleStepDef.user_click_to_module(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to create articles",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Conduit.step_definitions.ArticleStepDef.user_should_be_able_to_create_articles()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "User should login with valid credentials ibrahim",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to  Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.user_click_to_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills the \"mervim@gmail.com\" box and Email box  and \"merv123\" box and click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.fill_the_box_and_Email_box_and_box_and_click_to_sign_in_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Home — Conduit\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.user_should_be_able_to_see_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Signup.feature");
formatter.feature({
  "name": "Sign up Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "User should create new subscription",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to  Sign Up Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.user_click_to_Sing_Up_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the username box, Email box  and Password box and click sign up button",
  "keyword": "When "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.fill_the_username_box_Email_box_and_Password_box_and_click_sign_up_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \"Home — Conduit\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Conduit.step_definitions.LoginStepDef.user_should_be_able_to_see_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});