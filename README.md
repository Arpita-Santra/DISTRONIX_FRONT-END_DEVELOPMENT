
# DISTRONIX_FRONT-END_DEVELOPMENT

This is a Front-end application which has,
1. A basic HTML form that accepts a sensor id.
2. A map that displays the live location of the sensor selected in the
above step. Location coordinates should be fetched from the REST
API.


## API REFERENCES

#### REST API ENDPOINTS 

Sensor location:

Method: POST

Url: http://35.197.106.255:3000/api/v1.1/lastMultiple

Sample Body:

Type: x-www-form-urlencoded

Key: devid

Value: d8c68c44e70825b746c80c41add7279a


#### GET /own_api_key

URL : https://developers.google.com/maps

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |




## Acknowledgements

 - [Google Maps Platform](https://developers.google.com/maps)
 - [Stack Overflow](https://stackoverflow.com/)

