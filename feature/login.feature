Feature:  add to cart
Background: Validate user
@smoke
Scenario Outline:  Add product to cart
Given user launches Clucb Kitchen  Application
When user clicks to the Menu and enters "<address>"
Then user should be able to see restraunts page as per "<address>"
Then user adds  "<product>" to cart
Examples:
| address |product|
|Seidengasse 44, 1070 Wien, Austria|mamacita dish|