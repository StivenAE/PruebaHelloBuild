Feature: Search in browser

  I want to perform a search on google

  Scenario: Googling hello build and explored the page
    Given I open the google page
    When I am typing my search request Hello build into Google and enter
    And I am validate total results and search time
    When I am pressed the first search result
    And validate correct page
    And I am pressed each of the buttons on the navigation bar and also scroll down
    When I press the about us button
    And I am fill out the form
    Then it should search, show the results and time taken, the page can be navigated and the form can be filled

#
#Scenario: The results do not match the search performed
 #   Given I open the google page
  #  When I am typing my search request Hello build into Google
   # And I am pressing enter key on Google
    #Then Error message from the page


