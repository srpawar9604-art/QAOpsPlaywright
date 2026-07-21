@validation
Feature: Ecommerce Validation
Scenario Outline: Placing the order
Given a login to the Ecommerce2 application with "<username>" and "<password>"
Then verify the error message is displayed

Examples:
    | username | password | 
    | anshika@gmail.com  | Iamking@000  | 
    |shubham@gmail.com| password@1223 |
    |Shital@gmail.com| password@1223 |