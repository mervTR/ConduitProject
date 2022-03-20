

SAMPLE CUCUMBER BDD FRAMEWORK

STEPS TO SET UP FRAMEWORK
Step 1:
1. JDK
   2.Intellij IDE
3. Adding  Cucumber plugins and Dependencies
4. Set Environment Variables
   i. Java Home
   ii. Maven Home
   iii. M2home

Step 2: Creating Maven Project and Updating pom.xml with dependencies from Maven Repo
a)	Cucumber-core
b)	Cucumber-html
c)	Cucumber-java
d)	Cucumber-junit
e)	Selenium-java
f)	Gherkin
g)	Cucumber-reporting
h)	Junit

To Create A new Project:
Go to IntelliJ IDE -> File ->New -> Project -> Maven -> Next -> Name Of Project -> Finish

In this project
I use:
Selenium Webdriver for Browser Automation
Maven for   Building tool.  We have pom.xml file which has all plugins and dependencies we need to build the project
Gherkin Language for Feature files
Junit for Assertions
Java for coding

After creating a new project lets name it : CucumberDemo , we start adding all required dependencies from Maven repository. This is the link to retrieve all dependencies.
Since this is a demo project we can use  maven repo as an open source  https://mvnrepository.com/ .

After creating the project , we create a package structure  in  src/test/java folder.

We implement POM (Page Object Model). We create separate folders named:

Feature ->  Contains all .feature files  like login.feature.
Example:

Feature: User logins to Shopify App and Place an Order to buy
Background:
Given User launches chrome browser



@Then("User selects Filter by {string} and sort by {string}")
public void user_selects_filter_by_and_sort_by(String filterBy, String sortBy)  {
loginPage.filterByAndSortBy(filterBy,sortBy);
}

Pages -> Contains coding part of automation, implementing all methods and functionality like loginPage.java.
LocatorPages -> We use locators to locate a WebElement and keep all locators in a separate class. Like loginForm.java.
Utilities -> To implement all reusable methods and codes in it.
-------------------------------------------------------------

Benefits of Page Object Model:
Increase readability of codes: Improves readability due to clean separation between test code and page specific code

Increase reusability of codes :  We could achieve code reusability by writing the code once and use it in different tests.

Easy to keep maintenance : There is a clean separation between test code and page specific code such as locators and layout which becomes very easy to maintain code.
Code changes only on Page Object Classes when a UI change occurs. It enhances test maintenance and reduces code duplication.


Target Folder:
This folder contains several subfolders. Like Cucumber-report-html ,maven-archiver,
Maven-status , surefire-reports etc.

Report Sample:

Sample Feature File: Login.feature

It has feature extension and written with Gherkin Language which consist of several key words.
Given, When ,Then ,And.  Feature, Scenario, Scenario Outline, Examples, Background.
Background: We use it not to repeat the same steps again. In the sample: I put two steps in to Background because I have to repeat them again in two Scenarios.

Scenario Outline is used with Example Keyword. It is used to execute the same scenario several times , such as logging on the same app with different users and passwords.
We do not need to create Scenario for each login instead we use Scenario Outline option.

TestRunner Class:
To execute the test cases we have A Runner Class. We can add more plugins to create different type of reports.

@RunWith(Cucumber.class)
@CucumberOptions(
features = "./Features/",
glue = "stepDefinitions",
tags = "@login",
dryRun = false,
monochrome = true, // remove unnecessary characters
plugin = {"pretty","html:test-output","json:target/cucumber.json"}
)
public class TestRunner {
}

To define the test cases we use tags like  
"@login","@smoke","@sanity","@regression". Let’s say we have 200 TCs  and 8-10 TCs are tagged as   "@smoke" when we execute locally from our Runner Class with tag "@smoke" all 8-10
test cases will be executed.
We can execute TCs from Runner Class , Command Line, Maven Lifecycle option from right  hand-side or inside Feature file..

After commit and push of codes to our repo and configure and set up the pipeline  we can trigger our TCs in pipeline.

Adding Docker Image:
First Download  and Set up Docker  https://docs.docker.com/desktop/windows/install/

Go to IntelliJ and open your project
File-> Settings -> Plugins -> Type Docker and Install

To see Report  Go to Target Folder-> cucumber-html-reports -> overview-features.html and open it in browser.
To delete Target folder  Go to Maven on the right top side - click on Lifecycle -> clean
To create  a report in Target folder Go to Maven on the right top side - click on Lifecycle -> verify

To execute Test Cases Locally - > Go to TestRunner class  RUN it with tags="@wip"

----------------------------------------------------------------
 



