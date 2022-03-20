package com.Conduit.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
        plugin = {
                "json:target/cucumber.json",
                "html:target/cucumber-html-reports"
                },
        features = "src/test/resources/features",
        glue = "com/Conduit/step_definitions",
        dryRun = false,
        tags = "@wip"

)
public class TestRunner {
}
