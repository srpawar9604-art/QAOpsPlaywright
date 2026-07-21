
Feature: Ecommerce Validation
@Regression
Scenario: Placing the order
Given a login to the Ecommerce application with "anshika@gmail.com" and "Iamking@000"
When Add 'ZARA COAT 3' to the cart
Then verify that 'ZARA COAT 3' is displayed in the cart
When enter valid details & place the order
Then verify order in present in the OrderHistory

@validation
Feature: Ecommerce Validation
Scenario Outline: Placing the order
Given a login to the Ecommerce2 application with "<username>" and "<password>"
Then verify the error message is displayed

Examples:
    |username            | password| 
    |anshika@gmail.com   | Iamking@000 | 
    |shubham@gmail.com   | password@1223 |
    |Shital@gmail.com    | password@1223 |

    