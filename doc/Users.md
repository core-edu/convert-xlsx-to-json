# Users Resources

    POST users

## Description
Generate a .json file with the users

## Request Body in JSON format

- **usersJson** _(required)_ — object
    - **list** _(required)_ — array

***

## Example
**Request URI**

    https://convert-xlsx-to-json.herokuapp.com/users

**Request Body**
"{"list":[{"NAME":"LUCAS","AGE":"18"},{"NAME":"JOAO","AGE":"25"},{"NAME":"MARIA","AGE":"39"}]}"

**Request Response**
"The file has been saved!"