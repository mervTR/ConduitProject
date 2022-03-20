package com.Conduit.step_definitions;

import com.Conduit.Pages.HomePage;
import com.Conduit.Pages.LoginPage;
import com.Conduit.utilities.BrowserUtils;
import com.Conduit.utilities.ConfigurationReader;
import com.Conduit.utilities.Driver;
import com.github.javafaker.Faker;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class ArticleStepDef {
LoginPage loginPage=new LoginPage();
HomePage homePage=new HomePage();
    Faker faker=new Faker();
    @Given("user logged in as {string}")
    public void user_logged_in_as(String string) {
        Driver.get().get(ConfigurationReader.get("url"));
        loginPage.navigateToSignin_up("Sign in");
        BrowserUtils.waitFor(2);
        loginPage.Emailbox.sendKeys(ConfigurationReader.get("username1"));
        loginPage.Password1.sendKeys(ConfigurationReader.get("password1"));
        loginPage.SigninButton.click();
        BrowserUtils.waitFor(3);
    }


    @Given("user click to  {string} module")
    public void user_click_to_module(String string) {
        homePage.NewArticleButton.click();
        BrowserUtils.waitFor(3);

    }

    @Then("User should be able to create articles")
    public void user_should_be_able_to_create_articles() {
        String title=faker.name().title();
        String articleTitle=faker.shakespeare().hamletQuote();

      //  homePage.TitleArea.sendKeys("first try");
        homePage.TitleArea.sendKeys(title);
        BrowserUtils.waitFor(2);
       // homePage.ArticleAboutArea.sendKeys("anytime");
        homePage.ArticleAboutArea.sendKeys(articleTitle);
        BrowserUtils.waitFor(2);
       // homePage.WriteArticleArea.sendKeys("if ı gonna pass first try, I will be good tester");
        homePage.WriteArticleArea.sendKeys(articleTitle);
        BrowserUtils.waitFor(2);
        homePage.EntertagsArea.sendKeys("tester");
        BrowserUtils.waitFor(2);
        homePage.SubmitButton.click();

    }



}
